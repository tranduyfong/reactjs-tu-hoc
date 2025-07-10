import './todo.css'

const TodoData = (props) => {
    // props la mot bien objects
    console.log('Check props', props);
    const { name, age, data } = props;
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    );
}

export default TodoData;