<template>
  <v-list>
    <v-subheader v-if="categoryHeader">{{ categoryHeader }}</v-subheader>
    <v-list-item-group v-model="selectedCategory" color="primary">
      <v-list-item
        class="d-flex align-center"
        v-for="item in categoryItems"
        :key="item.title"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content @click="selectedCategoryName(item.title)">
          <div class="d-flex justify-space-between">
            <span>{{ item.title }}</span>
            <span>{{ item.size }}</span>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class passwordGroup extends Vue {
  @Prop({ default: '' }) categoryHeader!: string;
  @Prop({ required: true }) categoryItems!: {
    icon: string;
    iconColor?: string;
    size: number;
    title: string;
  }[];

  selectedCategory?: string = '';

  @Emit('selectedcategoryname')
  selectedCategoryName(selectedItem: string): string {
    return selectedItem;
  }
}
</script>

<style lang="scss" scoped>
.text-desc {
  // @include apply-font(18px);
}
</style>
