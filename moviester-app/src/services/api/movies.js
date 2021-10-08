import axios from "axios";

export default {
    getMovie(id) {
        return axios.get(`movie/${id}?api_key=16607c0b583f536ffc3282bc6adfc080`)
            .then(response => {
                return response.data
            })
    },
    getActor(id) {
        return axios.get(`person/${id}?api_key=16607c0b583f536ffc3282bc6adfc080`)
            .then(response => {
                return response.data
            })
    },
    getMovieCredits(id) {
        return axios.get(`movie/${id}/credits?api_key=16607c0b583f536ffc3282bc6adfc080`)
            .then(response => {
                return response.data
            })
    }
}