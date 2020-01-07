import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

//Importando a API
import api from './../../Api'

const statuses = {
    'watched': 'Finalizado',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class EditSeries extends Component{
    constructor(props){
        super(props)

        this.state = {
            genres:[],
            isLoading: false,
            redirect: false,
            series:{}
        }

        this.saveSeries = this.saveSeries.bind(this)
    }

    componentDidMount(){
        this.setState({isLoading: true})
        api.loadCardsById(this.props.match.params.id)
            .then((res) => {
                this.setState({series: res.data})
                this.refs.name.value = this.state.series.name
                this.refs.status.value = this.state.series.status
                this.refs.genre.value = this.state.series.genre
                this.refs.comment.value = this.state.series.comments
            })
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
            id: this.props.match.params.id,
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comment: this.refs.comment.value
        }

        api.updateSeries(newSeries)
            .then((res) =>{
                this.setState({
                    redirect: '/series/' + this.refs.genre.value
                })
            })
    }

    render(){
        return (
                <div className="page__content">
                { this.state.redirect && <Redirect to={this.state.redirect}/>  }  
                    <form className="form">
                        <h1 className="title">Editar Série</h1>
                        <p className="description">Você está editando: {this.state.series.name}</p>
                        <div className="form__group">
                            <input className="form__input" type="text" ref='name' placeholder="Informe o nome da Série"/>
                            <label className="form__label--placeholder">Informe o nome da Série</label>
                        </div>
                        <div className="form__row">
                            <div className="form__group">
                                <label className="form__label">Gênero:</label>
                                <select className="form__select" ref='genre' >
                                    {
                                        this.state.genres.map(item => <option key={item} value={item}>{item}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form__group">
                                <label className="form__label">Status:</label>
                                <select className="form__select" ref="status">
                                    {Object
                                        .keys(statuses).map(item => <option key={item} value={item}>{statuses[item]}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="form__group">
                            <label className="form__label">Comentários:</label>
                            <textarea className="form__textarea" ref='comment'></textarea>
                        </div>
                        <div className="form__bottom">
                            <button className="form__submit" type="button" onClick={this.saveSeries}>Salvar</button>
                        </div>
                    </form>
                </div>
            )
    }
}

export default EditSeries