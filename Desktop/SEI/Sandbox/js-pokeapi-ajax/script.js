const url = 'https://pokeapi.co/api/v2/pokemon/'

let form = document.querySelector('form')
form.addEventListener('submit', makeRequest)

// console.log(1)

function makeRequest(event) {
    event.preventDefault()
    // get value from input 
    let input = document.getElementById('input')
    let id = input.value
    // build the url
    let newURL = `${url}${id}`
    // make the fetch request to the url
    fetch(newURL)
    .then(res => {
            return res.json()
        })
        .then(json => {
            console.log(json)
            // console.log(json.name)
            // get the pokemon name 
            let pokeName = json.name
            // get height
            let height = json.height
            // get first move name
            let firstMove = json.moves[0].move.name
            let h1 = document.getElementById('poke-name')
            h1.innerHTML = pokeName

            let heightElement = document.createElement('p')
            heightElement.innerHTML = height

            let moveElement = document.createElement('div')
            moveElement.innerHTML = firstMove

            document.body.appendChild(heightElement)
            document.body.appendChild(moveElement)
        })
        .catch(err => {
            console.error(err)
        })

    // set the h1 = name
}