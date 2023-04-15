import { BaseComponent, Component, Intents } from '@jovotech/framework';

import { YesNoOutput } from '../output/YesNoOutput';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| A component consists of handlers that respond to specific user requests
| Learn more here: www.jovo.tech/docs/components, jovo.tech/docs/handlers
|
*/
@Component()
export class LoveHatePizzaComponent extends BaseComponent {
  START() {
    return this.$send(YesNoOutput, { message: 'Do you like Pizza?' });
  }

  @Intents('YesIntent')
  lovesPizza() {
    return this.$send({ message: 'Yes! I love pizza, too.' });
  }

  @Intents('NoIntent')
  hatesPizza() {
    return this.$send({ message: `That's OK! Not everyone likes pizza.` });
  }

  UNHANDLED() {
    return this.START();
  }
}
