// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';



// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Relative imports
import App from './App';
import router from './router';

// components
import AssocTable from './components/AssocTable';
import AssocFacets from './components/AssocFacets';
import MonarchAutocomplete from './components/MonarchAutocomplete';
import AnalyzePhenotypes from './components/AnalyzePhenotypes';
import PhenotypeAC from './components/PhenotypeAC';
import TreeView from './components/TreeView';
import LocalNav from './components/LocalNav';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueFormWizard);
Vue.component('assoc-table', AssocTable);
Vue.component('assoc-facets', AssocFacets);
Vue.component('monarch-autocomplete', MonarchAutocomplete);
Vue.component('analyze-phenotypes', AnalyzePhenotypes);
Vue.component('phenotype-ac', PhenotypeAC);
Vue.component('tree-view', TreeView);
Vue.component('local-nav', LocalNav);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
