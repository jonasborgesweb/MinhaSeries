import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

//Importando a API
import api from './../../Api'

class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            genres:[],
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({isLoading: true})
        api.loadGenres()
            .then((response)=>
                this.setState({
                    isLoading: false,
                    genres: response.data
                })
            )
    }
    
    renderGenreLink(genre){
        return (
          <Link key={genre} to={`/series/${genre}`} className="banner__link">{genre}</Link>
        )
    }

    render(){
        return(
          <div className="home-content">
            {
              this.state.isLoading &&
              <p>Aguarde o carregamento . . . </p>
            }
            {
              !this.state.isLoading && 
              <section className="banner">
                <div className="banner__content">
                  <h1 className="banner__title">Bem vindo ao Minha Séries</h1>
                  <p className="banner__description">Organize suas séries de forma simples e fácil</p>

                  <div className="banner__bottom">
                    <h3 className="banner__title--two">Escolha um genero:</h3>
                    <div className="banner__buttons">
                      {this.state.genres.map(this.renderGenreLink)}
                    </div>
                  </div>
                </div>
              </section>
            }
          </div>
        )
    }
}

export default Home