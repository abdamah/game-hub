import { useEffect, useState } from 'react';
import apiClient from '../services/ap-client';

interface Game {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GaneGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GaneGrid;
