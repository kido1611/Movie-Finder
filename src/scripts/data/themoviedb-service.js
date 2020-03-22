import axios from 'axios';

const API_KEY = "ADD YOUR KEY IN HERE";
const BASE_URL = "https://api.themoviedb.org/3/";

class TheMovieDBService{
    static populerMovie(){
        return axios.get(`${BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            .then(response => {
                return Promise.resolve(response.data.results);
            })
            .catch(function (error) {
                if (error.response) {
                    return Promise.reject(error.status);
                } else if (error.request) {
                    return Promise.reject("Request error");
                } else {
                    return Promise.reject(error.message);
                }
            });
    }

    static searchMovie(keyword){
        return axios.get(`${BASE_URL}search/movie?query=${keyword}&api_key=${API_KEY}`)
            .then(response => {
                return Promise.resolve(response.data.results);
            })
            .catch(function (error) {
                if (error.response) {
                    return Promise.reject(error.status);
                } else if (error.request) {
                    return Promise.reject("Request error");
                } else {
                    return Promise.reject(error.message);
                }
            });
    }
}

export default TheMovieDBService;