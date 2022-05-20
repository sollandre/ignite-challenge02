import { memo, useMemo } from 'react';
import { Button } from './Button';
interface SideBarProps {
  selectedGenreId: number;
  genres: Array<any>;
  handleGenreIdChange: (id: number) => void;
}

export function SideBar({selectedGenreId, handleGenreIdChange: handleClickButton, genres }: SideBarProps) {
  // Complete aqui


  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={genre.id === selectedGenreId}
          />
        ))}
      </div>

    </nav>
  );
}

// export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
//   return prevProps.genres === nextProps.genres && prevProps.handleGenreIdChange === nextProps.handleGenreIdChange
// })