<template>
  <div class="p-4 bg-theme-black text-theme-white">
    <!-- Heading & Links -->
    <div class="flex justify-between items-center">
      <div class="w-1/4">
        <h1 class="text-5xl font-body">CocktailDB</h1>
      </div>
      <div class="h-3/4">
        <v-tabs
          v-model="tab"
          color="white"
          slider-color="grey"
        >
          <v-tab value="drinks" @click="goToDrinks()">
            Drinks
          </v-tab>
          <v-tab value="statistics" @click="goToStatistics()">
            Statistics
          </v-tab>
        </v-tabs>
      </div>
    </div>
    <!-- End Heading & Links -->
    <AllAutocomplete />
    <!-- Filters -->
    <div class="w-full">
      <div class="md:flex">
        <DrinksAutocomplete class="w-full" />
        <div class="sm:flex">
          <IngredientsAutocomplete class="w-full sm:w-1/2" />
          <TagsAutocomplete class="w-full sm:w-1/2" />
        </div>
      </div>
    </div>
    <!-- End Filters -->
  </div>
</template>

<script lang="ts" src="./NavigationTop.ts"></script>
