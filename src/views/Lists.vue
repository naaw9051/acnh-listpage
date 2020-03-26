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
      staticData: {
        fishes: [
          {
            name: 'sea butterfly',
            price: '1000',
            description: ''
          },
          {
            name: 'black bass',
            price: '400',
            description: ''
          },
          {
            name: 'tilapia',
            price: '800',
            description: ''
          },
          {
            name: 'sea bass',
            price: '400',
            description: ''
          },
          {
            name: 'puffer fish',
            price: '250',
            description: ''
          },
          {
            name: 'red snapper',
            price: '3000',
            description: ''
          },
          {
            name: 'rainbowfish',
            price: '800',
            description: ''
          },
          {
            name: 'dorado',
            price: '15000',
            description: ''
          },
          {
            name: 'salmon',
            price: '700',
            description: ''
          },
          {
            name: 'bluegill',
            price: '180',
            description: '',
            type: 'Fish'
          },
          {
            name: 'sea horse',
            price: '1100',
            description: '',
            type: 'Fish'
          },
          {
            name: 'suckerfish',
            price: '1500',
            description: '',
            type: 'Fish'
          },
          {
            name: 'zebra turkeyfish',
            price: '500',
            description: '',
            type: 'Fish'
          },
          {
            name: 'football',
            price: '2500',
            description: '',
            type: 'Fish'
          },
          {
            name: 'olive flounder',
            price: '800',
            description: '',
            type: 'Fish'
          },
          {
            name: 'barred knifejaw',
            price: '5000',
            description: '',
            type: 'Fish'
          },
          {
            name: 'dab',
            price: '300',
            description: '',
            type: 'Fish'
          },
          {
            name: 'loach',
            price: '400',
            description: '',
            type: 'Fish'
          },
          {
            name: 'horse mackerel',
            price: '150',
            description: '',
            type: 'Fish'
          },
          {
            name: 'anchovy',
            price: '200',
            description: '',
            type: 'Fish'
          },
          {
            name: 'dace',
            price: '240',
            description: '',
            type: 'Fish'
          },
          {
            name: 'crucian carp',
            price: '160',
            description: '',
            type: 'Fish'
          },
          {
            name: 'angelfish',
            price: '3000',
            description: '',
            type: 'Fish'
          },
          {
            name: 'arapaima',
            price: '10000',
            description: '',
            type: 'Fish'
          },
          {
            name: 'hermit crab',
            price: '1000',
            description: '',
            type: 'Fish'
          },
          {
            name: 'sweetfish',
            price: '900',
            description: '',
            type: 'Fish'
          },
          {
            name: 'soft-shelled turtle',
            price: '3750',
            description: '',
            type: 'Fish'
          },
          {
            name: 'ribbon eel',
            price: '600',
            description: '',
            type: 'Fish'
          },
          {
            name: 'king salmon',
            price: '1800',
            description: '',
            type: 'Fish'
          },
          {
            name: 'clown fish',
            price: '650',
            description: '',
            type: 'Fish'
          },
          {
            name: 'mitten crab',
            price: '2000',
            description: '',
            type: 'Fish'
          },
          {
            name: 'gar',
            price: '6000',
            description: '',
            type: 'Fish'
          },
          {
            name: 'catfish',
            price: '800',
            description: '',
            type: 'Fish'
          }
        ],
        insects: [
          {
            name: 'Ladybug',
            price: '200',
            description: ''
          },
          {
            name: 'Paper Kite Butterfly',
            price: '1000',
            description: 'Flying'
          },
          {
            name: 'Tiger Butterfly',
            price: '240',
            description: ''
          },
          {
            name: 'Common Butterfly',
            price: '160',
            description: 'Above Flowers'
          },
          {
            name: 'Yellow Butterfly',
            price: '160',
            description: 'Flying'
          },
          {
            name: 'Peacock Butterfly',
            price: '2500',
            description: 'Above Purple, Black and Blue Flowers'
          },
          {
            name: 'Common Bluebottle',
            price: '?',
            description: 'Flying'
          },
          {
            name: 'Great Purple Emperor',
            price: '?',
            description: 'Flying'
          },
          {
            name: 'Monarch Butterfly',
            price: '140',
            description: 'Flying'
          },
          {
            name: 'Emporer Butterfly',
            price: '4000',
            description: 'Flying'
          },
          {
            name: 'Agrias Butterfly',
            price: '3000',
            description: 'Flying'
          },
          {
            name: 'Rajah Brooke\'s Birdwing',
            price: '2500',
            description: 'Above Purple, Black and Blue Flowers'
          },
          {
            name: 'Queen Alexandra\'s Birdwing',
            price: '4000',
            description: 'Flying'
          },
          {
            name: 'Moth',
            price: '130',
            description: 'Around Light'
          },
          {
            name: 'Atlas Moth',
            price: '?',
            description: '?'
          },
          {
            name: 'Madagascan Sunset Moth',
            price: '2500',
            description: 'Flying'
          },
          {
            name: 'Long Locust',
            price: '200',
            description: 'In Grass'
          },
          {
            name: 'red dragonfly',
            price: '180',
            description: 'flying',
            type: 'Insects'
          },
          {
            name: 'man-faced stink bug',
            price: '1000',
            description: '',
            type: 'Insects'
          },
          {
            name: 'walking leaf',
            price: '600',
            description: '',
            type: 'Insects'
          },
          {
            name: 'earth-boring dung beetle',
            price: '300',
            description: '',
            type: 'Insects'
          },
          {
            name: 'bagworm',
            price: '600',
            description: '',
            type: 'Insects'
          },
          {
            name: 'wharf roach',
            price: '200',
            description: '',
            type: 'Insects'
          },
          {
            name: 'orchid mantis',
            price: '2400',
            description: '',
            type: 'Insects'
          },
          {
            name: 'scorpion',
            price: '8000',
            description: '',
            type: 'Insects'
          },
          {
            name: 'tarantula',
            price: '8000',
            description: '',
            type: 'Insects'
          }
        ],
        clothing: [],
        fossils: [],
        furniture: [],
        birthdays: [
          {
            name: 'Axel',
            date: '2020-03-23'
          }
        ],
        shells: [
          {
            name: 'sea snail',
            price: '180',
            description: '',
            type: 'Shell'
          },
          {
            name: 'sand dollar',
            price: '120',
            description: '',
            type: 'Shell'
          },
          {
            name: 'coral',
            price: '500',
            description: '',
            type: 'Shell'
          }
        ]
      },
      allItems: null,
      fishes: null,
      insects: null,
      birthdays: null,
      shells: null,
    };
  },
  mounted() {
    // axios
    //   .get(`${this.$backendhostname}/allItemsAsArray`)
    //   .then((response) => {
    //     console.log(response.data);

    //     this.allItems = response.data;
    //   });
    this.allItems = [...this.staticData.fishes, ...this.staticData.shells, ...this.staticData.birthdays, ...this.staticData.furniture, ...this.staticData.fossils, ...this.staticData.clothing, ...this.staticData.insects];

    // axios
    //   .get(`${this.$backendhostname}/allItems`)
    //   .then((response) => {
    //     this.fishes = response.data.fishes;
    //     this.insects = response.data.insects;
    //     this.birthdays = response.data.birthdays;
    //     this.shells = response.data.shells;
    //   });

    this.fishes = this.staticData.fishes;
    this.insects = this.staticData.insects;
    this.birthdays = this.staticData.birthdays;
    this.shells = this.staticData.shells;
  },
};
</script>
