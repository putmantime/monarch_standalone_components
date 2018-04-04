<template>
  <div>
    <div v-for="term in ontSlim" :key="term.id">
      {{ term }}
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      ontSlim: [],
    };
  },
  props: {
    anchorTerm: {
      type: String,
      required: true,
    },
  },
  computed: {
    anchorTermUnderscore() {
      return this.anchorTerm.replace(':', '_').replace('PHENOTYPE', '');
    },
    termPrefix() {
      return (this.anchorTerm.split(':').slice(0)[0]).toLowerCase();
    },
  },
  methods: {
    fetchOntSlim(ontAnchor, ontPrefix) {
      const baseUrl = `https://www.ebi.ac.uk/ols/api/ontologies/${ontPrefix}/terms/`;
      const purl = `http://purl.obolibrary.org/obo/${ontAnchor}`;
      const url = baseUrl + encodeURIComponent(encodeURIComponent(purl));
      const constructedUrl = `${url}/jstree`;
      console.log(constructedUrl);
      axios.get(constructedUrl)
        .then((resp) => {
          console.log(resp.status, resp.data);
          resp.data.forEach((term) => {
            this.ontSlim.push(term);
          });
        })
        .catch((err) => {
          console.log('Error:', err);
        });
    },
  },
  mounted() {
    this.fetchOntSlim(this.anchorTermUnderscore, this.termPrefix);
  },
  watch: {
    anchorTerm() {
      this.fetchOntSlim(this.anchorTermUnderscore, this.termPrefix);
    },
  },
};
</script>
<style scoped>
  .node {
    fill: steelblue;
    stroke: none;
  }

  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 1px;
  }
</style>
