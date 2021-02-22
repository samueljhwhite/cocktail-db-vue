<template>
  <div class="w-full flex justify-center">
    <div
      class="flex justify-center flex-wrap mt-16 mb-32 w-11/12"
      style="max-width: 1800px;"
    >
      <DrinkCard
        v-for="(drink, index) in drinksList"
        :key="`drink-card-${index}`"
        :drink="drink"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./Drinks.ts"></script>
