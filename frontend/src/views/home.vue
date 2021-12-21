<template>
  <v-main class="login__container">
    <v-container fluid class="fill-height justify-center ma-0">
      <v-row justify="start">
        <v-col cols="3">
          <passwordGroup
            categoryHeader="nothing"
            :categoryItems="mainCategories"
          >
          </passwordGroup
        ></v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import passwordGroup from '@/components/passwordGroup.vue';

@Component({
  components: { passwordGroup }
})
export default class Home extends Vue {
  mainCategories = [
    {
      icon: 'mdi-shield-half-full',
      size: 42,
      title: 'All passwords'
    }
  ];
}
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
