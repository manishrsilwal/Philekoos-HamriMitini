import IndexPage from '../components/IndexPage.vue';
import Food from '../components/Food.vue';
import Doctor from '../components/Doctor.vue';
import Education from '../components/Education.vue';
import Article from '../components/ArticlePage.vue';


export default[
  {path: '/', name: 'index', component: IndexPage},
  {path: '/food', name: 'food', component: Food},
  {path: '/doctor', name: 'doctor', component: Doctor},
  {path: '/education', name: 'education', component: Education},
  {path: '/story/:id', name: 'story', component: Article},
]
