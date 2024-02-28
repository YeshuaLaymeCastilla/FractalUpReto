import { createRouter, createWebHistory } from 'vue-router';
import CountriesList from './components/CountriesList.vue';
import VistaUno from './components/VistaUno.vue';
import VistaDos from './components/VistaDos.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/countries',
      name: 'CountriesList',
      component: CountriesList
    },
    {
      path: '/vista1', 
      name: 'VistaUno',
      component: VistaUno
    },
    {
      path: '/vista2', 
      name: 'VistaDos',
      component: VistaDos
    }
  ]
});

export default router;
