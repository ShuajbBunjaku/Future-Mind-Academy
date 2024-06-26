const movieGernes = document.querySelector('.movieGernes');
const movielist = document.querySelector('.movielist');
const movieDetailsPage = document.querySelector('.movie-details-page')


loadMovies(0);
loadMovieDetail(0,1)



for(let i = 0; i < allMovies.length; i++){
    movieGernes.innerHTML += `
        <option value="${i}">${allMovies[i].gerne}</option>
    `
}


function loadMovies(g){
    let allMoviesHtml = ''
    let gerneMovies = allMovies[g].movies;

    for(let i = 0; i < gerneMovies.length; i++){
        allMoviesHtml += `
        <li  onclick="loadMovieDetail(${g} , ${i}, this) ">
                            <h4>${gerneMovies[i].title}</h4>
                            <img src="assets/img/${gerneMovies[i].thumb}" alt="${gerneMovies[i].title}">
                            <p class="description">${gerneMovies[i].desc}</p>
                            <div class="row movie-stats m0 p0">
                                <div class="col m0 p0">Date: <span>${gerneMovies[i].date}</span> </div>
                                <div class="col m0 p0">Length: <span>${gerneMovies[i].length}</span> </div>
                            </div>
        </li>
        `
    }
    movielist.innerHTML = allMoviesHtml;
}

function loadMovieDetail(g, m ,activeMovie) {
    let currentMovie = allMovies[g].movies[m];

    movieDetailsPage.innerHTML = `
            <h1>${currentMovie.title} (2023)</h1>
            <h4>Date: ${currentMovie.date} | Length: ${currentMovie.length}</h4>
            <div class="container">
                ${currentMovie.trailer}
            </div>

            <h4>${currentMovie.actors}</h4>
            <p>${currentMovie.desc}</p>
        `

        for(let i = 0; i < movielist.children.length; i++){
            movielist.children[i].classList.remove('selected-movie')
        }
        activeMovie.classList.add('selected-movie')
}



