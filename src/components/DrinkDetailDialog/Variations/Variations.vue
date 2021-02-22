<template>
  <v-container class="mt-72" style="min-height: 50vh;">
    <div class="xl:flex xl:justify-around">
      <div class="max-w-prose">
        <v-card-title class="font-heading">Description</v-card-title>
        <v-card-text class="font-body">
          <p>{{ drink.created_at }}</p>
        </v-card-text>
      </div>
      <div class="max-w-prose">
        <v-card-title class="font-heading">Method</v-card-title>
        <v-card-text class="font-body">
          <p>{{ drink.updated_at }}</p>
        </v-card-text>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" src="./Variations.ts"></script>
