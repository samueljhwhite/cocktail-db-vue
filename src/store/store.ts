import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: null,
    drinkDetailDialog: null,
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
  },
});
