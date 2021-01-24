import Vue from "vue";
import Vuex from "vuex";
import ShoppingListItem from "@/models/ShoppingListItem.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    list: Array<ShoppingListItem>(),
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
  },
});
