<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters justify="start">
      <v-col class="pl-8 pt-4" cols="3">
        <passwordGroup
          :categoryItems="mainCategories"
          @selectedcategoryname="selectedCategoryName"
        >
        </passwordGroup
      ></v-col>
    </v-row>
  </v-container>
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
    },
    {
      icon: 'mdi-star',
      size: 19,
      title: 'Favourites'
    },
    {
      icon: 'mdi-trash-can',
      size: 7,
      title: 'Trash'
    }
  ];

  selectedCategoryName(selectedItem: string): void {
    console.log(selectedItem);
  }
}
</script>

<style lang="scss" scoped></style>
