import { useEffect } from 'react';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { FetchTrendMovies } from '../services/apimovie'

export default function Home() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        FetchTrendMovies().then(res => { setMovies(res) })
    }, []);
    
    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {movies.map(item => (<li key={item.id}>
                    <Link to={`movies/${item.id}`}>{item.title}</Link>
                    </li>))}
            </ul>
        </>
    )
}
