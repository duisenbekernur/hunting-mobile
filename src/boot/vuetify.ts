import { boot } from 'quasar/wrappers';
import vuetify from '../plugins/vuetify';

export default boot(({ app }) => {
  app.use(vuetify);
});
