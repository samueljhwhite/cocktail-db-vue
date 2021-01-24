<template>
  <v-app>
    <NavigationTop />
    <!-- <Drinks /> -->
    <router-view />
    <DefaultSnackbar
      v-if="snackbar.display"
      :display="snackbar.display"
      :displayText="snackbar.displayText"
      :timeout="snackbar.timeout"
    />
  </v-app>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" rel="stylesheet" href="./App.scss"></style>
