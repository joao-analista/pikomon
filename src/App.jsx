import axios from "axios";
import './App.css';
import { useEffect, useState } from "react"; // Importando useState

function App() {
  const [pokemon, setPokemon] = useState(null); // Inicializa como null

  const getPokemon = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) // Usando crase para interpolação
      .then(response => {
        const pokemonData = response.data; // Assume que você quer o objeto completo
        setPokemon(pokemonData); // Atualiza o estado com os dados do Pokémon
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  };

  useEffect(() => {
    getPokemon(969); // Chama a função para obter o Pokémon com ID 23
  }, []);

  console.log('deu bom', pokemon);

  return (
    <>
      <div>
        <h1>Bem-vindo ao Pikomon</h1>
        <ul>
          Object.values(pokemon).map(item =>
          <li>
            
          </li>
        </ul>
        {pokemon ? (
          <>
            <p>Nome: {pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} /> {/* Exibe a imagem do Pokémon */}
            <p>Altura: {pokemon.height} decímetros</p>
            <p>Peso: {pokemon.weight} hectogramas</p>
          </>
        ) : (
          <p>Carregando...</p> // Exibe uma mensagem enquanto os dados estão sendo carregados
        )}
      </div>
    </>
  );
}

export default App;
