<template>
    <v-autocomplete
      class="w-1/3 mr-4"
      :items="drinks"
      :search-input.sync="search"
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="id"
      label="Search by name"
      prepend-icon="mdi-glass-cocktail"
    ></v-autocomplete>
</template>

<script lang='ts' src='./DrinksAutocomplete.ts'></script>
