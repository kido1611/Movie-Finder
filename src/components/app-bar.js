class AppBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#input-search").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
        header{
            box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
            padding: .75rem;
            background-color: #48bb78;
            position: sticky; 
            top: 0;
        }
        .container{
            position: sticky; top: 0;
            margin-left: auto;
            margin-right: auto;
        }
        .container #title h1{
            font-size: 2.25rem;
            color: #fff;
            text-align: center;
            font-weight: 700;
            margin: 0;
        }
        .container #search-box{
            margin-top: .5rem;
        }
        .container #search-box #form-container{
            display: flex;
        }
        .container #search-box #form-container #input-search{
            width: 100%;
            color: #4a5568;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
            padding: .5rem .75rem .5rem .75rem;
            line-height: 1.25;
            border-width: 1px;
            border-top-left-radius: .25rem;
            border-bottom-left-radius: .25rem;
            font-family: inherit;
            font-size: 100%;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border-style: solid;
            border-color: #e2e8f0;
        }
        .container #search-box #form-container #search-submit{
            color: #fff;
            padding: .5rem .75rem .5rem .75rem;
            border-top-right-radius: .25rem;
            border-bottom-right-radius: .25rem;
            background-color: #4299e1;
            -webkit-appearance: button;
            line-height: inherit;
            font-family: inherit;
            border-width: 0;
            font-size: 100%;
        }
        .container #search-box #form-container #search-submit:hover{
            background-color: #4299E1;
        }
        .container #search-box #form-container #search-submit:focus{
            outline: 0;
        }
        @media screen and (min-width: 640px){
            .container{
                max-width: 640px;
            }
        }
        @media screen and (min-width: 768px){
            .container{
                max-width: 768px;
            }
        }
        @media screen and (min-width: 1024px){
            .container{
                max-width: 1024px;
                display: flex;
            }
            .container #title{
                width: 100%;
            }
            .container #title h1{
                text-align: left;
            }
            .container #search-box{
                width: 40%;
            }
        }
        @media screen and (min-width: 1280px){
            .container{
                max-width: 1280px;
            }
        }
        </style>
        <header>
            <div class="container">
                <div id="title">
                    <h1>Movie Finder</h1>
                </div>
                <div id="search-box">
                    <form method="get" id="form-search">
                        <div id="form-container">
                            <input type="text" id="input-search" placeholder="Find movie...">
                            <input type="submit" id="search-submit" value="Find ...">
                        </div>
                    </form>
                </div>
            </div>
        </header>`;

        this.shadowDOM.querySelector("#search-submit").addEventListener("click", this._clickEvent);
        this.shadowDOM.querySelector("#form-search").addEventListener("submit", this._clickEvent);
    }
}

customElements.define("app-bar", AppBar);