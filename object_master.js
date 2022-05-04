const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// #1
const divBy3Pkmn = pokémon.filter((p) => p.id % 3 === 0);
// console.log(divBy3Pkmn);

// #2 
const firePkmn = pokémon.filter( (p) => p.types.includes('fire'));
// console.log(firePkmn);

// #3
const twoTypesPkmn = pokémon.filter( (p) => p.types.length == 2);
// console.log(twoTypesPkmn);

// #4
const justNamesPkmn = pokémon.map( pkmn => pkmn.name);
// console.log(justNamesPkmn);


// #5
const greaterThan99Pkmon = pokémon.filter( (p) => p.id > 99).map( pkmn => pkmn.name);
// console.log(greaterThan99Pkmon);

// #6
const justPoisonPkmn = pokémon.filter( (p) => p.types == 'poison').map( pkmn => pkmn.name);
// console.log(justPoisonPkmn);

// #7
const firstTypeOfFlyingPkmn = pokémon.filter( (p) => p.types[1] == 'flying').map( pkmn => pkmn.types[0]);
// console.log(firstTypeOfFlyingPkmn);

// #8
const countNormalPkmn = pokémon.filter( (p) => p.types.includes('normal')).map( pkmn => pkmn).length;
console.log(countNormalPkmn);