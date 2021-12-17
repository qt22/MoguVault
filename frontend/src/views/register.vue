<template>
  <v-main class="register__container">
    <v-container fluid class="fill-height justify-center ma-0">
      <v-row justify="center">
        <v-col cols="4">
          <v-card
            class="col-12 py-6 px-10"
            color="lime lighten-5"
            elevation="8"
          >
            <div class="register__form-title">Sign Up</div>
            <ValidationObserver v-slot="{ handleSubmit, invalid }" slim>
              <form @submit.prevent="handleSubmit(onRegister)">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Username"
                  rules="required|alpha_dash"
                  slim
                  mode="eager"
                >
                  <v-text-field
                    v-model="user.username"
                    :error-messages="errors"
                    label="Username"
                    prepend-icon="mdi-account"
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="Email"
                  rules="required|email"
                  slim
                  mode="eager"
                >
                  <v-text-field
                    v-model="user.email"
                    :error-messages="errors"
                    label="Email"
                    prepend-icon="mdi-email"
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  vid="password"
                  name="Password"
                  rules="required|min:8|max:32"
                  slim
                  mode="eager"
                >
                  <v-text-field
                    v-model="user.password"
                    :error-messages="errors"
                    hint="Password must be 8-32 characters (inclusive)"
                    label="Password"
                    prepend-icon="mdi-lock"
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="Confirm password"
                  rules="required|confirmed:password"
                  slim
                  mode="eager"
                >
                  <v-text-field
                    v-model="user.confirmPassoword"
                    :error-messages="errors"
                    label="Confirm password"
                    prepend-icon="mdi-lock"
                  >
                  </v-text-field>
                </ValidationProvider>

                <v-btn
                  class="mt-5 mb-1"
                  color="primary"
                  :disabled="invalid"
                  depressed
                  raised
                  type="submit"
                  width="100%"
                  x-large
                >
                  Create Account
                </v-btn>
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
  user: Record<string, string> = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onRegister() {
    console.log('sending user data to backend with data: ');
    console.log(this.user);
  }
}
</script>

<style lang="scss" scoped>
.register__container {
  height: 100%;
  background: url('/images/nasa-earth.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.register__form-title {
  @include flex-row-justify-align();
  @include apply-font(24px, $font-source-sans-pro, normal, bold);
  margin-bottom: 12px;
}
</style>
