import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './series.css'

//Importando API
import api from '../../Api'

const statuses = {
    'watched': 'Finalizado',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class Series extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoading: false,
            series:[]
        }

        this.renderCard = this.renderCard.bind(this)
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount(){
        this.loadData()
    }

    loadData(){
        this.setState({ isLoading: true })
        api.loadCards(this.props.match.params.genre).then((res)=>{
            this.setState({
                isLoading: false,
                series: res.data
            })
        })
    }

    deleteSeries(id){
        api.deleteSeries(id)
            .then((res) => this.loadData())
    }

    renderCard(series){
        return(
            <div key={series.id} className="card">
                <div className="card__group">
                    <h2 className="card__title">{series.name}</h2>
                </div>
                <div className="card__row">
                    <p className="card__text">{series.genre}</p>
                    <p className="card__text">{statuses[series.status]}</p>
                </div>
                <div className="card__bottom">
                    <Link className="card__btn--edit" to={'/series-edit/' + series.id}>Editar</Link>
                    <button href="" className="card__btn--delete" onClick={()=>this.deleteSeries(series.id)}>Excluir</button>
                </div>
                
            </div>
        )
    }

    render(){
        return (
            <div className="page__content">
                <div className="page__box">
                    <h1 className="title--list">Séries de {this.props.match.params.genre}</h1>
                    {this.state.isLoading && <p>Carregando, aguarde . . .</p>}
                    {!this.state.isLoading && this.state.series.length === 0 &&
                        <div className="page__error">
                            <p className="page__alert">Infelizmente não encontramos nenhuma série de {this.props.match.params.genre}</p>
                            <p className="page__description">Clique para cadastrar uma nova série</p>
                            <Link to="/newSeries" className="page__btn">Cadastrar</Link>
                        </div>
                    }
                    <div className="page__wrapper">
                        {!this.state.isLoading && this.state.series.map(this.renderCard)}
                    </div>
                </div>
            </div>
            )
    }
}

export default Series