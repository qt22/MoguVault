<template>
  <v-list>
    <v-subheader>{{ categoryHeader }}</v-subheader>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class passwordGroup extends Vue {
  @Prop({ required: true }) categoryHeader?: string;
}
</script>

<style lang="scss" scoped></style>
