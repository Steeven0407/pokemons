const input = document.getElementById("input")
const boton = document.getElementById("boton")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")
const boton4 = document.getElementById("boton4")
const img = document.createElement("img")
const img2 = document.createElement("img2")
const root = document.getElementById("root")


/*Mostrar pokemons*/
function MostrarTodos() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => mostrarPokemons(data))
}

function mostrarPokemons(data) {
    console.log(data)
    data.results.map(pokemon => {
        const div = document.createElement("div")
        div.innerText = pokemon.name
        root.append(div)
    })

}


boton2.addEventListener("click", () => {
    root.innerHTML = ""
    MostrarTodos()
})



/*Mostrar pokemon especifico*/
function obtenerPokemon(letra) {
    const url = `https://pokeapi.co/api/v2/pokemon/${letra}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(data) {
    console.log(data)
    img.src = data.sprites.front_default
    const div = document.createElement("div")
    root.append(img)
}


boton.addEventListener("click", () => {
    root.innerHTML = ""
    const letra = input.value
    console.log(letra)
    obtenerPokemon(letra)
})


/*Mostrar Habilidades*/
function obtenerHabilidades(letra) {
    const url = `https://pokeapi.co/api/v2/pokemon/${letra}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => mostrarHabilidad(data))
}

function mostrarHabilidad(data) {
    console.log(data)
    data.abilities.map(pokemon => {
        const div = document.createElement("div")
        div.innerText = pokemon.ability.name
        root.append(div)
    })
}


boton3.addEventListener("click", () => {
    root.innerHTML = ""
    const letra = input.value
    console.log(letra)
    obtenerHabilidades(letra)
})

/*Mostrar pokemons*/
function MostrarTodosImagen() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => mostrarPokemonsImagen(data))
}

function mostrarPokemonsImagen(data) {
    /*console.log(data)*/
    data.results.map(pokemon => {
        const div = document.createElement("div")
        console.log(pokemon.url)
        fetch(pokemon.url)
            .then(res => res.json())
            .then(data2 =>{
                const img2 = document.createElement("img")
                img2.src = data2.sprites.front_default
                root.append(img2)
            })


        /*div.innerText = pokemon.name*/

    })

}


boton4.addEventListener("click", () => {
    root.innerHTML = ""

    MostrarTodosImagen()
})