//EcmaScript8 nos trouxe os métodos Object.values e Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.keys(obj)) //esse aqui é do ES6
console.log(Object.values(obj))
console.log(Object.entries(obj))


//melhora na notação literal de objetos
/*
 Agora podemos criar um atributo interno de objeto, 
baseado em atributo externo criado anteriormente.
E também podemos criar uma função sem usar a palavra reservada
*/

//antes
const nome = 'Abedenago'
const pessoa = {
    nome: nome, //precisava fazer dessa forma
    ola: function(){
        return 'Daeeee'
    }
}

//agora
const nome2 = 'Abedenago'
const pessoa2 = {
    nome2,
    ola(){
        return 'Daeeee'
    }
}


//agora temos como criar classes, que na realidade "meeeemo" são funções por baixo dos panos

//Class 
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())

