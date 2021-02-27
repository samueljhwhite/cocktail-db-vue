import Vue from "vue";
import Vuex from "vuex";
import Drink from "@/models/Drink.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    queryResults: [],
    snackbar: null,
    drinkDetailDialog: null,
    signUpDialog: false,
  },

  mutations: {
    SNACKBAR_OPEN: (state: any, text: string) => {
      state.snackbar = text;
    },
    SNACKBAR_CLOSE: (state: any) => {
      state.snackbar = null;
    },
    DRINK_DIALOG_OPEN: (state: any, id: number) => {
      state.drinkDetailDialog = id;
    },
    DRINK_DIALOG_CLOSE: (state: any) => {
      state.drinkDetailDialog = null;
    },
    QUERY_RESULTS_COMMIT: (state: any, drinks: Drink[]) => {
      state.queryResults = drinks;
    },
    SIGN_UP_DIALOG_OPEN: (state: any) => {
      state.signUpDialog = true;
    },
    SIGN_UP_DIALOG_CLOSE: (state: any) => {
      state.signUpDialog = false;
    }
  },

  actions: {
    openSnackbar: (context: any, text: string) => {
      context.commit("SNACKBAR_OPEN", text);
    },
    closeSnackbar: (context: any, text = null) => {
      context.commit("SNACKBAR_CLOSE", text);
    },
    openDrinkDialog: (context: any, id: number) => {
      context.commit("DRINK_DIALOG_OPEN", id);
    },
    closeDrinkDialog: (context: any, id = null) => {
      context.commit("DRINK_DIALOG_CLOSE", id);
    },
    commitQueryResults: (context: any, drinks: Drink[]) => {
      context.commit("QUERY_RESULTS_COMMIT", drinks);
    },
    openSignUpDialog: (context: any) => {
      context.commit("SIGN_UP_DIALOG_OPEN");
    },
    closeSignUpDialog: (context: any) => {
      context.commit("SIGN_UP_DIALOG_CLOSE");
    },
  },
});
