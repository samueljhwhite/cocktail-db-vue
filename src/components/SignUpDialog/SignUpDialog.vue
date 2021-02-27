<template>
  <v-row justify="center">
    <v-dialog v-model="display" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="font-heading">Sign Up</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field type="email" label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="flex items-center"><v-checkbox required></v-checkbox> Something something, over 18.*</div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="font-body" text @click="closeDialog()">
            Cancel
          </v-btn>
          <button class="ml-8 px-4 py-2 bg-theme-blue-cta font-heading tracking-wide text-white uppercase text-xs" @click="closeDialog()">
            Submit
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" src="./SignUpDialog.ts"></script>

<style>
.v-input {
  font-family: "Hind", "system-ui";
}
.v-list {
  font-family: "Hind", "system-ui";
}
</style>
