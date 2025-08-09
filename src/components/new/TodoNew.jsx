import { useState } from 'react';
import './todo.css'

const TodoNew = (props) => {

    // useState hook (getter, setter)
    const [valueInput, setValueInput] = useState('')
    console.log(props);
    const { addNewTodo } = props;
    // addNewTodo('duy phong');
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput('')
    }
    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)} value={valueInput}
            />
            <button
                style={{ cursor: 'pointer' }}
                onClick={handleClick}
            >Add</button>
            <div>The value input is {valueInput}</div>
        </div>
    );
}

export default TodoNew;