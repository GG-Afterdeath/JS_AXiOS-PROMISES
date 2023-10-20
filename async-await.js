const axios = require('axios')

// const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'
// const url= 'https://k-pop.p.rapidapi.com/idols'
const url = 'https://api.api-ninjas.com/v1/riddles'

async function obtenerInfor(){
        try{
                const respuesta = await axios.get(url);
                console.log(respuesta.data)
        }catch(error){
                console.log(error)
        }
}

obtenerInfor()