<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row no-gutters justify="start">
        <v-col class="pl-8 pt-4 sidebar-column" cols="3">
          <div class="d-flex justify-space-between">
            <v-img
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-vault-economy-kiranshastry-solid-kiranshastry.png"
              class="mb-4 flex-grow-0"
              height="64"
              width="64"
              contain
            >
            </v-img>
            <v-btn>add password</v-btn>
          </div>

          <passwordGroup
            :categoryItems="mainCategories"
            @selectedcategoryname="selectedCategoryName"
          >
          </passwordGroup>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import passwordGroup from '@/components/passwordGroup.vue';
import { ICategoryGroup } from '@/types/home.type';

@Component({
  components: { passwordGroup }
})
export default class Home extends Vue {
  mainCategories: ICategoryGroup[] = [
    {
      icon: 'mdi-shield-half-full',
      iconColor: '#263238',
      size: 42,
      title: 'All passwords'
    },
    {
      icon: 'mdi-star',
      iconColor: '#FFC107',
      size: 19,
      title: 'Favourites'
    },
    {
      icon: 'mdi-trash-can',
      iconColor: '#F44336',
      size: 7,
      title: 'Trash'
    }
  ];

  selectedCategoryName(selectedItem: string): void {
    // To Do: load passwords under this category
    console.log(selectedItem);
  }
}
</script>

<style lang="scss" scoped>
.sidebar-column {
  background: #f5f5f5;
}
</style>
