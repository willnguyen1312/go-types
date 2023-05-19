export { toSlug } from "./toSlug";
export { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
export { usePrevious } from "./usePrevious";

export interface ExtraState {}

interface Store {
  currentTime: number;
}

export type MergedState = Store & ExtraState;

function createStore() {
  const mergedStore: MergedState = { currentTime: 100 };

  let store = mergedStore;

  function updateStore(extra: any) {
    store = { ...store, ...extra };
  }

  return {
    use: function <F>(
      config: { install: (store: MergedState, option?: F) => void },
      option?: F
    ) {
      config.install(store, option);
    },
    getState() {
      return store;
    },
  };
}

export const store = createStore();
