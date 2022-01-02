<template>
  <v-container fluid class="pa-0 fill-height">
    <v-row no-gutters class="fill-height" justify="start">
      <v-col class="pl-8 pt-4 sidebar-column" cols="3">
        <v-img
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-vault-economy-kiranshastry-solid-kiranshastry.png"
          class="mt-4 mb-8 ml-6 flex-grow-0"
          height="48"
          width="48"
          contain
        >
        </v-img>

        <password-group
          :categoryItems="mainCategories"
          @selectedcategoryname="selectedCategoryName"
        >
        </password-group>

        <div class="my-4"></div>

        <password-group categoryHeader="Types" :categoryItems="typeCategories">
        </password-group>

        <div class="my-4"></div>

        <password-group
          categoryHeader="Folders"
          :categoryItems="folderCategories"
        >
        </password-group>
      </v-col>
      <v-col cols="4"><search-bar /></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import passwordGroup from '@/components/passwordGroup.vue';
import searchBar from '@/components/searchBar.vue';
import { ICategoryGroup } from '@/types/home.type';

@Component({
  components: { passwordGroup, searchBar }
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

  typeCategories: ICategoryGroup[] = [
    {
      icon: 'mdi-login-variant',
      size: 0,
      title: 'Login'
    },
    {
      icon: 'mdi-credit-card',
      size: 0,
      title: 'Card'
    },
    {
      icon: 'mdi-account-box',
      size: 0,
      title: 'Identity'
    },
    {
      icon: 'mdi-note',
      size: 0,
      title: 'Secured Note'
    }
  ];

  folderCategories: ICategoryGroup[] = [
    {
      icon: 'mdi-folder',
      size: 0,
      title: 'Work'
    },
    {
      icon: 'mdi-folder',
      size: 0,
      title: 'School'
    },
    {
      icon: 'mdi-folder',
      size: 0,
      title: 'Personal'
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
