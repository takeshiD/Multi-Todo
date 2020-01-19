import Vue from 'vue';
import Router from 'vue-router';

import ListBoard from './components/ListBoard';
import KanbanBoard from './components/KanbanBoard';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'top',
        component: ListBoard
      },
      {
        path: '/list',
        name: 'list',
        component: ListBoard
      },
      {
        path: '/kanban',
        name: 'kanban',
        component: KanbanBoard
      }
    ]
  })
  