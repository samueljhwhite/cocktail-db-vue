<template>
  <div class="text-center">
    <v-snackbar v-model="internalValue" >
      {{ displayText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="internalValue = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts" src="./DefaultSnackbar.ts"></script>
