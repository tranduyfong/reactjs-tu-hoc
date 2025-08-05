import './todo.css'

const TodoData = (props) => {
    // props la mot bien objects
    const { todoList } = props;
    console.log(">>>> Check props: ", todoList);

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">>>> check map", item, index);

                return (
                    <div className='todo-item'>
                        <div> {item.name} </div>
                        <button> Delete </button>
                    </div>)
            })}
        </div>
    );
}

export default TodoData;