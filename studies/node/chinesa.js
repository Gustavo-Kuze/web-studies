/*Esse código faz uma requisição http para um arquivo do cod3r que contém 500 funcionários
depois ele filtra apenas os chineses, apenas as mulheres chinesas e retorna a com menor salário*/

const axios = require("axios")
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"


const chineses = f=>f.pais === "China"
const mulheres = f=>f.genero === "F"
const menorSalario = (func, funcAtual)=>{
    return func.salario < funcAtual.salario? func : funcAtual 
}

axios.get(url).then(response => {

    const funcionarios = response.data;

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)


    console.log(func)
})

