// Arrow function
// São funções anônimas SEMPRE

// Tem um "return" implícito se declaradas assim:
const soma = (a, b) => a + b
// Porém com chaves, precisam que o return seja declarado
const soma2 = (a, b) => {
    return a + b
}

// o this das funções arrow vão sempre apontar para module.exports (quando usando o node)
const lexico1 = () => console.log(this === module.exports)
//lexico1()
// mesmo que a gente tente forçadamente fazer um binding para outro objeto
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


//Parâmetro default
function param(lalala = 'blablabla'){
    console.log(lalala)
}
param() //imprime blablabla
param('lalala') //imprime lalala


// rest (as vezes chamado spread de acordo com o contexto)
// Agrupando parâmetros em um array com rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 34, 56)) //agrupou esses parametros em um array pra ser percorrido

