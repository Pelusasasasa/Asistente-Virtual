import { BaseComponent, Component, Global, Intents } from '@jovotech/framework';
import { NombreAplicacionComponent } from './NombreAplicacionComponent';
import { SaludoInicial } from './SaludoInicialComponent';

@Global()
@Component()
export class GlobalComponent extends BaseComponent {
  @Intents(['Saludo Inicial'])
  async LAUNCH(){
    await this.$send('Hola Señor Lorenzatto');
    return this.suggestOptions();
  }

  @Intents(['HelpIntent'])
  suggestOptions() {
    return this.$send({
      message: 'En que lo puedo ayudar hoy',
      quickReplies: ['Temperatura', 'Que comer?'],
    });
  }
}
