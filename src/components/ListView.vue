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
      <v-list-item-group>
        <draggable animation="200">
          <v-list-item v-for="(task, index) in tasks" :key="index">
            <v-list-item-content>
              <v-list-item-title v-text="task.comment"></v-list-item-title>
              <v-list-item-subtitle v-text="task.date"></v-list-item-subtitle>
              <v-list-item-subtitle v-text="'ID: '+ task.id"></v-list-item-subtitle>
            </v-list-item-content>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
              <v-list-item-action 
                @click="deleteTask(task.id)" 
                v-on="on">
                <v-icon color="red" dark>delete_outline</v-icon>
              </v-list-item-action>
              </template>
              <span>Delete</span>
            </v-tooltip>
          </v-list-item>
        </draggable>
      </v-list-item-group>
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
      this.tasks.unshift({
        id: new Date().getTime(),
        date: getDatetime(),
        comment: this.new_comment,
        state: 0
      })
      this.new_comment = '';
      todoStorage.save(this.tasks);
    },
    deleteTask: function(id) {
      this.tasks = this.tasks.filter(item => item.id!==id);
      todoStorage.save(this.tasks);
    }
  }
};
</script>
