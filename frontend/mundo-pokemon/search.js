//Función para buscar pokemons usando event keydown 
export const initSearch = (pokemonsGuardados, renderFn) => {
    const input = document.getElementById("search")
    //Capturar el evento
    input.addEventListener("keydown", (event) => {
        const query = event.currentTarget.value.trim().toLowerCase();
        const filtered = pokemonsGuardados.filter(pokemon => {
           return pokemon.name.toLowerCase().includes(query)
        });
        renderFn(filtered)
    })
}

//Función para buscar pokemons solo por input al escribir

// export const initSearch = (pokemonsGuardados, renderFn) => {
//   const input = document.getElementById("search");
//   //Capturar el evento
//   input.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//       const query = event.currentTarget.value.trim().toLowerCase();
//       const filtered = pokemonsGuardados.filter((pokemon) => {
//         return pokemon.name.toLowerCase().includes(query);
//       });
//       renderFn(filtered);
//     } 
    
//   });
// };