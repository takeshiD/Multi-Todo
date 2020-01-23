import Vue from 'vue';
import Router from 'vue-router';

// import ListBoard from './components/ListBoard';
import ListView from './components/ListView';
import KanbanBoard from './components/KanbanBoard';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'top',
        component: ListView
      },
      {
        path: '/list',
        name: 'list',
        component: ListView
      },
      {
        path: '/kanban',
        name: 'kanban',
        component: KanbanBoard
      }
    ]
  })
  