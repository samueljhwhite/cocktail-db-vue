<template>
    <v-autocomplete
      class="w-1/4"
      :items="tags"
      :search-input.sync="search"
      item-text="name"
      clearable
      hide-details
      hide-selected
      label="Search by tags"
      prepend-icon="mdi-tag"
    ></v-autocomplete>
</template>

<script lang="ts" src="./TagsAutocomplete.ts"></script>
