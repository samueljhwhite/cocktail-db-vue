<template>
  <div>
    <!-- Filters: Moved to header -->
    <!-- <div class="flex w-full justify-center">
      <div
        class="w-11/12 xl:flex p-4 pb-6 pt-0 mb-4 m-1 v-card v-sheet bg-theme-white"
      >
        <DrinksAutocomplete class="w-full" />
        <div class="md:flex">
          <IngredientsAutocomplete class="w-full md:w-1/2" />
          <TagsAutocomplete class="w-full md:w-1/2" />
        </div>
      </div>
    </div> -->
    <!-- Cards -->
    <div class="flex flex-wrap justify-center mb-8">
      <DrinkCard
        v-for="(drink, index) in drinksArray"
        :key="`drink-card-${index}`"
        :drink="drink"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./Drinks.ts"></script>
