const fs = require("fs")

const caminho = __dirname + "/ler.json"

/* da pra ler de duas maneiras */

//síncrona e ruim
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assíncrona e complexa
fs.readFile(caminho, 'utf-8', (erro, conteudo)=>{
    //qualquer erro em erro pode ser tratado, essa variável será vazia se tudo der certo
    const config = JSON.parse( conteudo)

    console.log(`${config.db.host}: ${config.db.port}`)
})

//NOTA: isso foi só um exemplo, mas podemos ler arquivos JSON simplesmente usando require
const jsn = require('./ler.json')
console.log(jsn.db)


//por fim, para listarmos os arquivos de uma pasta fazemos assim
fs.readdir(__dirname, (erro, conteudo) => {
    console.log(erro)
    console.log(conteudo) //retorna um array com os nomes dos arquivos e pastas
})




