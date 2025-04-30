export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number | null;
  };
  results: Characters[];
}

type Characters = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};
