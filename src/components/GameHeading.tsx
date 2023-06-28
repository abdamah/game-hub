import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' fontSize='5xl' marginY={5}>
      {heading}
    </Heading>
  );
};
