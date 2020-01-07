import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          <Link to={`/series/${genre}`}>{genre}</Link>
        )
    }

    render(){
        return(
            <div className="content">
            {
              this.state.isLoading &&
              <p>Aguarde o carregamento . . . </p>
            }
            {
              !this.state.isLoading && 
              <div>
                  Conteudo Home
                Ver séries do Genero: {this.state.genres.map(this.renderGenreLink)}
              </div>
            }
          </div>
        )
    }
}

export default Home