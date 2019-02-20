import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class App extends Component {

  state = {
      name: '',
      email: '',
      message: ''
    }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value

      })
    }

   handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Navigation/>
            <div className="App">
              <Route path='/' component={Projects} exact />
              <Route path='/about' component={About}/>
              <Route path='/contact' render={(props) => <Contact {...props} handleChange={this.handleChange} handleSubmit= {this.handleSubmit} />}/>
            <Footer/>     
          </div>
        </div>
        


      </BrowserRouter>
      
    );
  }
}

export default App;
