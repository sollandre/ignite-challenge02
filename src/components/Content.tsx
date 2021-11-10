import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: Array<any>
}

export function Content({ movies }: ContentProps) {
  // Complete aqui

  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  );
}