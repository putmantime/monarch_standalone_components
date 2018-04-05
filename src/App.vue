<template>
  <div id="app">
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0"
         href="#">
        <strong>Monarch Initiative</strong>
      </a>
      <div class="w-100 mt-2">
        <monarch-autocomplete
          v-on:value="handleSuggestion"
        ></monarch-autocomplete>
      </div>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleSuggestion(payload) {
      console.log(payload);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
