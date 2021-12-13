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
                  name="Username"
                  rules="required|alpha_spaces"
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

                <Textfield :textfieldInfo="textfieldForm" />

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
import Textfield from '../components/Textfield.vue';

@Component({
  components: {
    Textfield
  }
})
export default class Register extends Vue {
  user = {
    username: '',
    email: '',
    password: ''
  };

  textfieldForm = {
    model: this.user.email,
    name: 'email email',
    prepend_icon: 'mdi-email',
    rules: {
      required: true,
      email: true
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
