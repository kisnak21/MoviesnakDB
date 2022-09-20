const main = () => {

    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const film = await getDataFilm(inputKeyword.value);
    updateTampilan(film);
});

//event binding
document.addEventListener('click', async function(e){
    if (e.target.classList.contains('info-button')) {
        const imdbid = e.target.dataset.imdbid;
        const infoMovie = await getInfoMovie(imdbid);
        updateTampilanDetail(infoMovie);
    }
});

/*fungsi info movie */
function getInfoMovie(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=19177861&=&i=' + imdbid)
    .then(response => response.json())
    .then(f => f);
    
}
/*fungsi info movie */

function updateTampilanDetail(f) {
    const infoMovie = showInfoMovie(f);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = infoMovie;
}

/*fungsi get film */
function getDataFilm(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=19177861&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search);
}
/*fungsi get film */

/*fungsi update tampilan awal */
function updateTampilan(film) {
    let cards = '';
    film.forEach(f => cards += showCardMovie(f));
    
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}
/*fungsi update tampilan akhir */

/*fungsi card film awal */
function showCardMovie(f) {
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
function showInfoMovie(f) {
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