<template>
  <v-autocomplete
    class="w-1/3 mr-4"
    :items="ingredients"
    :search-input.sync="search"
    clearable
    hide-details
    hide-selected
    item-text="name"
    item-value="id"
    label="Search by alcohol"
    prepend-icon="mdi-bottle-soda-outline"
  ></v-autocomplete>
</template>

<script lang="ts" src="./IngredientsAutocomplete.ts"></script>
