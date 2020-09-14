import {obterPessoas} from "./service.js"

async function main() {
  try {
    const {results} = await obterPessoas('a')
    const pesos = results.map(pessoa => parseInt(pessoa.height))
    const somaPesos = pesos.reduce((acc, peso) => {
      return acc+peso
    },0)

    console.log('pesos', somaPesos)
  } catch (error) {
    console.error(error)
  }
}

main()