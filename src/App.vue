<template>
  <v-app>
    <!-- Navigator -->
    <v-app-bar 
      app
      dark
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Multi View Todo App</v-toolbar-title>
    </v-app-bar>

    <!-- Side Bar -->
    <v-navigation-drawer 
      v-model="drawer"
      app
      mobile-break-point="sm"
      width="200"
      >
      <v-list nav>
          <v-list-item @click="routing('/')">
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                HOME
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item  @click="routing('/list')">
            <v-list-item-action>
              <v-icon>dns</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                List View
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item  @click="routing('/kanban')">
            <v-list-item-action>
              <v-icon>dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Kanban View
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Content -->
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import router from './router';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },
  data: () => ({
    drawer: true
  }),
  methods: {
    routing(path) {
      router.push({path: path})
    }
  }
};
</script>