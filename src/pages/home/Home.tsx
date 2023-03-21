import { SetStateAction, useState } from "react";
import SearchForm from "../../components/Search/SearchForm";
import ResultsTrending from "../../components/results/DisplayResults";
import style from "./Home.module.css";
import { fetchSerchMovies } from "../../api/fetchSerchMovis";
import { ResultTrend } from "../../interface/api";

function Home() {
  const [movies, setMovies] = useState();

  const getMovies = async (inputValue: string) => {
    setMovies(await fetchSerchMovies(inputValue));
  };

  return (
    <div className={style.home}>
      <SearchForm getMovies={getMovies} />
      <ResultsTrending results={movies} />
    </div>
  );
}

export default Home;
