<template>
    <v-autocomplete
      class="w-1/3 mr-4"
      :items="allItems"
      :search-input.sync="search"
      v-model="selected"
      clearable
      hide-details
      hide-selected
      item-text="name"
      label="Search by name"
      prepend-icon="mdi-magnify"
      return-object
    ></v-autocomplete>
</template>

<script lang='ts' src='./AllAutocomplete.ts'></script>
