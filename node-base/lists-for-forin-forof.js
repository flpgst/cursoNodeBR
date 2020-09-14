import {obterPessoas} from "./service.js"

async function main() {
  try {
    const {results} = await obterPessoas('a')
    const names = []
    console.time('for')
    for (let index = 0; index < results.length; index++) {
      const pessoa = results[index];
      names.push(pessoa.name)
    }
    console.timeEnd('for')
    
    console.time('map');
    const mapNames = results.map(pessoa => pessoa.name)
    console.timeEnd('map')

    console.time('forin');
    for (const key in results) {
      names.push(results[key].name)
    }
    console.timeEnd('forin')
    
    console.time('forof');
    for (const pessoa of results) {
      names.push(pessoa.name)
      
    }
    console.timeEnd('forof')
    
    // console.log('names', names)
    // console.log('mapNames', mapNames)
  } catch (error) {
    console.log('error', error)
    
  }
}
main()