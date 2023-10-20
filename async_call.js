//commonjs <- anteriores a ecmajs2015
const request = require('request')

// const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'
// const url = 'https://dbd-api.herokuapp.com/perks'
const url = 'https://dbd-api.herokuapp.com/killers'

let r = request(url,
                {json: true},
                (error, respuesta, body) => { 
                    let resp = body
                    resp.forEach((killer)=>{
                        console.log(killer.Name)
                        console.log('--------------')
                    })
                 })