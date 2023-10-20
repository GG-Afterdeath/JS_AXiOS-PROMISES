const axios = require('axios')

//const url = 'https://pokeapi.co/api/v2/pokemon'
//url = 'https://dbd-api.herokuapp.com/perks'



axios.get(url)
        .then((respuesta) => {
            let simpsons = respuesta.Nombre
                    simpsons.forEach((simpson)=>{
                        console.log(simpson.docs)
                        console.log('--------------')
                    })
        })
        .catch(function(error){
            console.log(error)
        })