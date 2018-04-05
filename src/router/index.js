import Vue from 'vue';
import Router from 'vue-router';
import Node from '@/components/Node';
import AnalyzePhenotypes from '@/components/AnalyzePhenotypes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Node',
      component: Node,
    },
    {
      path: '/analyze/phenotypes',
      name: 'AnalyzePhenotypes',
      component: AnalyzePhenotypes,
    },
  ],
});
