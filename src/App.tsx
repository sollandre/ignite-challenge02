import { useCallback, useEffect, useMemo, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}



export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);


  useEffect(() => {
    console.log("Genres memo")
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

 const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      <SideBar selectedGenreId={selectedGenreId} handleGenreIdChange={handleClickButton} genres={genres}/>

      <div className="container">  

        <Content selectedGenreId={selectedGenreId} selectedGenreName={genres[selectedGenreId-1]?.title} />
      
      </div>
    </div>
  )
}