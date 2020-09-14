import util from "util"

const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Filipe'
      })
    }, 500);
  })
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefone: '47454564',
        ddd: '11',
        user_id: 1
      })
    }, 800);

  })

}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "sdasd",
      n: "0"
    })
  }, 800);
}


const usuarioPromise = obterUsuario()

usuarioPromise
  .then(usuario => 
    obterTelefone(usuario.id)
    .then((telefone) => ({
      ...usuario, telefone
    }))) 
  .then(usuarioComTelefone => obterEnderecoAsync(usuarioComTelefone.id)
    .then(endereco => ({
      ...usuarioComTelefone, endereco
    })))              
  .then(usuario => {
    console.log('usuario->', usuario)
  })
  .catch(error => {
    console.error("User error", error)
  })




// obterUsuario(function resolverUsuario(error, usuario) {
//   if (error) {
//     console.log('user error', error)
//     return
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//     if (error1) {
//       console.log('phone error', error1)
//       return
//     }
//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//       if (error2) {
//         console.log('address error', error2)
//         return
//       }
//       console.log(`
//         Nome: ${usuario.nome}
//         Endereco: ${endereco.rua}, ${endereco.n}
//         Telefone: (${telefone.ddd}) ${telefone.telefone}
//       `)
//     })
//   })
// })

