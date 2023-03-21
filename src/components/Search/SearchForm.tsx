import React, { useId, useState } from "react";
import style from "./SearchForm.module.css";

interface getMoviespropos {
  getMovies: () => void;
}

function SearchForm({ getMovies }: getMoviespropos) {
  const [searchMovie, setSearchMovie] = useState("");
  const movieInputId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(e.target.value);

    getMovies(searchMovie);
    console.log(
      "getmoviesearchsetTimeOut",
      setTimeout(() => {
        getMovies(searchMovie);
      }, 3000)
    );
    console.log("getmovieseearch", getMovies(searchMovie));
  };
  return (
    <div className={style.search}>
      <label htmlFor={movieInputId}>Trouve ton film</label>
      <input
        id={movieInputId}
        value={searchMovie}
        name="search"
        className={style.input}
        type="text"
        placeholder="tape ton titre  "
        onChange={handleChange}
      />
      <input className={style.btn} type="submit" value="Envoyer" />
    </div>
  );
}

export default SearchForm;
