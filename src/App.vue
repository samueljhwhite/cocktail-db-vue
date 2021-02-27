<template>
  <v-app>
    <div class="bg-gray-100 min-h-screen">
      <NavigationTop />
      <DefaultSnackbar
        v-if="isDisplayingSnackbar"
        :display="isDisplayingSnackbar"
        :displayText="snackbarDisplayText"
      />
      <router-view />
    </div>
    <Footer />
    <DrinkDetailDialog
      v-if="isDisplayingDetailsDialog"
      :display="isDisplayingDetailsDialog"
      :drinkID="detailsDialogID"
    />
    <SignUpDialog v-if="isDisplayingSignUpDialog" :display="isDisplayingSignUpDialog" />
  </v-app>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" rel="stylesheet" href="./App.scss"></style>
