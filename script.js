$('.search-button').on('click', function(){

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=19177861&s=' + $('.input-keyword').val(),
        success: results => {
    
            const film = results.Search;
            let cards = '';
    
            film.forEach(f => {
                cards += showCardMovie(f);
            });
            $('.movie-container').html(cards);
    
            //tombol info di klik
            $('.info-button').on('click', function() {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=19177861&=&i=' + $(this).data('imdbid'),
                    success: f => {
                        const movieDetail = showInfoMovie(f);
            $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            });
    
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
});

function showCardMovie(f) {
    return `<div class="col-md-3 my-4">
            <div class="card"">
                <img src="${f.Poster}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${f.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${f.Year}</h6>
                <a href="#" class="btn btn-primary info-button" data-bs-toggle="modal" data-bs-target="#detailMovie" data-imdbid="${f.imdbID}">Tentang Film</a>
                </div>
            </div>
        </div>
        </div>`
}

function showInfoMovie(f) {
    return `<div class="container-fluid">
            <div class="row">
            <div class="col-md-3">
                <img src="${f.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group">
                <li class="list-group-item"><h4>${f.Title} (${f.Year})</h4></li>
                <li class="list-group-item"><strong>Director: ${f.Director}</strong></li>
                <li class="list-group-item"><strong>Actors: ${f.Actors}</strong></li>
                <li class="list-group-item"><strong>Writer: ${f.Writer}</strong></li>
                <li class="list-group-item"><strong>Synopsis:</strong> <br>${f.Plot}</li>
                </ul>
            </div>
            </div>
        </div>`
}
