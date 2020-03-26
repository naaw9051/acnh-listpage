<template>
  <div class="home">
    <HelloWorld msg="Add New Item"></HelloWorld>
    <b-tabs content-class="mt-3">
      <b-tab title="Items" active>
        <b-form @submit="submitItem" @reset="resetItem" noinvalidate>
          <b-form-group id="name-input-group" label="Item Name:" label-for="name-input">
            <b-form-input
              id="input-1"
              v-model="formItem.name"
              required
              placeholder="Enter Name"
            ></b-form-input>
            <p v-if="checkItem(formItem.name)">Einen Eintrag mit dem Namen gibt es schon.</p>
          </b-form-group>

          <b-form-group id="price-input-group" label="Sell Price:" label-for="price-input">
            <b-form-input
              id="price-input"
              v-model="formItem.price"
              required
              placeholder="Enter Sell Price"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="description-input-group" label="Description (optional):" label-for="description-input">
            <b-form-input
              id="description-input"
              v-model="formItem.description"
              placeholder="Enter Description"
            ></b-form-input>
          </b-form-group>

           <b-form-group label="Item Type:">
            <b-form-radio-group
              id="radio-group-1"
              v-model="formItem.type"
              :options="typeOptions"
              name="type-options"
              required
            ></b-form-radio-group>
          </b-form-group>

          <b-button type="submit" variant="primary" :disabled="checkItem(formItem.name)">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-tab>
      <b-tab title="Birthdays">
        <b-form @submit="submitBday" @reset="resetBday">
          <b-form-group id="name-input-group" label="Animal Name:" label-for="name-input">
            <b-form-input
              id="input-1"
              v-model="formBday.name"
              required
              placeholder="Enter Name"
            ></b-form-input>
            <p v-if="checkItem(formBday.name)">Einen Eintrag mit dem Namen gibt es schon.</p>
          </b-form-group>

          <b-form-group id="price-input-group" label="Choose a date:" label-for="bday-input">
            <b-form-datepicker id="datepicker-sm" class="bday-input" v-model="formBday.date" calendar-width="300px" required></b-form-datepicker>
          </b-form-group>

          <b-button type="submit" variant="primary" :disabled="checkItem(formBday.name)">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-tab>
      <b-tab title="Turnips">
        <p>Coming Soon.🤪</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
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
      allItems: [],
      typeOptions: ['Fish', 'Insects', 'Fossil', 'Clothing', 'Shell'],
      formItem: {
        name: '',
        price: '',
        description: '',
        type: '',
      },
      formBday: {
        name: '',
        date: null,
      },
    };
  },
  mounted() {
    // axios
    //   .get(`${this.$backendhostname}/allItemsAsArray`)
    //   .then((response) => {
    //     this.allItems = response.data;
    //   });
    let databaseData = [];
    Object.getOwnPropertyNames(this.staticData).forEach(key => {
      let value = data[key];
      databaseData.push(...value);
    });
    this.allItems = databaseData;
  },
  methods: {
    submitItem() {
      // this.allItems.
      switch (this.formItem.type) {
        case 'Fish':
          axios
            .post(`${this.$backendhostname}/fishes`, this.formItem)
            .then((response) => {
              console.log(response);
            });
          break;
        case 'Insects':
          axios
            .post(`${this.$backendhostname}/insects`, this.formItem)
            .then((response) => {
              console.log(response);
            });
          break;
        case 'Fossil':
          axios
            .post(`${this.$backendhostname}/fossils`, this.formItem)
            .then((response) => {
              console.log(response);
            });
          break;
        case 'Clothing':
          axios
            .post(`${this.$backendhostname}/clothing`, this.formItem)
            .then((response) => {
              console.log(response);
            });
          break;
        case 'Shell':
          axios
            .post(`${this.$backendhostname}/shells`, this.formItem)
            .then((response) => {
              console.log(response);
            });
          break;
        default:
          console.log('Could not save Item');
      }
    },
    resetItem() {
      this.formItem = {
        name: '',
        price: '',
        description: '',
        type: '',
      };
    },
    submitBday() {
      axios
        .post(`${this.$backendhostname}/birthdays`, this.formBday)
        .then((response) => {
          console.log(response);
        });
    },
    resetBday() {
      this.formBday = {
        name: '',
        date: null,
      };
    },
    checkItem(itemName) {
      let isInDatabase = false;
      this.allItems.forEach((item) => {
        if (item.name === itemName) {
          isInDatabase = true;
        }
      });
      return isInDatabase;
    },
  },
};
</script>
