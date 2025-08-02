import { useState } from "react";
import TodoData from "./assets/components/new/TodoData";
import TodoNew from "./assets/components/new/TodoNew";
import './assets/components/new/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {

  const [todoList, valueTodoList] = useState([
    { id: 1, name: 'Learning React' },
    { id: 2, name: 'Watching Youtube' }
  ])

  const temp = 'tranduyphong'
  const age = 25
  const data = {
    address: 'hanoi',
    country: 'vietnam'
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`);
  }

  return (
    <div className="todo-app">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={temp}
        age={age}
        data={data}
        todoList={todoList}
      />
      <img src={reactLogo} className="logo" />
    </div>
  );
}

export default App;