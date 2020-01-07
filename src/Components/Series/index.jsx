import React, { Component } from 'react'
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
    }

    componentDidMount(){
        this.setState({ isLoading: true })
        api.loadCards(this.props.match.params.genre).then((res)=>{
            this.setState({
                isLoading: false,
                series: res.data
            })
        })
    }

    renderCard(series){
        return(<div className="card">
            <p>{series.name}</p>
            <p>{series.genre}</p>
            <p>{statuses[series.status]}</p>
        </div>
        )
    }

    render(){
        return (
            <section>
                <h1>Series {this.props.match.params.genre}</h1>
                <div className="list">
                    {!this.state.isLoading && this.state.series.map(this.renderCard)}
                </div>
            </section>
            )
    }
}

export default Series