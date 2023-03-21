import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import { About, Home } from "./pages";
import SearchForm from "./components/Search/SearchForm";
import Footer from "./ui/Footer/Footer";

function App() {

 
  
  return (
    <div className="App">
     
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
      </Routes>
   <Footer/>
      
    </div>
  );
}

export default App;
