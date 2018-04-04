import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AnalyzePhenotypes from '@/components/AnalyzePhenotypes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },{
      path: '/analyze/phenotypes',
      name: 'AnalyzePhenotypes',
      component: AnalyzePhenotypes,
    },
  ],
});
