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

          <b-form-group id="description-input-group" label="Item Name:" label-for="description-input">
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
    axios
      .get(`${this.$backendhostname}/allItemsAsArray`)
      .then((response) => {
        this.allItems = response.data;
      });
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
