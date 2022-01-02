<template>
  <v-text-field
    class="rounded-sm"
    hide-details
    outlined
    prepend-inner-icon="mdi-magnify"
    single-line
  >
  </v-text-field>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class searchBar extends Vue {}
</script>

<style lang="scss" scoped></style>
