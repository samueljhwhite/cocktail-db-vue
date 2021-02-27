<template>
  <div class="p-4 bg-theme-black-dark text-theme-white flex justify-center w-full">
    <div class="flex items-center justify-between" style="max-width: 1800px;">
      <div>
        <h1 class="text-2xl font-heading font-black uppercase">Cocktail <span class="text-theme-blue-cta tracking-widest">DB</span></h1>
      </div>
        <div>
          <!-- Need hamburger for mobile -->
          <button class="px-4 py-2 border border-solid border-theme-blue-cta font-heading uppercase text-white mr-4 text-xs">Log In</button>
          <SignUpButton />
        </div>
    </div>
  </div>
</template>

<script lang="ts" src="./NavigationTop.ts"></script>
