<template>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <div class="mt-2 border-bottom"><h2>{{nodeType}}</h2></div>
            <div class="border"><h2>Neighbors</h2></div>
            <h3>Associations</h3>
            <div class="p-2">
              <h3>Association Filters</h3>
              <assoc-facets :facet-object="facetObject.species"></assoc-facets>
            </div>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">{{nodeID}}</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
              <assoc-table
                :identifier="nodeID"
                :cardType="cardType"
                :nodeType="nodeType"
                :facets="facetObject">
              </assoc-table>
            </div>
            <div class="col-2"></div>
          </div>
          <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
            </div>
            <div class="col-2"></div>
          </div>
        </main>
        <div>
        </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'HelloWorld',
  mounted() {
  },
  data() {
    return {
      nodeID: 'MONDO:0007947',
      cardType: 'phenotype',
      nodeType: 'disease',
      facetObject: {
        species: {
          human: true,
          zebrafish: true,
          chimpanzee: true,
          mouse: true,
          opposum: true,
          horse: true,
          rat: true,
          macaque: true,
          chicken: true,
          cow: true,
          anole: true,
          frog: true,
          boar: true,
          fly: true,
          arabidopsis: true,
          platypus: true,
          worm: true,
          yeast: true,
        },
        evidence: {
          IEA: true,
        },
        systems: {
          'Skeletal system': true,
          Limbs: true,
          'Nervous system': true,
          'Head or neck': true,
          'Metabolism/homeostasis': true,
          'Cardiovascular system': true,
          Integument: true,
          'Genitourinary system': true,
          Eye: true,
          Musculature: true,
          Neoplasm: true,
          'Digestive system': true,
          'Immune System': true,
          'Blood and blood-forming tissues': true,
          Endocrine: true,
          'Respiratory system': true,
          Ea: true,
          'Connective tissue': true,
          'Prenatal development or birth': true,
          Growth: true,
          Constitutiona: true,
          'Thoracic cavity': true,
          Breast: true,
          Voice: true,
          Cellular: true,
        },
      },
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    font-size: .875rem;
  }

  .feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
  }

  /*
   * Sidebar
   */

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }

  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 48px; /* Height of navbar */
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
  }

  .sidebar .nav-link.active {
    color: #007bff;
  }

  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }

  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }

  /*
   * Navbar
   */

  .navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  }

  .navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }

  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
  }

  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
  }

  /*
   * Utilities
   */

  .border-top { border-top: 1px solid #e5e5e5; }
  .border-bottom { border-bottom: 1px solid #e5e5e5; }


</style>
