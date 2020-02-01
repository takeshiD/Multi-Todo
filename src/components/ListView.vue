<template>
  <v-container id="list-view" fluid>
  <v-row justify="center" align="stretch" align-content="center">
    <v-col cols="10">
      <v-text-field 
        class="pa-2"
        label="タスク内容"
        v-model="new_comment"
        @keyup.enter="appendTask">
      </v-text-field>
    </v-col>
    <v-col cols="2">
      <v-btn color="primary" @click="appendTask">追加</v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
    <v-card>
      <v-list>
      <v-list-item-group>
        <draggable animation="200">
          <transition-group name="task-list">
          <v-list-item v-for="(task, index) in tasks" :key="index" selectable two-line>
            <v-list-item-content>
              <v-text-field
                :value="task.comment"
                dense
                single-line>
              </v-text-field>
              <!-- <v-list-item-title v-text="task.comment"></v-list-item-title> -->
              <v-list-item-subtitle v-text="task.date"></v-list-item-subtitle>
              <v-list-item-subtitle v-text="'ID: '+ task.id"></v-list-item-subtitle>
            </v-list-item-content>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
              <v-list-item-action 
                @click="deleteTask(task)" 
                v-on="on">
                <v-icon color="red" dark>delete_outline</v-icon>
              </v-list-item-action>
              </template>
              <span>Delete</span>
            </v-tooltip>
          </v-list-item>
          </transition-group>
        </draggable>
      </v-list-item-group>
      </v-list>
    </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import { todoStorage, getDatetime } from "./js/utils.js";
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      new_comment: '',
      tasks: todoStorage.fetch(),
      newtaskRules: [
        v => v.length>0 || 'Task Commnet is Required'
      ]
    };
  },
  methods: {
    appendTask: function() {
      if(this.new_comment==''){
        return
      }
      this.tasks.push({
        id: new Date().getTime(),
        date: getDatetime(),
        comment: this.new_comment,
        state: 0
      })
      this.new_comment = '';
      todoStorage.save(this.tasks);
    },
    deleteTask: function(task) {
      this.tasks = this.tasks.filter(item => item.id!==task.id);
      todoStorage.save(this.tasks);
    },
  }
};
</script>

<style scoped>
.task-list-enter-active {
  transition: all .3s;
}
.task-list-enter {
  transform: translateX(50px);
  opacity: 0;
}
.task-list-enter-to {
  opacity: 1;
}
.task-list-move {
  transition: transform .5s;
}
</style>