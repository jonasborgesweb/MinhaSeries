import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const updateSeries = (series) => api.put('series/' + series.id, series)
export const loadCards = (genre) => api.get('series?genre='+ genre)
export const deleteSeries = (id) => api.delete('series/' + id)
export const loadCardsById = (id) => api.get('series/' + id)



const apis = {
    loadGenres,
    saveSeries,
    updateSeries,
    loadCards,
    deleteSeries,
    loadCardsById
}

export default apis