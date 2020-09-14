import {deepStrictEqual} from 'assert'
import database from './database.js'

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'super velocidade',
  id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Homem Aranha',
  poder: 'radar aranha',
  id: 2
}

describe('Suite de manipulação de herois', () => {
  before(async () => {
    const lista = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
    
    if(!lista.length) 
      await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
      await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
  })
  it('deve pesquisar um heroi usando arquivos', async () => {
    const expect = DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expect.id)
    deepStrictEqual(resultado, expect)
  })
  it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [atual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
    deepStrictEqual(atual, expected)
  })
  it('deve remover um heroi pelo id', async () => {
    const expected = true
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
    deepStrictEqual(resultado, expected)
  })
  it('deve atualizar um heroi pelo id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Wolwerine',
      poder: 'cura'
    }

    const heroiAtualizado = {
      nome: 'Wolwerine',
      poder: 'cura'
    }
    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id , heroiAtualizado)
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
    deepStrictEqual(resultado, expected)
  })
})

