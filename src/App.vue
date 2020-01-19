<template>
  <v-app>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">Multi View Todo App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-navigation-drawer v-model="drawer" absolute left>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/" class="title">Top</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/list" class="title">List View</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/kanban" class="title">Kanban View</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    // HelloWorld,
  },
  data: () => ({
    drawer: false
  })
};
</script>
