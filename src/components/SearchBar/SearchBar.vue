<template>
  <v-autocomplete
    class="w-full"
    clearable
    hide-details
    item-text="name"
    label="Search drinks, ingredients, and tags"
    prepend-icon="mdi-magnify"
    return-object
    no-data-text="Search cocktails, liquor, and tags!"
    v-model="selected"
    :items="allItems"
    :search-input.sync="search"
    v-bind="$attrs"
    v-on="$listeners"
  ></v-autocomplete>
</template>

<script lang="ts" src="./SearchBar.ts"></script>
