const pokemonImagen = document.getElementById('pokemonImage');
const pokemonName = document.getElementById('nombrePokemon');
const pokemonId = document.getElementById('numeroPokemones');
const form = document.getElementById('form');
const input = document.getElementById('inputBuscar');
const soniditos = document.getElementById('soniditos');
const previo = document.getElementById('prev');
const next = document.getElementById('next');



const pokemonApi = new XMLHttpRequest();
const url = 'https://pokeapi.co/api/v2/pokemon/';

let pokemonActual = 1;

pokemonApi.onreadystatechange = function () {
    if (pokemonApi.readyState === 4 && pokemonApi.status === 200) {
        const data = JSON.parse(pokemonApi.responseText);
        pokemonImagen.src = data.sprites.versions['generation-v']['black-white'].animated.front_default || data.sprites.front_default;
        pokemonName.textContent = data.name;
        pokemonId.textContent = data.id;
        soniditos.src = data.cries.latest;
    }

    else {
        pokemonName.textContent = 'No existe ese pokemon';
        pokemonId.textContent = '';
        pokemonImagen.src = './img/caritaTriste.png'; 
        soniditos.src = './img/triste.mp3';    
        soniditos.play()
    }
};

previo.addEventListener('click', function () {
    if (pokemonActual > 1) {
        pokemonActual -= 1;
        cargarpokemon(pokemonActual);
    }
});

next.addEventListener('click', function () {
    pokemonActual += 1;
    cargarpokemon(pokemonActual);
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const valor = input.value.toLowerCase();
    cargarpokemon(valor);
});

function cargarpokemon(id) {
    pokemonApi.open('GET', `${url}${id}`, true);
    pokemonApi.send();
}

cargarpokemon(pokemonActual);
soniditos(pokemonActual);
