import './todo.css'

const TodoData = (props) => {
    // props la mot bien objects
    const { name, age, data, todoList } = props;
    console.log(">>>> Check props: ", props);

    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    );
}

export default TodoData;