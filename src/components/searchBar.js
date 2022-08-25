import React, {useState} from "react";
import axios from 'axios';
import './../style.css';

export default function SearchBar(props) {

    const [input, updateInput] = useState("");
    const {updateRepos} = props;


    const handleClick = async() => {

        try {
            const results = await axios(`https://api.github.com/users/${input}/repos`)
            updateRepos(results);
        }catch (error) {
            console.log(error);
            updateRepos([error.message]);
        }
        
    }

    return (
        <div>
            <input
                class = "searchbar"
                type="text"
                required
                placeholder="Enter a GitHub username"
                value={input} onChange={(e) => updateInput(e.target.value)}
                size="30"/>
            <button onClick={handleClick} class = "submit_button">Submit</button>
        </div>
    )
}
