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
                  :name="form.username.name"
                  :rules="{ ...form.username.rules }"
                  slim
                  mode="eager"
                >
                  <v-text-field
                    v-model="user.username"
                    :error-messages="errors"
                    :label="form.username.name"
                    :prepend-icon="form.username.icon"
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  :name="form.email.name"
                  :rules="{ ...form.email.rules }"
                  slim
                  mode="eager"
                >
                  <v-text-field
                    v-model="user.email"
                    :error-messages="errors"
                    :label="form.email.name"
                    :prepend-icon="form.email.icon"
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  vid="password"
                  :name="form.password.name"
                  :rules="{ ...form.password.rules }"
                  slim
                  mode="eager"
                >
                  <v-text-field
                    v-model="user.password"
                    :error-messages="errors"
                    :label="form.password.name"
                    :prepend-icon="form.password.icon"
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  :name="form.confirmPassword.name"
                  :rules="{ ...form.confirmPassword.rules }"
                  slim
                  mode="eager"
                >
                  <v-text-field
                    :error-messages="errors"
                    :label="form.confirmPassword.name"
                    :prepend-icon="form.confirmPassword.icon"
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
  user: Record<string, string> = {
    username: '',
    email: '',
    password: ''
  };

  form: Record<string, Record<string, unknown>> = {
    username: {
      name: 'username',
      icon: 'mdi-account',
      rules: {
        required: true,
        alpha_dash: true
      }
    },
    email: {
      name: 'email',
      icon: 'mdi-email',
      rules: {
        required: true,
        email: true
      }
    },
    password: {
      name: 'password',
      icon: 'mdi-lock',
      rules: {
        required: true,
        min: 8,
        max: 32
      }
    },
    confirmPassword: {
      name: 'confirmPassword',
      icon: 'mdi-lock', // To Do: change icon to lock alert in error state
      rules: {
        // required: true,
        confirmed: 'password'
      }
    }
  };

  onRegister() {
    console.log('sending user data to backend with data: ');
    console.log(this.user);
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
