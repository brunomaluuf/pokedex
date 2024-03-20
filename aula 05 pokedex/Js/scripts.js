

const pokemons = []


function carregarPokemons () {


    const pokemon1 = {
        Id: 1,
        nome: "bulbasaur",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"


    }


    const pokemon2 = {
        Id: 2,
        nome: "dragonite",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
        

    }

    const pokemon3 = {
        Id: 3,
        nome: "blastoise",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"


    }
    const pokemon4 = {
        Id: 4,
        nome: "pikachu",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"



    }

    const pokemon5 = {
        Id: 5,
        nome: "squirtle",
        imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"


    }



pokemons.push(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5)


for(let index = 0 ; index <pokemons.length; index ++){
    const pokemon = pokemons[index]
    adicionarCardPokemon(pokemon)

}

}



function adicionarCardPokemon(pokemon) {


    const imagemElemento = document.createElement("img")

    imagemElemento.setAttribute("src", pokemon.imagem)

    const divElemento = document.getElementById ("conteudo-pokemon")

    divElemento.appendChild(imagemElemento)

}

carregarPokemons()