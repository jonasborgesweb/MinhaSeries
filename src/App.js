import React, { Component } from 'react'
import { BrowserRouter as  Router, Route } from 'react-router-dom'
import './App.css';

//Importando a API
import api from './Api'

//Importando os Components
import Menu from './Components/Menu'
import Home from './Components/Home'
import About from './Components/About'
import NewSeries from './Components/NewSeries'
import Series from './Components/Series'

class App extends Component {

  render(){
    return (
      <Router>
        <section>
          <Menu/>
          <Route exact path='/' component={Home}/>
          <Route path='/series/:genre' component={Series}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/newSeries' component={NewSeries}/>
          
        </section>
      </Router>
    );
  }
}

export default App;
