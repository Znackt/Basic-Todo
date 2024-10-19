let todos = [];
function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
}

function createTodosComponent(todo, index) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.addEventListener("click", () => {
    todos.splice(index, 1);
    render();
  });
  h3.innerHTML = todo.title;
  div.append(h3);
  div.append(button);
  return div;
}

function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createTodosComponent(todos[i], i);
    document.querySelector("#todos").appendChild(element);
  }
}
