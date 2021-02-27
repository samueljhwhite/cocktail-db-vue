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
          color="#333"
          dark
          prominent
          shrink-on-scroll
          src="https://images.unsplash.com/photo-1536935338788-846bb9981813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80"
          fade-img-on-scroll
          scroll-target="#dialog-content"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
            ></v-img>
          </template>

          <v-app-bar-nav-icon @click="closeDialog()">
            <v-icon>mdi-close</v-icon>
          </v-app-bar-nav-icon>

          <v-card-title class="font-heading -mt-2"
            ><h1>{{ drink.name }}</h1></v-card-title
          >

          <v-spacer></v-spacer>

          <v-btn icon>
            <AddToShoppingList :ingredients="drink.ingredients" />
          </v-btn>
          <v-btn icon>
            <AddToFavourites :id="drink.id" :name="drink.name" />
          </v-btn>

          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tab v-for="tab in tabItems" :key="tab"> {{ tab }} </v-tab>
            </v-tabs>
          </template>
        </v-app-bar>

        <v-sheet id="dialog-content" class="overflow-y-auto" max-height="85vh">
          <Method v-if="activeTab === 0" :drink="drink" />
          <Variations v-if="activeTab === 1" :drink="drink" />
          <Media v-if="activeTab === 2" :drink="drink" />
        </v-sheet>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" src="./DrinkDetailDialog.ts"></script>
