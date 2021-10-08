import axios from "axios";

export default {
    getMovie() {
        return axios.get('movie/74?api_key=16607c0b583f536ffc3282bc6adfc080')
            .then(response => {
                return response.data
            })
    },
    getActor() {
        return axios.get('person/505?api_key=16607c0b583f536ffc3282bc6adfc080')
            .then(response => {
                return response.data
            })
    },
    getMovieCredits() {
        return axios.get('movie/74/credits?api_key=16607c0b583f536ffc3282bc6adfc080')
            .then(response => {
                return response.data
            })
    }
}