import React,{useState} from "react";
import Navbar from "../../ui/Navbar/Navbar";
import  GetTrending from "./getTrendingandTopRating/GetTrending";
import style from './Header.module.css'
import SearchForm from "../Search/SearchForm";

function Header() {
  return (
    <div className={style.header} >
      <Navbar />
      <GetTrending/>
   
    
    </div>
  );
}

export default Header;
