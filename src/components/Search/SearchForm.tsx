import React, { useId, useState } from "react";
import style from "./SearchForm.module.css";
import { DebounceInput } from "react-debounce-input";

interface getMoviespropos {
  getMovies: (value:string) => void;
}

function SearchForm({ getMovies }: getMoviespropos) {
  const [searchMovie, setSearchMovie] = useState("");
  const movieInputId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(e.target.value);
    getMovies(searchMovie);
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
        placeholder="cherche par ici  ... "
        onChange={handleChange}
      />
      {/* <DebounceInput
        id={movieInputId}
        // value={searchMovie}
        className={style.input}
        placeholder="rechercher ici..."
        minLength={1}
        debounceTimeout={500}
        onChange={handleChange}
      /> */}

      <input className={style.btn} type="submit" value="Envoyer" />
    </div>
  );
}

export default SearchForm;
