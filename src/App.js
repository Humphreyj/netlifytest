import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
import Sidedrawer from'./components/Sidedrawer/Sidedrawer'
import Backdrop from './components/Backdrop'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class App extends Component {

  state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      drawerOpen: false
    }

    drawerToggleHandler =() => {

    this.setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen}
    })
  }
    //open sidedrawer

    backdropClickHandler = () => {
      this.setState({drawerOpen:false})
    }
    //close sidedrawer

    //handles changes in the contact form
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value

      })
    }
    //submits the contact form to Netlify
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
    let backdrop;
    
    if(this.state.drawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <BrowserRouter>
        <div className="wrapper">
          <Navigation drawerToggleHandler={this.drawerToggleHandler}/>
          <Sidedrawer show={this.state.drawerOpen} />
          {backdrop}
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
