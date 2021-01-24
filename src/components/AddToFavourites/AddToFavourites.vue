<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        @click="addToFavourites()"
        v-bind="attrs"
        v-on="on"
        >mdi-heart-plus-outline</v-icon
      >
    </template>
    <span>Add To Favourites</span>
  </v-tooltip>
</template>

<script lang="ts" src="./AddToFavourites.ts"></script>
