const main = () => {

    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', async () => {
    displayLoading();
    const inputKeyword = document.querySelector('.input-keyword');
    const film = await getDataFilm(inputKeyword.value);
    updateTampilan(film);
    hideLoading();
});

document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('info-button')) {
        const imdbid = e.target.dataset.imdbid;
        const infoMovie = await getInfoMovie(imdbid);
        updateTampilanDetail(infoMovie);
    }
});

/*display loading */
// selecting loading div
const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}

/*fungsi get film */
const getDataFilm = keyword => {
    return fetch('http://www.omdbapi.com/?apikey=19177861&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search)
}
/*fungsi get film */

/*fungsi update tampilan awal */
const updateTampilan = film => {
    let cards = '';
    film.forEach(f => cards += showCardMovie(f));
    
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}
/*fungsi update tampilan akhir */

/*fungsi card film awal */
const showCardMovie = f => {
    return `<div class="col-md-3 my-3">
            <div class="card"">
                <img src="${f.Poster}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${f.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${f.Year}</h6>
                <a href="#" class="btn btn-secondary info-button" data-bs-toggle="modal" data-bs-target="#detailMovie" data-imdbid="${f.imdbID}">About Movie</a>
                </div>
            </div>
        </div>
        </div>`
}
/*fungsi card film akhir */

/*fungsi modal film awal */
const showInfoMovie = f => {
    return `<div class="container-fluid">
            <div class="row">
            <div class="col-md-3">
                <img src="${f.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group">
                <li class="list-group-item"><h4>${f.Title}</h4></li>
                <li class="list-group-item"><strong>Released: ${f.Released}</strong></li>
                <li class="list-group-item"><strong>Genre: ${f.Genre}</strong></li>
                <li class="list-group-item"><strong>Runtime: ${f.Runtime}</strong></li>
                <li class="list-group-item"><strong>Director: ${f.Director}</strong></li>
                <li class="list-group-item"><strong>Stars: ${f.Actors}</strong></li>
                <li class="list-group-item"><strong>Writers: ${f.Writer}</strong></li>
                
                <li class="list-group-item"><strong>Synopsis:</strong> <br>${f.Plot}</li>
                </ul>
            </div>
            </div>
        </div>`
}
/*fungsi modal film akhir */
}
export default main;