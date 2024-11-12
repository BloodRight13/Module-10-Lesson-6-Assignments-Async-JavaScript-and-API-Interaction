// Task 1
    // Got the keys from marvel

// Task 2
async function fetchMarvelCharacters() {
    const BASE_URL = 'https://gateway.marvel.com:443/v1/public/characters';
    const API_KEY = 'a40a587d441db7441e6a0cbd4cd392f7'; // Replace your actual API key

    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchMarvelCharacters();

// Task 3
function updateUIWithCharacters(characters) {
    const container = document.getElementById('character-container');
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.className = 'character';
        characterElement.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
            <p>${character.description || 'No description available.'}</p>
        `;
        container.appendChild(characterElement);
    });
}

async function fetchCharactersAndUpdateUI() {
    try {
        const response = await fetchMarvelCharacters();
        updateUIWithCharacters(response);
    } catch (error) {
        console.error('Failed to update UI:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchCharactersAndUpdateUI();
});