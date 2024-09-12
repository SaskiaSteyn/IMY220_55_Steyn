import React from 'react'
import { FaSearch } from "react-icons/fa"

class Search extends React.Component{
    
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }

    search(event){
        event.preventDefault();
    }
    
    render(){
        return(
            <div className="searchBar">
                <form onSubmit={this.search}>
                    <input type="text" placeholder="Search your playlists"/>
                    <button type="submit"><FaSearch /></button>
                    </form>
            </div>
        );
    }

}

export default Search