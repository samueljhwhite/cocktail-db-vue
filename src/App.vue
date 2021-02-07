<template>
  <v-app>
    <NavigationTop />
    <DefaultSnackbar
      v-if="isDisplayingSnackbar"
      :display="isDisplayingSnackbar"
      :displayText="snackbarDisplayText"
    />
    <router-view />
  </v-app>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" rel="stylesheet" href="./App.scss"></style>
