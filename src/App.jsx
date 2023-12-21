
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import About from "./Pages/AboutPage/About";
import ServicePage from "./Pages/ServicesPage/ServicePage";
import NewsPage from "./Pages/NewsPage/News";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<ServicePage/>}></Route>
        <Route path="/News" element={<NewsPage/>}></Route>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
