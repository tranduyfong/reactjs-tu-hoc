import './todo.css'

const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;
    // addNewTodo('duy phong');
    const handleClick = () => {
        alert('click me')
    }
    const handleOnChange = (name) => {
        console.log('>>>>>>>>>>> handleOnChange', name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: 'pointer' }}
                onClick={handleClick}
            >Add</button>
        </div>
    );
}

export default TodoNew;