<template>
  <v-card class="m-2" width="300" height="300">
    <v-img
      width="300"
      height="100"
      src="https://images.unsplash.com/photo-1536935338788-846bb9981813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80"
    ></v-img>

    <v-card-title class="font-heading truncate">
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
