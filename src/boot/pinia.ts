import { boot } from "quasar/wrappers";
import { createPinia } from "pinia";

export default ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
};
