
import React, { useState } from "react";
import { fetchAPI } from "../../../api/fetchAPI";
import { Link, useSearchParams } from "react-router-dom";
import "./GetTrending.module.css";
import { ResultTop, TopRatedAPI } from "../../../interface/api";
import style from './GetTrending.module.css'

function GetTrending() {
  const [topRated, setTopRated] = useState<ResultTop[]>([]);
  const [trending, setTrending] = useState<TopRatedAPI[]>([]);
  const [serchParams, setSearchParams] = useSearchParams();

  const handleGetTrending = async () => {
    // const searchTrending = serchParams.get("genre");
    // console.log("searchTrendingbuttonfetch", searchTrending);
    // setSearchParams({ value: "trending" });

    const { results } = await fetchAPI("trending");
    setTrending(results);
  };

  const handleGetTopRated = async () => {
    const { results } = await fetchAPI("topRated");
    
    
    setTopRated(results);
  };

  return (
    <div className={style.container}>
      <Link
        className={style.link}
        onClick={handleGetTrending}
        to="/"
        state={trending}
       
      
        >
        Trending
      </Link>

      <Link
        className={style.link}
        onClick={handleGetTopRated}
        to={"/"}
        state= {topRated}
        >
        Top Rated
      </Link>
      
    </div>
  );
}
export default GetTrending;
