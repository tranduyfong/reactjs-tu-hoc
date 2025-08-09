import { useState } from "react";
import TodoData from "./components/new/TodoData";
import TodoNew from "./components/new/TodoNew";
import './components/new/todo.css';
import reactLogo from './react.svg';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";

const App = () => {

  const [todoList, setTodoList] = useState([
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
    <>
      <Header />
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
      <Outlet />
      <Footer />
    </>
  );
}

export default App;