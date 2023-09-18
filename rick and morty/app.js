const container = document.querySelector('.container');


const Count = 20;

const initCharacter = async () => {
    for(let i = 1; i <= Count; i++) {
        await getCharacter(i);
}};

const getCharacter = async (id) => {
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    createCharacterBox(data);
};

const createCharacterBox = (character) => {
    const name = character.name;
    const gender = character.gender;
    const stat = character.status;
    const species = character.species;
    const id = character.id;

    const cha = document.createElement('div');
    cha.classList.add('character-box');

    cha.innerHTML = `
            <img src="https://rickandmortyapi.com/api/character/avatar/${id}.jpeg" alt="${name}">
            <h3>Name: ${name}</h3>
            <p class="gender"><b>Gender:</b> ${gender}</p>
            <p class="status">${stat}-${species}</p>
    `
    container.appendChild(cha);
    
}
initCharacter();
