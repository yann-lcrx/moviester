import axios from "axios";

const apiKey = process.env.VUE_APP_TMDB_API_KEY;

export default {
    getMovie(id) {
        return axios.get(`movie/${id}?api_key=${apiKey}`)
            .then(response => {
                return response.data
            })
    },
    getActor(id) {
        return axios.get(`person/${id}?api_key=${apiKey}`)
            .then(response => {
                return response.data
            })
    },
    getMovieCredits(id) {
        return axios.get(`movie/${id}/credits?api_key=${apiKey}`)
            .then(response => {
                return response.data
            })
    }
}