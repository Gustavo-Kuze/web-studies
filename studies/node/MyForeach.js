/***Este arquivo mostra como implementar sua própria função foreach***/


//prototype é sempre o pai do objeto
Array.prototype.meuForEach = function(callback){
    for (let i = 0; i < this.length; i++) { //this é a instância do objeto de array
        callback(this[i], i, this)
    }
}


let meuArr = new Array('chiquinha', 'chaves', 'quico', 'madruga')

meuArr.meuForEach(function(nome, index){
    console.log(`${nome}, ${index}`)
})