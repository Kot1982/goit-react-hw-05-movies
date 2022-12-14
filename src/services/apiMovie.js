import axios from 'axios';

export async function fetchTrendMovies () {
 const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=125725f49ad2ae69609a1a5a9c4211d9')  
   
    return response.data;
}

export async function fetchSearchMovies(query) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US&page=1&include_adult=false`)

    return response.data;
}

export async function fetchMovieDetails(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US`)

    return response.data;
}

export async function fetchMovieCredits(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US`)

    return response.data;
}

export async function fetchMoviesReviews(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=125725f49ad2ae69609a1a5a9c4211d9&language=en-US&page=1`)

    return response.data;
}