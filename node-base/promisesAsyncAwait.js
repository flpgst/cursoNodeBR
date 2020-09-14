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

main()

async function main() {
  try {
    const usuario = await obterUsuario()
    const [{telefone,ddd}, endereco] = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])

    console.log({...usuario, telefone: {ddd, numero: telefone}, endereco})

  } catch (error) {
    console.error('erro: ', error)
  }
}