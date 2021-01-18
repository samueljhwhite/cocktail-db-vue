<template>
  <v-card class="m-1" width="300" height="300">
    <v-img
      width="300"
      height="100"
      src="https://source.unsplash.com/random/300x100"
    ></v-img>

    <v-card-title class="font-heading flex justify-between">
      {{ drink.name }}
      <AddToShoppingList :ingredients="drink.primaryIngredients"/>
    </v-card-title>

    <v-card-text>
      <div class="flex flex-wrap mb-2">
        <template v-for="(tag, index) in drink.tags">
          <RoundedPill :key="index" :pillText="tag" />
        </template>
      </div>

      <div class="font-body">
        {{ drink.description }}
      </div>
    </v-card-text>

    <v-card-actions class="font-heading flex justify-center m-0 p-0">
      <v-btn text>
        See Recipe
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" src="./DrinkCard.ts"></script>
