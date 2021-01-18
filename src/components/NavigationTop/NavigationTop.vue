<template>
  <v-toolbar dark style="max-height: 120px;">
    <v-app-bar-nav-icon class="hidden-sm-and-down"></v-app-bar-nav-icon>
    <v-toolbar-title class="mr-6 hidden-sm-and-down font-heading">
      Cocktail DB
    </v-toolbar-title>
    <v-autocomplete
      class="w-1/3 mr-4"
      v-model="searchInput"
      :items="drinks"
      :loading="isLoading"
      :search-input.sync="search"
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="id"
      label="Search by name"
      prepend-icon="mdi-glass-cocktail"
    >
      <!-- <template v-slot:selection="{ attr, on, item, selected }">
        <v-chip
          v-bind="attr"
          :input-value="selected"
          color="blue-grey"
          class="white--text"
          v-on="on"
        >
          <v-icon left>
            mdi-bitcoin
          </v-icon>
          <span v-text="item.name"></span>
        </v-chip>
      </template> -->
      <!-- <template v-slot:item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="headline font-weight-light white--text"
        >
          {{ item.name.charAt(0) }}
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-bitcoin</v-icon>
        </v-list-item-action>
      </template> -->
    </v-autocomplete>
    <v-autocomplete
      class="w-1/4"
      v-model="tagsSearch"
      :items="uniqueTags"
      :search-input.sync="search"
      clearable
      hide-details
      hide-selected
      label="Search by tags"
      prepend-icon="mdi-tag"
    ></v-autocomplete>

    <template v-slot:extension>
      <v-tabs
        v-model="tab"
        :hide-slider="!model"
        color="white"
        slider-color="grey"
      >
        <v-tab>
          Cocktails
        </v-tab>
        <v-tab :disabled="!model">
          Statistics
        </v-tab>
      </v-tabs>
    </template>
  </v-toolbar>
</template>

<script lang="ts" src="./NavigationTop.ts"></script>
