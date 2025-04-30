import { apiRickAndMorty } from "../../lib/axios";
import { CharactersResponse } from "./dtos/characterDTO";

export const getCharacters = async () => {
  try {
    const response = await apiRickAndMorty.get<CharactersResponse>('/character');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    throw error;
  }
};

export const getCharacterById = async (id: number) => {
  try {
    const response = await apiRickAndMorty.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar personagem com id ${id}:`, error);
    throw error;
  }
};