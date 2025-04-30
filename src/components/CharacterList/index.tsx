import { useCharacters } from "../../api/rick-and-morty/queries/useCharacters";

const CharacterList = () => {
  const { characters, isLoading, error } = useCharacters();

  if (isLoading) return <div>Carregando personagens...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h1>Personagens de Rick and Morty</h1>
      <ul>
        {characters?.map((character) => (
          <li key={character.id}>
            <h3>{character.name}</h3>
            <p>{character.species}</p>
            <img src={character.image} alt={character.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
