function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: 'Filipe'
    })
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '47454564',
      ddd: '11',
      user_id: 1
    })
  }, 2000);

}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "sdasd",
      n: "0"
    })
  }, 2000);
}



obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.log('user error', error)
    return
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
    if (error1) {
      console.log('phone error', error1)
      return
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
      if (error2) {
        console.log('address error', error2)
        return
      }
      console.log(`
        Nome: ${usuario.nome}
        Endereco: ${endereco.rua}, ${endereco.n}
        Telefone: (${telefone.ddd}) ${telefone.telefone}
      `)
    })
  })
})

