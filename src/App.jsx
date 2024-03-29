import './App.css';
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  
  return (
    <BrowserRouter basename="/codo_movies/">
      <header>
        <Link to="/">
          <h1 className='title'>PELICULAS</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pelicula" element="Detalle de la película." />
      </Routes>
    </BrowserRouter>
  )
}


