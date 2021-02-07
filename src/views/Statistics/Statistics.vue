<template>
  <div v-if="!isLoading" class="flex flex-wrap justify-center mb-8">
    Statistics

    <span v-html="drinks[0].method" ></span>
  </div>
</template>

<script lang="ts" src="./Statistics.ts"></script>
