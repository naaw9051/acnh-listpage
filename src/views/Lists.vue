<template>
  <div class="lists">
    <HelloWorld msg="Item Wiki"></HelloWorld>
    <b-tabs content-class="mt-3">
      <b-tab title="All Items" active>
        <b-table striped hover :items="allItems"></b-table>
      </b-tab>
      <b-tab title="Fish">
        <b-table striped hover :items="fishes"></b-table>
      </b-tab>
      <b-tab title="Insects">
        <b-table striped hover :items="insects"></b-table>
      </b-tab>
      <b-tab title="Shells">
        <b-table striped hover :items="shells"></b-table>
      </b-tab>
      <b-tab title="Fossils" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Clothing" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Furniture" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Birthdays">
        <b-table striped hover :items="birthdays"></b-table>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Lists',
  components: { HelloWorld },
  data: function () {
    return {
      allItems: null,
      fishes: null,
      insects: null,
      birthdays: null,
      shells: null,
    };
  },
  mounted() {
    axios
      .get(`${this.$backendhostname}/allItemsAsArray`)
      .then((response) => {
        console.log(response.data);

        this.allItems = response.data;
      });

    axios
      .get(`${this.$backendhostname}/allItems`)
      .then((response) => {
        this.fishes = response.data.fishes;
        this.insects = response.data.insects;
        this.birthdays = response.data.birthdays;
        this.shells = response.data.shells;
      });
  },
};
</script>
