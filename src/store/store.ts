import Vue from "vue";
import Vuex from "vuex";
import ShoppingListItem from "@/models/ShoppingListItem.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    list: Array<ShoppingListItem>(),
    snackbar: null,
  },

  mutations: {
    increment: (state) => {
      state.count++;
    },
    addToList: (state, shoppingListItem: ShoppingListItem) => {
      state.list.push(shoppingListItem);
    },
    removeFromList: (state, shoppingListItem: ShoppingListItem) => {
      const index = state.list.indexOf(shoppingListItem);

      if (index) {
        state.list.splice(index, 1);
      }
    },
    SNACKBAR_OPEN: (state: any, text: string) => {
      state.snackbar = text;
    },
    SNACKBAR_CLOSE: (state: any) => {
      state.snackbar = null;
    },
  },

  actions: {
    increment: (context) => {
      context.commit("increment");
    },
    addToList: (context, shoppingListItem: ShoppingListItem) => {
      context.commit("addToList", shoppingListItem);
    },
    removeFromList: (context, shoppingListItem: ShoppingListItem) => {
      context.commit("removeFromList", shoppingListItem);
    },
    openSnackbar: (context: any, text: string) => {
      context.commit("SNACKBAR_OPEN", text);
    },
    closeSnackbar: (context: any, text = null) => {
      context.commit("SNACKBAR_CLOSE", text);
    },
  },
});
