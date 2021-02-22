<template>
  <v-card class="m-2" width="300" height="300">
    <v-img
      width="300"
      height="100"
      src="https://source.unsplash.com/random/300x100"
    ></v-img>

    <v-card-title class="font-heading">
      {{ drink.name }}
    </v-card-title>

    <v-card-text>
      <div class="flex flex-wrap mb-2">
        <template v-for="(ingredient, index) in drink.ingredients">
          <RoundedPill :key="`ingredient-${index}`" :pillText="ingredient.name" />
        </template>
        <template v-for="(tag, index) in drink.tags">
          <RoundedPill :key="`tag-${index}`" :pillText="tag.name" />
        </template>
      </div>

      <div class="font-body">
        {{ drink.description }}
      </div>
    </v-card-text>

    <v-card-actions class="font-heading flex justify-around m-0 p-0">
      <AddToShoppingList :ingredients="drink.ingredients" />
      <AddToFavourites :id="drink.id" :name="drink.name" />
      <ViewRecipe :id="drink.id" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" src="./DrinkCard.ts"></script>
