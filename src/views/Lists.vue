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
import ListData from '../database/acnh-data.json';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Lists',
  components: { HelloWorld },
  created() {
    this.allItems = [...ListData.fish, ...ListData.insects, ...ListData.birthdays];
    this.fishes = this.allItems.fish;
    this.insects = this.allItems.insects;
    this.birthdays = this.allItems.birthdays;
  },
  data: function () {
    return {
      allItems: null,
      fishes: null,
      insects: null,
      birthdays: null,
    };
  },
};
</script>
