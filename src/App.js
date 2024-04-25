
import './App.css';
import Cards from './Components/Cards';
import movies from './Movies.json';

function App() {
  return (
    <>
    {
      movies.map((movies, index)=>{
        return(
          <Cards title={movies.title} 
          year={movies.year} 
          director={movies.director} 
          duration = {movies.duration}
          genre = {movies.genre} 
          synopsis = {movies.synopsis}
          wallpaper = {movies.wallpaper_image}
          thumbnail = {movies.thumbnail_image}


          />
        )
      })
    }
    </>
  );
}

export default App;