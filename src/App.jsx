import TodoData from "./assets/components/new/TodoData";
import TodoNew from "./assets/components/new/TodoNew";
import './assets/components/new/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {
  return (
    <div className="todo-app">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <img src={reactLogo} className="logo" />
    </div>
  );
}

export default App;