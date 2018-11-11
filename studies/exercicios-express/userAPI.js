function salvar(req, res){
    res.send('Usuário > SALVAR')
}

function obter(req, res){
    res.send('Usuário > OBTER')
}

module.exports = {salvar, obter}