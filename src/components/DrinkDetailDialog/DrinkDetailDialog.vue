<template>
  <v-row>
    <v-dialog
      v-if="!isLoading"
      v-model="display"
      transition="dialog-right-transition"
      persistent
      class="flex justify-center"
    >
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="#292929"
          dark
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#dialog-content"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon @click="closeDialog()">
            <v-icon>mdi-close</v-icon>
          </v-app-bar-nav-icon>

          <v-card-title class="font-heading mt-8">{{
            drink.name
          }}</v-card-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <AddToShoppingList :ingredients="drink.ingredients" />
          </v-btn>
          <v-btn icon>
            <AddToFavourites :id="drink.id" :name="drink.name" />
          </v-btn>

          <template v-slot:extension>
            <v-tabs align-with-title>
              <v-tab>Method</v-tab>
              <v-tab>Variations</v-tab>
              <v-tab>Media</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>

        <v-sheet id="dialog-content" class="overflow-y-auto" max-height="90vh">
          <v-container class="mt-72" style="min-height: 50vh;">
            <div class="xl:flex xl:justify-around">
              <div class="max-w-prose">
                <v-card-title class="font-heading">Description</v-card-title>
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
        </v-sheet>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts" src="./DrinkDetailDialog.ts"></script>
