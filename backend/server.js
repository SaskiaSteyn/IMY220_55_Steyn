import express from "express"
import path from 'path'


//CREATE APP
const app = express();
const {MongoClient, ObjectId} = require("mongodb");
const url = "mongodb+srv://u17267162:5xcc2P5U5988t0Wxr@clusterexample.mnsh8.mongodb.net/?retryWrites=true&w=majority&appName=ClusterExample";

//SERVE A STATIC PAGE IN THE PUBLIC DIRECTORY
app.use(express.static("frontend/public"));

app.use(express.json());

//LOGIN, SIGN UP, LOGOUT

app.post('/login', async function (req, res) {
  //code for login 
  let results = await login(req.body);
  res.json(results);
})

async function login(user) {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const database = client.db('PlaylistrDB');
    const col = database.collection("users");

    const hashedPassword = user.password;
    
    const user = await col.findOne({ 'username': user.username, 'password': hashedPassword });
  // console.log('Students taking Math:', mathStudents);
  } finally {
    await client.close();
  }
}

//USERS CRUD

//SEARCH

//PLAYLISTS CRUD

//getting a single playlist
app.post('/playlist', async function (req, res) {
  let results = await getPlaylistData(req.body);
  res.json(results);
})

async function getPlaylistData(requestBody){
  const client = new MongoClient(url);
  try {
    await client.connect();
    const database = client.db('PlaylistrDB');
    const col = database.collection("playlists");

    const playlist = await col.findOne({ '_id': new ObjectId(requestBody.id) });
    return playlist;

  } finally {
    await client.close();
  }
}

//getting multiple playlists
app.post('/playlists', async function (req, res) {
  let results = await getAllPlaylists();
  res.json(results);
})

async function getAllPlaylists(){
  // let playlists = [];
  const client = new MongoClient(url);
  try {
    await client.connect();
    const database = client.db('PlaylistrDB');
    const col = database.collection("playlists");
    const playlists = await col.find({}).toArray();
    return playlists;

  } finally {
    await client.close();
    // console.log(playlists);
    // return playlists;
  }
  
}



//SONGS CRUD



app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../frontend', 'public', 'index.html'));
});


//PORT TO LISTEN TO
app.listen(3001, () => {
console.log("Listening on localhost:3001");
});