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
                <div className="searchBar_item">
                    <p className="search_btn" type="submit"><FaSearch /></p>
                </div>
                <div className="searchBar_item">
                    <p>Search</p>
                </div> 
            </div>
        );
    }

}

export default Search