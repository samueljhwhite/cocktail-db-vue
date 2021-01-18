<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-icon @click="pushToRouter()" v-bind="attrs" v-on="on"
        >mdi-book-open-outline</v-icon
      >
    </template>
    <span>View Recipe</span>
  </v-tooltip>
</template>

<script lang="ts" src="./ViewRecipe.ts"></script>
