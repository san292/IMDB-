import { SetStateAction, useState } from "react";
import SearchForm from "../../components/Search/SearchForm";
import ResultsTrending from "../../components/results/DisplayResults";
import style from "./Home.module.css";
import  fetchSearchMovies  from "../../api/fetchSearchMovies";

function Home() {
  const [movies, setMovies] = useState();

  const getMovies =  (inputValue: string) => {
    setTimeout(async() => {
      setMovies(await fetchSearchMovies(inputValue));
      
    }, 1000);
  };

  return (
    <div className={style.home}>
      <SearchForm getMovies={getMovies} />
      <ResultsTrending results={movies} />
    </div>
  );
}

export default Home;
