<template>
  <v-main class="register-page-container">
    <v-container fluid class="fill-height justify-center ma-0">
      <v-card class="register-card" color="lime lighten-5" elevation="8">
        <ValidationObserver v-slot="{ handleSubmit, invalid }" slim>
          <form
            class="register-form"
            @submit.prevent="handleSubmit(onRegister)"
          >
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
                label="Re-type password"
                prepend-icon="mdi-lock"
              >
              </v-text-field>
            </ValidationProvider>

            <v-btn :disabled="invalid" type="submit">Create Account</v-btn>
          </form>
        </ValidationObserver>
      </v-card>
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
.register-card {
  border-radius: 16px !important;
  padding: 40px 24px 40px 24px;
}

.register-page-container {
  height: 100%;
  background: url('/images/nasa-earth.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.register-form {
  width: 584px;
}
</style>
