import eventEmitter from "events"
import { openStdin, stdin } from "process"


class MeuEmissor extends eventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, click => console.log('um usuario clicou', click))

meuEmissor.emit(nomeEvento, 'botão buscar')
meuEmissor.emit(nomeEvento, 'botão salvar')

setInterval(() => {
  meuEmissor.emit(nomeEvento, 'ok')
}, 500);

stdin.addListener('data', value => console.log('==>', value.toString()))