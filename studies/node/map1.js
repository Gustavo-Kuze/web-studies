let nums = [1, 2, 3, 4, 5]

const soma10 = e => e + 10
const triplica = e => e * 3
const paraDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`

let resultado = nums.map(soma10).map(triplica).map(paraDinheiro)

console.log(resultado)