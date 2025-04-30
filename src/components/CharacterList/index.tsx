import { useCharacters } from "../../api/rick-and-morty/queries/useCharacters";

const CharacterList = () => {
  const { characters, isLoading, error } = useCharacters();

  if (isLoading) return <div>Carregando personagens...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="bg-gray-900 text-white px-4">
      <h1 className="flex justify-center pt-4 text-2xl">Personagens de Rick and Morty</h1>
      <ul className="flex flex-wrap gap-4 justify-center py-8">
        {characters?.map((character) => (
          <li key={character.id} className="mb-4">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.species}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
