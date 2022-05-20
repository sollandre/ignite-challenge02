import { ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenreId: number;
  selectedGenreName: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content({ selectedGenreId, selectedGenreName }: ContentProps) {
  // Complete aqui

  const [formattedMovies, setFormattedMovies] = useState<ReactNode[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      const movies = response.data
      const parsedMovies = movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))
      setFormattedMovies(parsedMovies);
    });
  }, [selectedGenreId]);

  useEffect(() => {
    setIsLoading(!isLoading)
  }, [selectedGenreId, formattedMovies] )

  return (
    <>
      <header>
        <span className="category">Categoria:<span> {selectedGenreName}</span></span>
      </header> 
      <main>
        {
          !isLoading ?
          <div className="movies-list">
            {formattedMovies}
          </div>
          :
          <h1>Loading...</h1>
        }
      </main>
    </>
  );
}