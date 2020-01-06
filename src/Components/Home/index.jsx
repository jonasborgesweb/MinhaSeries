import React, { Component } from 'react'
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
    
    renderGenreLink(genres){
        return (
          <a href="">{genres}</a>
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