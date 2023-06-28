import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Trailer } from '../entities/Trailer';
import { defaultTheme } from '@tanstack/react-query-devtools/build/lib/theme';

const useTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
