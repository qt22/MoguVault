<template>
  <ValidationProvider
    v-slot="{ errors }"
    :name="textfieldInfo.name"
    :rules="{ ...textfieldInfo.rules }"
    slim
    mode="eager"
  >
    <v-text-field
      v-model="textfieldInfo.model"
      :error-messages="errors"
      :label="textfieldInfo.name"
      :prepend-icon="textfieldInfo.prepend_icon"
    >
    </v-text-field>
  </ValidationProvider>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Register extends Vue {
  @Prop({ required: true }) textfieldInfo: {
    model: string;
    name: string;
    prepend_icon: string;
    rules: Record<string, unknown>;
  };
}
</script>

<style lang="scss" scoped></style>
