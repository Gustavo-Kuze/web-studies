const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userAPI = require('./userAPI')

app.use(bodyParser.text())


//respondendo com funções de outro módulo criados por nós
app.post('/userapi', userAPI.salvar)
app.get('/userapi', userAPI.obter)


/* POST 

    post sem body-parser
*/
app.post('/corpo', (req, res)=>{
    // let corpo = ''

    // req.on('data', function(parte){
    //     corpo += parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
})


/* GET */
//get por query
/* Essa função possui uma especificidade maior do que a por params, 
uma vez que ela só irá atender ao /relatorio. Por isso, precisamos declará-la antes.

a partir do front-end usamos assim:
http://localhost:3000/cliente/relatorio?completo=true&ano=2018
*/
app.get('/cliente/relatorio', (req, res, next)=>{
    res.send(`Cliente relatório: Completo = ${req.query.completo}; Ano = ${req.query.ano}`)
})



//get por params 
/*
a partir do front-end usamos assim:
http://localhost:3000/cliente/3
*/
app.get('/cliente/:id', (req, res, next)=>{
    res.send(`O id passado foi: ${req.params.id}`)
})

/* entendendo o padrão middleware */
//Essa função do tipo get, está sendo declarada como a primeira na ordem de execução, 
//uma vez que ela foi escrita antes. Quando o conteúdo dela for executado, estamos dando um call
// no método callback next, e então a próxima função da cadeia será chamada, nesse caso
// a função app.use
app.get('/opa', (req, res, next)=>{
    console.log('get')
    next()
})

app.use('/opa', (req, res)=>{
    res.send('<h1>Use</h1>')
})

app.listen(3000, ()=>{
    console.log('backend executando')
})