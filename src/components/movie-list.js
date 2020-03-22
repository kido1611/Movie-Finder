import './movie-item.js';

class MovieList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    movies(title, movs){
        this._movies = movs;
        this.render(title);
    }

    render(title){
        this.shadowDOM.innerHTML = `
            <style>
                :host{
                    width: 100%;
                    margin: 1.0rem auto .5rem auto;
                    display: block;
                    box-sizing: border-box;
                }

                #list-title{
                    width: 100%; 
                    margin-bottom: .5rem; 
                    border-width: 0 0 2px 0; 
                    border-style: solid; 
                    border-color: #38a169;
                }
                #list-title h1{
                    margin: 0;
                }

                @media screen and (min-width: 640px){
                    :host{
                        max-width: 640px;
                    }   
                }
                @media screen and (min-width: 768px){
                    :host{
                        max-width: 768px;
                        display: flex;
                        flex-wrap: wrap;
                    }
                }
                @media screen and (min-width: 1024px){
                    :host{
                        max-width: 1024px;
                    }
                }
                @media screen and (min-width: 1280px){
                    :host{
                        max-width: 1280px;
                    }
                }
            </style>
            <div id="list-title">
                <h1>${title}</h1>
            </div>`;
        this._movies.forEach(movie => {
            const movieItem = document.createElement("movie-item");
            movieItem.movie(movie);
            this.shadowDOM.appendChild(movieItem);
        });
    }

    renderError(message){
        this.shadowDOM.innerHTML = `
        <style>
            #info-error{
                padding: 1.5rem;
                font-size: 1.25rem;
            }
        </style>
        <div id="info-error" class="text-xl text-grey-600 p-6">
            ${message}
        </div>`;
    }
}

customElements.define("movie-list", MovieList);