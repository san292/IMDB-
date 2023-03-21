import React from "react";
import style from "./DisplayResults.module.css";

import CardResult from "./CardResult";
import { useLocation } from "react-router";
import { ResultTrendprops } from "../../interface/api";

function DisplayResults({results}:ResultTrendprops) {
   
    console.log('result movies', results);
    
 
  const location = useLocation();
  const trending = location.state;
  const showMovies= results ? results : trending
  

  return (
    <div className={style.container}>
      { showMovies?.map((trend: any) => (
        <CardResult
          results={{
            id:trend.id,
            title: trend.title,
            vote: trend.vote_average,
            poster: trend.poster_path,
            date: trend.first_air_date,
          }}
          key={trend.id}
        />
      ))}
    </div>
  );
}

export default DisplayResults;
