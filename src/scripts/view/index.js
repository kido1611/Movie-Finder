import "../data/themoviedb-service.js";
import "../../components/app-bar.js";
import "../../components/movie-list.js";
import TheMovieDBService from "../data/themoviedb-service.js";

const index = function(){
    const movieListElement = document.querySelector("movie-list");
    const appBarElement = document.querySelector("app-bar");

    const onSearch = async (event) => {
        event.preventDefault();
        if(appBarElement.value.length === 0){
            movieListElement.renderError(`Getting populer movies...`);
            try{
                const result = await TheMovieDBService.populerMovie();
                movieListElement.movies("Popular movies", result);
            }
            catch(message){
                movieListElement.renderError(`Error: ${message}`);
            }
            return;
        }

        movieListElement.renderError(`Searching movies...`);
        try{
            const result = await TheMovieDBService.searchMovie(appBarElement.value);
            renderResult(result);
        }
        catch(message){
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        movieListElement.movies(`Search keywords: ${appBarElement.value}`, results);
    };

    const fallbackResult = message => {
        movieListElement.renderError(`Error: ${message}`);
    };

    appBarElement.clickEvent = onSearch;

    movieListElement.renderError(`Getting populer movies...`);
    TheMovieDBService.populerMovie()
        .then(result => {
            movieListElement.movies("Popular movies", result);
        })
        .catch(message => {
            movieListElement.renderError(`Error: ${message}`);
        });
};

export default index;