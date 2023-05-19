import { store } from "@acme/utils";
import { plugin } from "@acme/core";
store.use(plugin);

console.log(store.getState().voila);
