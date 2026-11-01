//Notes
// Map transforms, filter selects, and reduce combines


const pokemon = [
    { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
    { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
    { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
    { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 },
    { name: "Flareon", type: "fire", maxHp: 65, attack: 130 },
    { name: "Reshiram", type: "fire", maxHp: 100, attack: 120 },

];

//part1
// Use .filter() to build a new array containing only the
// Pokémon of one type (for example, all "fire" types) and render that list to the page.


const firemon = pokemon.filter(pokemon => pokemon.type === "fire");


document.getElementById("firemonlist").textContent = firemon.map (pokemon => pokemon.name).join(", ");

//part2
//Use .map() to build a new array of display-ready strings (for example,
// "Charmander (fire) — 100 HP") and render that list to the page.


const thenewmon = pokemon.map (pokemon => `<li> ${pokemon.name} (${pokemon.type}) - ${pokemon.maxHp} HP </li>`).join("");

document.getElementById("pokelist").innerHTML = thenewmon



//part 3
//Use .reduce() to calculate and display the total
// combined maxHp of the whole roster, and separately the average attack.

const combinedhp = pokemon.reduce((sum, pokemon) => {
    return sum + pokemon.maxHp;
}, 0);

console.log(combinedhp);

const combinedatk = pokemon.reduce((sum, pokemon) => {
    return sum + pokemon.attack;
}, 0);

const averageatk = combinedatk / 6;
console.log(averageatk);

document.getElementById("teamhps").textContent = combinedhp;

document.getElementById("avgatks").textContent = averageatk;

//part 4
// Add a dropdown or a set of buttons that lets the user pick
// a type and re-filter the displayed roster live, without reloading the page.


// const monlist = document.getElementById("monlist");
//
//
// function filteredpokemon() {
//
//     const selectedtype = monlist.value;
//
//     const filteredmon = pokemon.filter(pokemon => {
//         return selectedtype === "all" || pokemon.type === selectedtype;
//     });
//
//     const displaymon = filteredmon.map (pokemon => {
//         return `<li> ${pokemon.name} (${pokemon.type}) - ${pokemon.maxHp} HP </li>`;
//     }).join("");
//
//     document.getElementById("monfilter").innerHTML = displaymon;
//
// }
//
// monlist.addEventListener("change", filteredpokemon)
//
// filteredpokemon();

const monlist = document.getElementById("monlist");

monlist.addEventListener("change", (event) => {
    const selectedtype = monlist.value;

    const filteredmon = pokemon.filter(pokemon => {
        return selectedtype === "all" || pokemon.type === selectedtype;
    });

    const displaymon = filteredmon.map (pokemon => {
        return `<li> ${pokemon.name} (${pokemon.type}) - ${pokemon.maxHp} HP </li>`;
    }).join("");

    document.getElementById("monfilter").innerHTML = displaymon;


});

monlist.dispatchEvent(new Event("change"));







