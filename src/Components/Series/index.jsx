import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                <p>{series.name}</p>
                <p>{series.genre}</p>
                <p>{statuses[series.status]}</p>
                <Link to={'/series-edit/' + series.id}>Editar</Link>
                <a href="#" onClick={()=>this.deleteSeries(series.id)}>Excluir</a>
            </div>
        )
    }

    render(){
        return (
            <section>
                <h1>Series {this.props.match.params.genre}</h1>
                {this.state.isLoading && <p>Carregando, aguarde . . .</p>}
                {!this.state.isLoading && this.state.series.length === 0 &&
                    <div className="Alert">Nenhuma Série Cadastrada.</div>
                }
                <div className="list">
                    {!this.state.isLoading && this.state.series.map(this.renderCard)}
                </div>
            </section>
            )
    }
}

export default Series