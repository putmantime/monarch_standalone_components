<template>
  <div class="autocomplete" style="position:relative" v-bind:class="{'open':open}">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                v-on:click="catDropDown = !catDropDown">
                Categories
        </button>
        <div v-if="catDropDown" class="dropdown-menu list-group dropCatList px-4">
          <div>
            <b-form-group>
              <b-form-radio-group v-model="selected"
                                  :options="options"
                                  stacked
                                  name="radiosStacked">
              </b-form-radio-group>
            </b-form-group>
          </div>
        </div>
      </div>
      <input v-bind:class="{'loading': loading}"
             class="form-control"
             type="text"
             v-model="value"
             v-on:input="debounceInput"
             @keydown.enter='enter'
             @keydown.down='down'
             @keydown.up='up'
             placeholder="search..."
      >
    </div>
    <div v-if="open"
         class="dropdown-menu list-group dropList px-4">
      <ul v-for="(suggestion, index) in suggestions" :key="index">
        <li @click="suggestionClick(index)"
            v-bind:class="{'active': isActive(index)}"
            v-on:mouseover="mouseOver(index)"
            class="dropList px-4"
            :title="suggestion.definition">
          <div class="row">
            <div class="col-5"><strong>{{ ...suggestion.label }}</strong></div>
            <div class="col-3"><i>{{suggestion.taxon_label}}</i></div>
            <div class="col-1">
              <small>{{...suggestion.category | allLower}}</small>
            </div>
            <div class="col-3">
              <small>{{ suggestion.id }}</small>
            </div>
          </div>
        </li>
      </ul>
      <div class="row">
        <div v-if="suggestions.length > 0"
             class="btn btn-outline-secondary col-10 m-2"
             v-on:click="showMore"
        >
          Show more results for '{{value}}'
        </div>
        <div v-if="suggestions.length === 0" class="btn col-10 m-2">
          No results for '{{value}}'
        </div>
        <div  class="btn btn-outline-info col m-2" @click="clearSearch">Clear Search</div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import axios from 'axios';

const debounce = require('lodash/debounce');

export default {
  name: 'AutoComplete',
  data() {
    return {
      selected: 'all',
      options: [
        { text: 'Phenotype', value: 'Phenotype' },
        { text: 'Gene', value: 'gene' },
        { text: 'Disease', value: 'disease' },
        { text: 'Variant', value: 'variant' },
        { text: 'Model', value: 'model' },
        { text: 'All', value: 'all' },

      ],
      catDropDown: false,
      value: '',
      suggestions: [],
      open: false,
      current: 0,
      loading: false,
    };
  },
  filters: {
    allLower(word) {
      return word.toLowerCase();
    },
  },
  methods: {
    debounceInput: debounce(
      // eslint-disable-next-line
      function () {
        if (this.value) {
          this.loading = true;
          const solrUrl = 'https://solr.monarchinitiative.org/solr/search/select/';
          const params = {
            q: this.value,
            wt: 'json',
            rows: '10',
            defType: 'edismax',
            qf: 'synonym_eng',
            fl: 'label,id,category,definition,taxon,taxon_label',
          };
          if (this.selected !== 'all') {
            params.fq = `category:${this.selected}`;
          }
          axios.get(solrUrl, { params })
            .then((resp) => {
              this.suggestions = resp.data.response.docs;
              this.open = true;
              this.loading = false;
            })
            .catch((err) => {
              // eslint-disable-next-line
              console.log(err);
            });
        } else {
          this.suggestions = [];
        }
      }, 500, { leading: false, trailing: true }),
    enter() {
      this.value = '';
      this.$emit('value', { value: this.suggestions[this.current] });
      this.open = false;
      this.suggestions = [];
    },
    // When up pressed while suggestions are open
    up() {
      if (this.current > 0) {
        this.current -= 1;
      }
    },
    // When down pressed while suggestions are open
    down() {
      if (this.current < this.suggestions.length - 1) {
        this.current += 1;
      }
    },
    // For highlighting element
    isActive(index) {
      return index === this.current;
    },
    mouseOver(index) {
      this.current = index;
    },
    // When one of the suggestion is clicked
    suggestionClick(index) {
      this.value = '';
      this.open = false;
      this.$emit('value', { value: this.suggestions[index] });
      this.suggestions = [];
    },
    showMore() {
      window.location = `/search/${this.value}`;
    },
    clearSearch() {
      this.suggestions = [];
      this.value = '';
    },
  },
  watch: {
    // eslint-disable-next-line
    value: function () {
      if (!this.value) {
        this.open = false;
      }
    },
  },
};
</script>

<style scoped>
  html, body {
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    height: 100%;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
  input {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .autocomplete-input {
    position: relative;
    height: 300px;
  }
  .loading {
    background-color: #ffffff;
    background-image: url("../assets/images/infinity.gif");
    background-size: 25px 25px;
    background-position: 99%;
    background-repeat: no-repeat;
  }
  .dropList{
    width:100%;
    border-radius: 2px;
    padding-left: 2px;
    padding-right: 2px;
  }
  .dropCatList{
    border-radius: 2px;
    padding-left: 2px;
    padding-right: 2px;
  }
  li:hover {
    background-color: cornflowerblue;
    color: white;
  }
  .active{
    background-color: cornflowerblue;
    color: white;
  }
</style>
