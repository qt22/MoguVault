<template>
  <v-list color="#F5F5F5" rounded subheader>
    <v-subheader v-if="categoryHeader">{{ categoryHeader }}</v-subheader>
    <v-list-item-group v-model="selectedCategory" color="#1976D2" mandatory>
      <v-list-item
        class="d-flex align-center"
        v-for="item in categoryItems"
        :key="item.title"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" :color="item.iconColor"></v-icon>
        </v-list-item-icon>
        <v-list-item-content @click="selectedCategoryName(item.title)">
          <div class="d-flex justify-space-between align-center">
            <span class="text-title">{{ item.title }}</span>
            <span class="text-amount">{{ item.size }}</span>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { ICategoryGroup } from '@/types/home.type';

@Component
export default class passwordGroup extends Vue {
  @Prop({ default: '' }) categoryHeader!: string;
  @Prop({ required: true }) categoryItems!: ICategoryGroup[];

  selectedCategory?: string = '';
  categoryItemCopy = this.categoryItems;

  @Emit('selectedcategoryname')
  selectedCategoryName(selectedItem: string): string {
    return selectedItem;
  }
}
</script>

<style lang="scss" scoped>
.text-title {
  @include apply-font(18px);
}

.text-amount {
  @include apply-font(12px);
}
</style>
