import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SingleArticle from './Pages/SingleArticle';


function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About}/>
        <Route exact path="/Services" component={Services}/>
        <Route exact path="/Blogs" component={Blogs}/>
        <Route exact path="/Blogs/:slug" component={SingleArticle}/>
        <Route exact path="/Contact" component={Contact}/>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
