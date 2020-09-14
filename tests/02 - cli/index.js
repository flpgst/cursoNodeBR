import Commander from 'commander'
import { parse } from 'path'
import database from './database.js'
import Database from './database.js'
import Heroi from './Heroi.js'

async function main() {
  Commander
    .version('v1')
    .option('-n, --nome [value]', 'Nome do Heroi')
    .option('-p, --poder [value]', 'Poder do Heroi')
    .option('-c, --cadastrar [value]', 'Cadastrar Heroi')
    .option('-l, --listar ', 'Listar Heroi')
    .option('-r, --remover', 'Remover Heroi pelo id')
    .option('-a, --atualizar [value]', 'Atualizar Heroi pelo id')
    .option('-i, --id [value]', 'Id do Heroi')
    .parse(process.argv)
    
  const heroi = new Heroi(Commander)
  
    
    try {
      if(Commander.cadastrar) {
        const resultado = await Database.cadastrar(heroi)
        if(!resultado){
          console.error('Heroi não cadastrado')
          return
        } 
      console.log('Heroi cadastrado com sucesso')
      }

      if(Commander.listar) {
        const resultado = await Database.listar()
        console.log(resultado)
        return
      }

      if(Commander.remover) {
        const resultado = await Database.remover(heroi.id)
        if(!resultado) {
          console.error('Não foi possível remover o heroi')
        }
        console.log('Heroi removido com sucesso');
      }

      if(Commander.atualizar) {
        const id = parseInt(Commander.atualizar)
        const dado = JSON.stringify(heroi)
        const heroiAtualizar = JSON.parse(dado)
        const resultado = await Database.atualizar(id, heroiAtualizar)
        if(!resultado) 
          console.error('Não foi possível atualizar o heroi')
        console.log('Heroi atualizado com sucesso')
      }

    } catch (error) {
      console.error(error)
    }
}

main()