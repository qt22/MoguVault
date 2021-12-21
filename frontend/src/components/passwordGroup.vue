<template>
  <v-list>
    <v-subheader>{{ categoryHeader }}</v-subheader>
    <v-list-item-group v-model="selectedCategory" color="primary">
      <v-list-item v-for="item in categoryItems" :key="item.title">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <p>{{ item.title }}</p>
          <p>{{ item.size }}</p>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class passwordGroup extends Vue {
  @Prop({ required: true }) categoryHeader!: string;
  @Prop({ required: true }) categoryItems!: {
    icon: string;
    iconColor?: string;
    size: number;
    title: string;
  }[];

  selectedCategory?: string = '';

  @Emit('selectedcategoryname')
  selectedCategoryName(selectedItem: string) {
    return selectedItem;
  }
}
</script>

<style lang="scss" scoped></style>
