import { useState } from "react";
import TodoData from "./assets/components/new/TodoData";
import TodoNew from "./assets/components/new/TodoNew";
import './assets/components/new/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: 'Learning React' },
    // { id: 2, name: 'Watching Youtube' }
  ])

  const addNewTodo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }

    setTodoList([...todoList, newToDo])
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo)
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-app">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        /> :
        <img src={reactLogo} className="logo" />
      }
    </div>
  );
}

export default App;