import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GaneGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GaneGrid;
