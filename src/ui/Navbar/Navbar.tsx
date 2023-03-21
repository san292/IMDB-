import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import tmdb from "../../assets/imdb.webp";

import { useThemeContext } from "../../context/contextMode";

import { Link} from "react-router-dom";

import style from   "./Navbar.module.css";

const Navbar = () => {
  const { toggleTheme, themeColor } = useThemeContext();
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link to="/">
            
         <img className={style.img} src={tmdb} alt='logo'/>
            
            </Link>
        </div>
        <div className={style.elements}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={() => toggleTheme()}>
          {themeColor === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
