const axios = require('axios')

// const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'
const url: 'https://k-pop.p.rapidapi.com/idols'


async function obtenerDinos(){
        const respuesta = await axios.get(url);
        console.log(respuesta.data)
}

obtenerDinos()