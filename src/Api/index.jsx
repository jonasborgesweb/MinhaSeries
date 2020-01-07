import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const loadCards = (genre) => api.get('series?genre='+ genre)



const apis = {
    loadGenres: loadGenres,
    saveSeries: saveSeries,
    loadCards: loadCards
}

export default apis