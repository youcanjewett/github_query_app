import React from "react";
import './../style.css';

export default function SearchResults (props) {
    const {repo} = props;

    let printedLine = repo.name ? 
         `${repo.stargazers_count} star(s): ${repo.name}`:
        "No repos yet"


    return (
        <div class="repo_items"> 
            {printedLine}
        </div>
    )
}

