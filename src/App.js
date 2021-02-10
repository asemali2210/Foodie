import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Favorite from './components/Favorite'
import About from './components/About'
import Features from './components/Features'
import Partners from './components/Partners'
import Footer from './components/Footer'
import './scss/style.scss';

function App() {
  return (
    <div className="App">
              <Nav />
              <Header/>
              <Favorite />
              <About />
              <Features />
              <Partners />
              <Footer />
    </div>
  );
}

export default App;
