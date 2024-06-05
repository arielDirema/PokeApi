//let button = document.getElementById('button')
//let image = document.getElementById('image')
//let pokeNumber = document.getElementById('number')
//let pokeName = document.getElementById('name')

let isLoading = false;

const changePokemon = async() => {
    isLoading = true;

    if (isLoading){
        console.log('Loading...');
    }


    let randomNumber = Math.ceil(Math.random() * 150) + 1;
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    let data = await fetch(requestString)
    //console.log(data)

    let response = await data.json()
    console.log(response)

    //image.src = response.sprites.front_default
    //pokeName.innerHTML = response.name
    //pokeNumber.innerHTML = randomNumber
    isLoading = false;
}

changePokemon();

//button.addEventListener('click', changePokemon)