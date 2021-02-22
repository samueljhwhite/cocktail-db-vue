<template>
  <v-autocomplete
    class="w-full"
    clearable
    dark
    hide-details
    item-text="name"
    label="Search by name"
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
