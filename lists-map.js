import {obterPessoas} from "./service.js"

async function main() {
try {
  const {results} = await obterPessoas('a')
  // const names = []
  
  // results.forEach(pessoa => {
  //   names.push(pessoa.name)
  // });

  const names = results.map(pessoa => pessoa.name)


  console.log('names', names)
} catch (error) {
  console.log('error', error)
}
}

main()