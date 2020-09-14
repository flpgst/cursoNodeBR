import {readFile, writeFile} from 'fs'
import {promisify} from 'util'

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json'
  }
  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
    return JSON.parse(arquivo.toString())
  }

  async escreverArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true    
  }

  async listar(id) {
    const dados = await this.obterDadosArquivo()
    const dadosFiltrados = id ? dados.filter(item => item.id === id) : dados
    return dadosFiltrados
  }

  async cadastrar(heroi) {
    delete heroi.id
    const dados = await this.obterDadosArquivo()
    const id = heroi.id <= 2 ? heroi.id : Date.now()
    const heroiComId = {
      id, ...heroi
    }
    const dadosFinal = [
      ...dados, heroiComId
    ]

    const resultado = await this.escreverArquivo(dadosFinal)
    return dadosFinal

  }

  async remover(id) {
    const lista =  await this.obterDadosArquivo()
    
    const deletedItem = lista.findIndex(item => item.id === parseInt(id))
    if (deletedItem === -1) throw Error('O heroi não existe na lista')
    lista.splice(deletedItem, 1)
    return this.escreverArquivo(lista)
  }

  async atualizar(id, modificacoes) {
    const dados = await this.obterDadosArquivo()
    const listaAtualizada = dados.map(item => item.id === id ? {...item, ...modificacoes} : item)
    return this.escreverArquivo(listaAtualizada)
    
 }
}

export default new Database