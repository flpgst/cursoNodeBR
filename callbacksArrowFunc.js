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



obterUsuario((error, usuario) => {
  if (error) {
    console.error('user error', error)
    return
  }
  obterTelefone(usuario.id, (error1, telefone) => {
    if (error1) {
      console.error('phone error', error1)
      return
    }
    obterEndereco(usuario.id, (error2, endereco) => {
      if (error2) {
        console.error('address error', error2)
        return
      }
      console.log([{
        nome: usuario.nome,
        endereco: {
          rua: endereco.rua,
          numero: endereco.n
        },
        telefone: {
          ddd: telefone.ddd,
          numero: telefone.telefone
        }
      }])
    })
  })
})

