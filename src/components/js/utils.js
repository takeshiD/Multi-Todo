const STORAGE_KEY = 'todos-vuejs-demo'
export let todoStorage = {
  fetch: function() {
    let todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

/*
-- storage json --
  id      : int
  comment : string
  state   : 0, 1
  date    : string
*/

export const getDatetime = function() {
  let today = new Date();
  return today.getFullYear()+"/"+today.getMonth()+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes()
}