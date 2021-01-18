<template>
  <div class="flex flex-wrap justify-center">
    <template v-for="(drink, index) in drinksArray">
      <DrinkCard :key="index" :drink="drink" />
    </template>
  </div>
</template>

<script lang="ts" src="./Drinks.ts"></script>
