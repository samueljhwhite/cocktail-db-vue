<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-icon @click="addToList()" v-bind="attrs" v-on="on"
        >mdi-playlist-plus</v-icon
      >
    </template>
    <span>Add To Shopping List</span>
  </v-tooltip>
</template>

<script lang="ts" src="./AddToShoppingList.ts"></script>
