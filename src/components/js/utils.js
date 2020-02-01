const STORAGE_KEY = 'todos-vuejs-demo'
export let todoStorage = {
  fetch: function() {
    let todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
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
  state   : 0, 1, -1
  date    : string
*/

export const getDatetime = function() {
  let today = new Date();
  let format = 'YYYY/MM/DD hh:mm'
  format = format.replace('YYYY', today.getFullYear())
  format = format.replace('MM', ("0"+today.getMonth()+1).slice(-2))
  format = format.replace('DD', ("0"+today.getDate()).slice(-2))
  format = format.replace('hh', ("0"+today.getHours()).slice(-2))
  format = format.replace('mm', ("0"+today.getMinutes()).slice(-2))
  return format
}