import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

//Importando a API
import api from './../../Api'

const statuses = {
    'watched': 'Finalizado',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class NewSeries extends Component{
    constructor(props){
        super(props)

        this.state = {
            genres:[],
            isLoading: false,
            redirect: false
        }

        this.saveSeries = this.saveSeries.bind(this)
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

    saveSeries(){
        
        const newSeries = {
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comment: this.refs.comment.value
        }

        api.saveSeries(newSeries)
            .then((res) =>{
                this.setState({
                    redirect: '/series/' + this.refs.genre.value
                })
            })
    }

    render(){
        return (
                <section className="page">
                    { this.state.redirect && <Redirect to={this.state.redirect}/>  }   
                    <div className="center">
                        <div className="page__content">
                            <h1 className="title">Nova Série</h1>
                            <form className="form">
                                <div className="form__group">
                                    <label className="form__label">Nome:</label>
                                    <input className="form__input" type="text" ref='name'/>
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Genero:</label>
                                    <select className="form__select" ref='genre' >
                                        {
                                            this.state.genres.map(item => <option key={item} value={item}>{item}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Status:</label>
                                    {Object
                                        .keys(statuses).map(item => 
                                        <div className="form__option" key={item}>
                                            <input type="radio" className="form__radio" key={item} id={item} value={item} name="status" ref='status'/>
                                            <label htmlFor={item}>{statuses[item]}</label>
                                        </div>
                                    )}
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Comentários:</label>
                                    <textarea className="form__textarea" ref='comment'></textarea>
                                </div>
                                <div className="form__group">
                                    <button className="form__submit" type="button" onClick={this.saveSeries}>Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            )
    }
}

export default NewSeries