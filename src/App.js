import React, {useState} from "react";
import SearchBar from './components/searchBar';
import SearchResults from './components/searchResults';
import './style.css';

function App() {
  const [repos, updateRepos] = useState([]);

  // sorts the repos by star rating, or returns message if there are no repos
  let sortedRepos = repos.length !== 0 ? 
    repos.data.sort((a,b) => (b.stargazers_count > a.stargazers_count) ? 1 : -1) : 
    ['no repos here'];

  return (
    <div class="app_container">
      <h1 class = "app_title">GitHub Repo Search</h1>
      <div>
       <SearchBar updateRepos = {updateRepos}></SearchBar>
      </div>
      {sortedRepos.map((repo) => {
        return <SearchResults repo={repo} />
      })}
    </div>
  );
}

export default App;
