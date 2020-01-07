import React, { Component } from 'react'
import { BrowserRouter as  Router, Route } from 'react-router-dom'
import './App.css';

//Importando os Components
import Menu from './Components/Menu'
import Home from './Components/Home'
import About from './Components/About'
import NewSeries from './Components/NewSeries'
import EditSeries from './Components/EditSeries'
import Series from './Components/Series'

class App extends Component {

  render(){
    return (
      <Router>
          <Menu/>
          <div className="single-page">
            <Route exact path='/' component={Home}/>
              <div className="center">
                <Route path='/series-edit/:id' component={EditSeries}/>
                <Route path='/series/:genre' component={Series}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/newSeries' component={NewSeries}/>
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
