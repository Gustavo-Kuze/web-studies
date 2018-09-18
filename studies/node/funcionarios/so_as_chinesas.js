const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

let funcionarios = []


axios.get(url).then(response=>{

    funcionarios = response.data
    console.log(funcionarios)

})

const getChineses = funcionarios.map()
