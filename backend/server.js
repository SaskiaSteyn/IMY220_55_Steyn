import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'
import path from 'path'

// Database URL and client setup
const url = 'mongodb+srv://u17267162:5xcc2P5U5988t0Wxr@clusterexample.mnsh8.mongodb.net/?retryWrites=true&w=majority&appName=ClusterExample';
const client = new MongoClient(url);

// Create the Express app
const app = express();
app.use(express.static("frontend/public"));
app.use(express.json());

// Connect to MongoDB once when the server starts
async function connectDB() {
    try {
        await client.connect();
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process if unable to connect to MongoDB
    }
}

// LOGIN, SIGNUP, LOGOUT
app.post('/login', async function (req, res) {
    try {
        const database = client.db('PlaylistrDB'); // Use the already connected client
        const col = database.collection("users");

        // Find user by either username or email
        const userFound = await col.findOne({
            $or: [{ 'username': req.body.username }, { 'email': req.body.username }],
            'password': req.body.password
        });

        if (userFound) {
            res.json({ success: true, userId: userFound._id, user: userFound });
        } else {
            res.json({ success: false, message: "Invalid username/email or password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.post('/refresh', async function (req, res) {
    try {
        const database = client.db('PlaylistrDB'); // Use the already connected client
        const col = database.collection("users");

        // Find user by either username or email
        const userFound = await col.findOne({ _id: new ObjectId(req.body.userId) });

        if (userFound) {
            res.json({ success: true, userId: userFound._id, user: userFound });
        } else {
            res.json({ success: false, message: "No such user" });
        }
    } catch (error) {
        console.error("Error during refresh:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// PLAYLISTS CRUD

// Fetch playlists associated with the logged-in user
app.post('/playlists', async function (req, res) {
    console.log("Fetching playlists for user:", req.body);
    const { userId } = req.body;

    if (!userId) {
        try {
            const database = client.db('PlaylistrDB'); // Use the already connected client
            const col = database.collection("playlists");
    
            //Show all playlists
            const playlists = await col.find().toArray();            
            res.json(playlists);
        } catch (error) {
            console.error("Error fetching playlists:", error);
            res.status(500).json({ success: false, message: "Failed to fetch playlists." });
        } 
        return;
    }

    try {
        const database = client.db('PlaylistrDB'); // Use the already connected client
        const col = database.collection("users_full");

        // Find playlists by userId
        const user = await col.findOne({ _id: new ObjectId(userId) });
        res.json(user.playlists);
    } catch (error) {
        console.error("Error fetching playlists:", error);
        res.status(500).json({ success: false, message: "Failed to fetch playlists." });
    }
});

// Get a specific playlist
app.post('/playlist', async function (req, res) {
    console.log("Fetching playlist:", req.body);
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ success: false, message: "Playlist ID is required." });
    }

    try {
        const database = client.db('PlaylistrDB'); // Use the already connected client
        const col = database.collection("playlists");
        const songsCol = database.collection("songs");

        // Fetch playlist by its ID
        const playlist = await col.findOne({ '_id': new ObjectId(id) });
        const songIds = playlist.songs.map(song => new ObjectId(song._id));
        const songs = await songsCol.find({'_id': {$in: songIds}}).toArray();
        for (let i = 0; i < songs.length; i++) {
            songs[i].timestamp_added = playlist.songs.find(song => song._id.toString() === songs[i]._id.toString()).timestamp_added;
        }
        playlist.songs = songs;

        if (playlist) {
            res.json(playlist);
        } else {
            res.status(404).json({ success: false, message: "Playlist not found." });
        }
    } catch (error) {
        console.error("Error fetching playlist:", error);
        res.status(500).json({ success: false, message: "Failed to fetch playlist." });
    }
});

//SONGS CRUD
app.post('/song', async function (req, res) {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ success: false, message: "Playlist ID is required." });
    }

    try {
        const database = client.db('PlaylistrDB'); // Use the already connected client
        const col = database.collection("songs");

        // Fetch playlist by its ID
        const song = await col.findOne({ '_id': new ObjectId(id) });
        if (song) {
            res.json(song);
        } else {
            res.status(404).json({ success: false, message: "Songs not found." });
        }
    } catch (error) {
        console.error("Error fetching playlist:", error);
        res.status(500).json({ success: false, message: "Failed to fetch songs." });
    }
});

app.post('/songs', async function (req, res) {
    const { id } = req.body;
    // if (!id) {
    //     return res.status(400).json({ success: false, message: "Playlist ID is required." });
    // }

    try {
        const database = client.db('PlaylistrDB'); // Use the already connected client
        const col = database.collection("songs");

        // Fetch songs by its ID
        const songs = await col.find().toArray();
        if (songs) {
            res.json(songs);
        } else {
            res.status(404).json({ success: false, message: "Songs not found." });
        }
    } catch (error) {
        console.error("Error fetching playlist:", error);
        res.status(500).json({ success: false, message: "Failed to fetch songs." });
    }
});

// Add a song to a playlist
app.post('/addSongToPlaylist', async function (req, res) {
    const { playlist_id, song_id } = req.body;
    if (!playlist_id || !song_id) {
        return res.status(400).json({ success: false, message: "Playlist ID and Song ID are required." });
    }

    try {
        const database = client.db('PlaylistrDB'); // Use the already connected client
        const col = database.collection("playlists");

        const checkIfPresent = await col.findOne({ '_id': new ObjectId(playlist_id) , 'songs._id': new ObjectId(song_id) });

        if (checkIfPresent) {
            return res.status(400).json({ success: false, message: "Song already present in playlist." });
        }

        // Add song to playlist
        const result = await col.updateOne(
            { '_id': new ObjectId(playlist_id) },
            { $push: { songs: { $each: [{_id: new ObjectId(song_id), timestamp_added: new Date()}], $sort: {timestamp_added: -1}}} }
        );

        if (result.modifiedCount > 0) {
            res.json({ success: true, message: "Song added to playlist." });
        } else {
            res.status(404).json({ success: false, message: "Playlist not found." });
        }
    } catch (error) {
        console.error("Error adding song to playlist:", error);
        res.status(500).json({ success: false, message: "Failed to add song to playlist." });
    }
});

app.put('/updatePlaylist', async function (req, res) {
    const { playlist_id, songs } = req.body;
    if (!playlist_id || !songs) {
        return res.status(400).json({ success: false, message: "Playlist ID and Songs are required." });
    }

    try {
        const database = client.db('PlaylistrDB'); // Use the already connected client
        const col = database.collection("playlists");

        // Update playlist with new songs
        const result = await col.updateOne(
            { '_id': new ObjectId(playlist_id) },
            { $set: { songs: songs } }
        );

        if (result.modifiedCount > 0) {
            res.json({ success: true, message: "Playlist updated." });
        } else {
            res.status(404).json({ success: false, message: "Playlist not found." });
        }
    } catch (error) {
        console.error("Error updating playlist:", error);
        res.status(500).json({ success: false, message: "Failed to update playlist." });
    }
});


// Fallback route for serving the frontend app
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../frontend', 'public', 'index.html'));
});

// Connect to MongoDB and start the server
connectDB().then(() => {
    const PORT = 3005;
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("Failed to connect to MongoDB, server will not start", err);
});

