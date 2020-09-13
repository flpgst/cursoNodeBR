import {obterPessoas} from "./service.js"

async function main() {
  try {
    const {results} = await obterPessoas('a')
    const familiaLars = results.filter(item => item.name.toLowerCase().indexOf('lars') !== -1)
  
    console.log('familiaLars', familiaLars.map(({name}) => name))
    
  } catch (error) {
    console.log('error', error)
  }
  
}



main()
