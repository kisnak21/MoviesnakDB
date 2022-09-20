class HeaderApp extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `<div class="container">
                            <div class="row mt-5">
                                <div class="col">
                                    <h1>Moviesnak DB</h1>
                                </div>
                            </div>

                            <div class="row">
                            <div class="col-md-8">
                                <div class="input-group mb-3">
                                <input type="text" class="form-control input-keyword" placeholder="Find Your Favourite Movie">
                                <button class="btn btn-primary search-button" type="button" id="button-addon2">Search</button>
                                </div>
                            </div>
                            </div>

                            <div class="row movie-container"></div>
                                
                        </div>`;
    }
}

customElements.define('header-app', HeaderApp);