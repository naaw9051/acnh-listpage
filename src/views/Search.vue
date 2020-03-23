<template>
  <div class="search">
    <HelloWorld msg="Item-Suche"></HelloWorld>
    <div>
      <input type="text" class="form-control" placeholder="Gib einen Itemnamen ein..." v-model="searchInput" v-on:keyup="search" />
      <h1 v-if="results.length === 0 && searchInput != null">Kein Eintrag gefunden. 😢</h1>
      <b-table v-else striped hover :items="results"></b-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Search',
  components: { HelloWorld },
  mounted() {
    axios
      .get(`${this.$backendhostname}/allItemsAsArray`)
      .then((response) => {
        this.allItems = response.data;
      });
  },
  data: function () {
    return {
      allItems: null,
      results: [],
      searchInput: null,
      showResults: false,
    };
  },
  methods: {
    search() {
      if (this.searchInput.length > 1) {
        this.results = [];
        const regex = new RegExp(this.searchInput, 'gi');
        this.allItems.forEach((item) => {
          if (item.name.match(regex)) {
            this.results.push(item);
          }
        });
        console.log(this.results);
      }
    },
  },
};
</script>
