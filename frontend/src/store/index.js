import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import kakaomap from "./kakaomap";
import auth from "./auth";
import review from "./review";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      kakaomap: kakaomap,
      auth: auth,
      review: review,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: false,
  });

  return Store;
});
