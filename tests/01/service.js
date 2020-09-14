import axios from "axios"


const BASE_URL = 'https://swapi.dev/api/people/'

export async function obterPessoas(nome) {
  const searchParams = `?search=${nome}&format=json`
  const response = await axios.get(BASE_URL+searchParams)
  return response.data.results.map(mapearPessoas)
}

function mapearPessoas(pessoa) {
  return {
    nome: pessoa.name,
    altura: pessoa.height
  }
}

