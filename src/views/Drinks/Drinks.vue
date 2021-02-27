<template>
  <div class="w-full flex justify-center">
    <div
      class="flex justify-center flex-wrap mt-8 mb-32 w-11/12"
      style="max-width: 1800px;"
    >
      <div class="w-full flex justify-center">
        <div
          class="w-1/2 mb-8 bg-white px-9 rounded-full placeholder-font-body font-body list-font"
          style="box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
        >
          <SearchBar @fetchDrinks="fetchingDrinks()" />
        </div>
      </div>

      <v-container v-if="isLoading" style="height: 400px;">
        <v-row class="fill-height" align-content="center" justify="center">
          <v-col class="subtitle-1 text-center" cols="12">
            Loading Drinks...
          </v-col>
          <v-col cols="6">
            <v-progress-linear
              color="blue-grey darken-1"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>
          </v-col>
        </v-row>
      </v-container>

      <DrinkCard
        v-else
        v-for="(drink, index) in drinksList"
        :key="`drink-card-${index}`"
        :drink="drink"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./Drinks.ts"></script>

<style>

</style>
