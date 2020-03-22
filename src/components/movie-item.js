class MovieItem extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    movie(mov){
        this._movie = mov;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            :host{
                display: block;
                padding: .5rem;
                box-sizing: border-box;
                width: 100%;
            }
            #movie-container{
                box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
                display: flex;
                flex-direction: column;
            }
            #movie-description{
                padding: .75rem .75rem 0 .75rem;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
            }
            #movie-more-info{
                margin: .75rem;
                padding-top: .25rem;
                border-width: 2px 0 0 0;
                border-style: solid;
                border-color: #38a169;
                text-align: right;
                font-weight: 700;
            }
            #movie-content{
                display: flex;
                flex-direction: row;
                background-color: #edf2f7;
            }
            #movie-content img{
                height: 224px;
            }
            #movie-info{
                width: 100%;
                padding: .25rem .75rem .75rem 1rem;
                display: block;
            }
            #movie-info-title{
                font-size: 1.25rem;
                color: #805ad5;
                font-weight: 700;
                display: block;
            }
            .movie-info-value{
                color: #4a5568;
                margin-top: .25rem;
            }
            a{
                text-decoration: inherit;
                color: inherit;
            }
            a:hover{
                color: #805ad5;
            }
            @media screen and (min-width: 768px){
                :host{
                    width: 50%;
                }
            }
            @media screen and (min-width: 1280px){
                :host{
                    width: 33.333333%;
                }
            }
        </style>
        <div id="movie-container">
            <div id="movie-content" class="flex flex-row bg-gray-200">
                <img alt="poster" src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}">
                <div id="movie-info">
                    <div id="movie-info-title">${this._movie.title}</div>
                    <div class="movie-info-value">Release at ${this._movie.release_date}</div>
                    <div class="movie-info-value">Score at ${this._movie.vote_average}</div>
                </div>
            </div>
            <div id="movie-description">
                ${this._movie.overview}
            </div>
            <div id="movie-more-info">
                <a href="https://www.themoviedb.org/movie/${this._movie.id}" target="_blank">More info &gt;</a>
            </div>
        </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);