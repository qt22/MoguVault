<template>
  <v-main class="signup-container">
    <v-container fluid class="ma-0">
      <v-row justify="center" align="center">
        <v-col cols="4">
          <v-form class="signup-form" ref="form" v-model="valid">
            <v-text-field placeholder="Email"> </v-text-field>
            <v-text-field placeholder="Password"></v-text-field>
            <v-btn class="ma-0" type="submit" :disabled="invalid">
              submit
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Register extends Vue {}
</script>

<style lang="scss" scoped>
.signup-container {
  height: 100%;
  background: url('/images/spaceship-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
