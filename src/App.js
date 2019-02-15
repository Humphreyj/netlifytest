import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'

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

    handleSubmit = async (e) => {
      e.preventDefault()
      const { name, email, message} = this.state
      const form = await axios.post('/api/form',
      {
        name,
        email,
        message
      })

    }
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
