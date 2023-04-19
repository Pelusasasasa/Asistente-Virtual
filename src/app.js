import { App } from '@jovotech/framework';
import { GlobalComponent } from './components/GlobalComponent';
import { LoveHatePizzaComponent } from './components/LoveHatePizzaComponent';
import { NombreAplicacionComponent } from './components/NombreAplicacionComponent';
import { SaludoInicial } from './components/SaludoInicialComponent';

const app = new App({
  components: [GlobalComponent, LoveHatePizzaComponent,NombreAplicacionComponent,SaludoInicial],
  plugins: [
  ],
  logging: true,
});

module.exports = {
  app
}
