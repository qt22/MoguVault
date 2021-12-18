<template>
  <v-main class="login__container">
    <v-container fluid class="fill-height justify-center ma-0">
      <v-row justify="center">
        <v-col cols="4">
          <v-card
            class="col-12 py-6 px-10"
            color="lime lighten-5"
            elevation="8"
          >
            <div class="login__form-title">Welcome to Mogu Vault</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.login__container {
  height: 100%;
  background: url('/images/nasa-earth.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.login__form-title {
  @include flex-row-justify-align();
  @include apply-font(24px, $font-source-sans-pro, normal, bold);
  margin-bottom: 20px;
}
</style>
