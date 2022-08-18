import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './views/Home';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='movies' element={<div>Movies</div>} />
        <Route path='movies/:movieId' element={<div>MovieDetails</div>}>          
          <Route path='cast' element={<div>Cast</div>} />
          <Route path='reviews' element={<div>Reviews</div>} />
        </Route>
      </Routes>
    </>
  );
};
