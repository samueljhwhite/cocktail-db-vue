<template>
  <div class="flex flex-wrap justify-center mt-8 mb-8">
    <template v-for="(drink, index) in drinksArray">
      <DrinkCard :key="index" :drink="drink" />
    </template>
  </div>
</template>

<script lang="ts" src="./Drinks.ts"></script>
