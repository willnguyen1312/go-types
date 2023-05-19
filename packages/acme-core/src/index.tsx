import { MergedState } from "@acme/utils";

declare module "@acme/utils" {
  interface ExtraState {
    voila: string;
  }
}

// store.use(
//   {
//     install: (store, option) => {
//       console.log(store.currentTime);
//     },
//   },
//   { aha: "aha" }
// );

export const plugin = {
  install: (store: MergedState) => {
    // Plugin code goes here
    // console.log(store.ahaha);
    store.voila = "aha";
  },
};

export * from "./Button";
