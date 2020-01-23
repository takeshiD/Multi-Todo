<template>
  <div id="list-board">
      <h2>List View</h2>
      <form class="add-form" v-on:submit.prevent="doAdd">
        コメント
        <input type="text" ref="comment" />
        <button class="btn btn-outline-primary" type="submit">追加</button>
      </form>
      <label v-for="label in options" v-bind:key="label.value">
        <input type="radio" v-model="current" v-bind:value="label.value" />
        {{label.label}}
      </label>
      <p>{{computedTodos.length}} 件が該当しています</p>
      <table border="1">
        <thead>
          <tr>
            <th class="id">ID</th>
            <th class="date">日時</th>
            <th class="comment">コメント</th>
            <th class="state">状態</th>
            <th class="button">-</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in computedTodos" v-bind:key="item.id">
            <th>{{item.id}}</th>
            <td>{{item.date}}</td>
            <td>{{item.comment}}</td>
            <td class="state">
              <button
                class="btn btn-outline-secondary"
                v-on:click="doChangeState(item)"
              >{{ labels[item.state] }}</button>
            </td>
            <td class="button">
              <button
                class="btn btn-outline-danger"
                v-on:click.ctrl="doRemove(item)"
                title="Ctrlを押しながら押してください"
              >削除</button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import { todoStorage, getDatetime } from "./js/utils.js";

export default {
  data: function() {
    return {
      todos: todoStorage.fetch(),
      options: [
        { value: -1, label: "すべて" },
        { value: 0, label: "作業中" },
        { value: 1, label: "完了" }
      ],
      current: -1
    };
  },
  methods: {
    doAdd: function() {
      let comment = this.$refs.comment;
      if (!comment.value.length) {
        return;
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0,
        date: getDatetime()
      });
      comment.value = "";
    },
    doChangeState: function(item) {
      item.state = item.state ? 0 : 1;
    },
    doRemove: function(item) {
      let index = this.todos.indexOf(item);
      this.todos.splice(index, 1);
    }
  },
  watch: {
    todos: {
      handler: function(todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  },
  created() {
    this.todos = todoStorage.fetch();
  },
  computed: {
    computedTodos: function() {
      return this.todos.filter(function(el) {
        return this.current < 0 ? true : this.current === el.state;
      }, this);
    },
    labels: function() {
      return this.options.reduce(function(a, b) {
        return Object.assign(a, { [b.value]: b.label });
      }, {});
    }
  }
};
</script>

<style>
#list-board {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  width: 90%;
  border: solid 1px #2c3e50;
  margin: 30px;
}
</style>
