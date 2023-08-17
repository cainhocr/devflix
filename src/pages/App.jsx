import { useEffect } from "react";
import logo from "../assets/devflix.png";
import searchicon from "../assets/search.svg";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const apikey = "e4d577fa";
  const apiurl = `https://omdbapi.com/?apikey=${apikey}&s=superman`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiurl}&s=${title}`);
    const data = response.json();

    console.log(data);
  };

  const handlekeypress = (e) => {
    e === "Enter" && searchMovies(searchTerm)
    searchMovies(searchTerm)
  }

  return (
    <>
      <div id="app">
        <div className="logo">
          <img src={logo} alt="logo devflix" />
        </div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handlekeypress}
            type="text"
            placeholder="Pesquise por filmes"
          />
          <img
            src={searchicon}
            alt="Icone de pesquisa"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
    </>
  );
};
export default App;
