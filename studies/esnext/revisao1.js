/* const, var e let
const: é uma constante acessível apenas dentro do escopo que foi criado
let: é uma variável de bloco, onde ela pode ser acessada apenas dentro do escopo onde foi criada
var(não aconcelhável): variável global acessível em qualquer parte do script
*/

{
    {
        var a = "Acessível do lado de fora"
        let b = "Não acessível do lado de fora"
        const c = "Também não da pra acessar do lado de fora"
    }
    console.log(a) //imprime 'Acessível do lado de fora'
    console.log(b) //retorna um erro
    console.log(c) //retorna um erro
}

//_____________________________________________


/* Template strings podem ser criadas quanto queremos concatenas 
ou interpolar conteúdos para uma saída em formato de texto. 
Ela interpreta o enter caso quebremos a string dentro do código */

const a = "pinguins"
const b = " são lindos demais!"
const c = "PUTA MERDA!"

console.log(`Só pra constar, ${a}${b}
${c}`)


//destructuring: Armazena os filhos da estrutura pai, em variáveis globais.
// Se o pai for um array, tira os objetos desse array
// Se o pai for uma string, tira os caracteres ou substrings dessa string

//1: armazenar em variáveis os caracteres ou uma substring de uma string
const [l, e, ...tras] = "Cod3r" //l = C, e = o, tras = todo o resto
console.log(l, e, tras)

//2
const [x, y] = [1, 2, 3] //x=1, y=2
const [x, ,y] = [1, 2, 3] //x=1, y=3

//3: tirar atributos de um objeto
const {nome, idade: i} = {nome: "Abedenago", idade: 84} //i é a idade apelidada de i
console.log(nome, i)









