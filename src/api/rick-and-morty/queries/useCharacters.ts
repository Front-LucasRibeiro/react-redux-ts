import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../character";

export const useCharacters = () => {
  const query = useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
    staleTime: 1000 * 60 * 5,
  });

  return {
    characters: query.data?.results,
    ...query,
    error: query.error instanceof Error ? query.error.message : null,
  };
};
