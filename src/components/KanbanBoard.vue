<template>
  <div id="kanban-board">
    <h2>Kanban Board</h2>
    <div class="row kanban-body">
      <div id="undone-task-board" class="col-5">
        <h4>作業中</h4>
        <div>
          <b-btn>追加</b-btn>
          <b-btn>削除</b-btn>
        </div>
        <b-card-group deck>
          <draggable
            id="undone-task-list"
            class="task-list"
            group="TASKS"
            draggable=".task"
            handle=".task"
            animation="200"
          >
            <Kanban
              class="task"
              v-for="(task, index) in undoneTasks"
              :key="index"
              :title="task.comment"
            ></Kanban>
          </draggable>
        </b-card-group>
      </div>
      <div id="done-task-board" class="col-5">
        <h4>完了</h4>
        <div>
          <b-btn>追加</b-btn>
          <b-btn>削除</b-btn>
        </div>
        <b-card-group deck>
          <draggable
            id="done-task-list"
            class="task-list"
            group="TASKS"
            draggable=".task"
            animation="200"
          >
            <Kanban
              class="task"
              v-for="(task, index) in doneTasks"
              :key="index"
              :title="task.comment"
            ></Kanban>
          </draggable>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import { todoStorage } from "./js/utils.js";
import Kanban from "./kanban";
import draggable from "vuedraggable";

export default {
  components: {
    Kanban,
    draggable
  },
  data: function() {
    return {
      // tasks: todoStorage().fetch()
      tasks: [
        {comment: "おっぱいなめたい", state: 0},
        {comment: "おっぱいなめたい", state: 0}
      ]
    };
  },
  created() {
    this.tasks = todoStorage.fetch();
  },
  watch: {
    tasks: {
      handler: function(tasks) {
        todoStorage.save(tasks);
      },
      deep: true
    }
  },
  computed: {
    undoneTasks: function() {
      return this.tasks.filter(item => item.state === 0);
    },
    doneTasks: function() {
      return this.tasks.filter(item => item.state === 1);
    }
  }
};
</script>

<style scoped>
#kanban-board {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.kanban-body {
  margin: 1rem;
}
#undone-task-board {
  background-color: aquamarine;
  padding: 10px;
  width: 100%;
  height: 100%;
  max-width: 400px;
  min-width: 60px;
  min-height: 60px;
  margin: 5px;
}

#done-task-board {
  background-color: darkgray;
  padding: 10px;
  width: 100%;
  height: 100%;
  max-width: 400px;
  min-width: 60px;
  min-height: 60px;
  margin: 5px;
}

.task-list {
  width: 100%;
  height: 100%;
  min-height: 150px;
  min-width: 100px;
}
</style>