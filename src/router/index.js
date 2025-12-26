import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/components/Authentication/LoginView.vue'
import ArticleListView from '@/views/article/ArticleListView.vue'
import ArticleCreateView from '@/views/article/ArticleCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
          meta:{
            title: 'Dashboard'
          }
        },
        {
          path: 'article',
          name: 'article',
          meta:{
            title: 'Article'
          },
          children:[
            {
              path: '',
              name: 'article.index',
              component: ArticleListView,
              meta:{
                title: 'Article List'
              }
            },
            {
              path: 'create',
              name: 'article.create',
              component: ArticleCreateView,
              meta:{
                title: 'Create Article'
              }
            }
          ]
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        title: 'Login'
      }
    }
  ],
})

router.beforeEach((to, from) => {
  //document.title -> it is a conventional way to set the title of the webpage
  document.title = to.meta.title ? to.meta.title + ' - My Blog' : 'My Blog';
  return true;
});

export default router;
