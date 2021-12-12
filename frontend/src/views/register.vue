<template>
  <v-main class="signup-container">
    <v-container fluid class="ma-0">
      <v-row justify="center" align="center">
        <v-col cols="4" md="10" lg="4">
          <v-card elevation="3">
            <ValidationObserver v-slot="{ handleSubmit, invalid }" slim>
              <form @submit.prevent="handleSubmit(onRegister)">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="user name"
                  rules="required|alpha_spaces"
                  slim
                  mode="eager"
                >
                  <v-text-field
                    v-model="user.username"
                    :error-messages="errors"
                    label="Username"
                  >
                  </v-text-field>
                </ValidationProvider>

                <v-btn :disabled="invalid" type="submit">Create Account</v-btn>
              </form>
            </ValidationObserver>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Register extends Vue {
  user = {
    username: ''
  };

  onRegister() {
    console.log('sending user data to backend');
  }
}
</script>

<style lang="scss" scoped>
.signup-container {
  height: 100%;
  background: url('/images/12apostles.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
