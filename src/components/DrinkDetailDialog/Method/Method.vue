<template>
  <v-container class="mt-72" style="min-height: 50vh;">
    <div class="xl:flex xl:justify-around">
      <div class="max-w-prose">
        <v-card-title class="font-heading">Description</v-card-title>
        <v-card-text>
          <div class="flex flex-wrap -mb-6">
            <RoundedPill
              v-for="(ingredient, index) in drink.ingredients"
              :key="`ingredient-${index}`"
              :pillText="ingredient.name"
            />
            <RoundedPill
              v-for="(tag, index) in drink.tags"
              :key="`tag-${index}`"
              :pillText="tag.name"
            />
          </div>
        </v-card-text>
        <v-card-text class="font-body">
          <p>{{ drink.description }}</p>
        </v-card-text>
      </div>
      <div class="max-w-prose">
        <v-card-title class="font-heading">Method</v-card-title>
        <v-card-text class="font-body">
          <p>{{ drink.method }}</p>
        </v-card-text>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" src="./Method.ts"></script>
