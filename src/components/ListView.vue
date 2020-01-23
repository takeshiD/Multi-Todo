<template>
  <div id="list-view">
    <v-card class="mx-auto" max-width="80%" tile>
      <v-list-item-group>
        <draggable animation="200">
          <v-list-item v-for="(task, index) in tasks" :key="index">
            <v-list-item-content>
              <v-list-item-title v-text="task.comment">Single line Item</v-list-item-title>
              <v-list-item-subtitle v-text="task.date">Test</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </draggable>
      </v-list-item-group>
    </v-card>
  </div>
</template>

<script>
// import { todoStorage, getDatetime } from "./js/utils.js";
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      tasks: [
        {
          id: 0,
          date: "2020/1/12 19:51",
          comment: "サンプル2",
          state: 0
        },
        {
          id: 1,
          date: "2020/1/12 19:52",
          comment: "サンプル3",
          state: 0
        }
      ]
    };
  }
};
</script>
