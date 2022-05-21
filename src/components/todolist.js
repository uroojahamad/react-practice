import React, { useState } from 'react';
import '../css/todolist.css';

const TodoList = () => {
    const [tasks, setTasks] = useState('');
    const [taskArray, setTaskArray] = useState([]);

    // let arr = [];
    const addTask = () => {
        if (tasks === "") {
            return alert("Value can't be blank. Please add a Todo Item");
        }
        else {
            setTaskArray(() => {
                return [tasks, ...taskArray];
            });
        }
    };

    return (
        <div className="todolist-container d-flex-column">
            <h1 className="text-center">Todo List</h1>
            <div className="todolist-subcontainer input-group">
                <input type="text" className="form-control" id="todoItem" placeholder="Add a todo item" onChange={(e) => setTasks(e.target.value.trim())} />
                <button className="todolist-btn" id="addItemToList" onClick={addTask}><i className="fa fa-plus"></i>Add</button>
            </div>
            <div className="todolist-subcontainer d-flex-row">
                <div className="task-list">
                    <h2>Your Items</h2>
                    <ul className="list-group list-group-flush" id="listItem">
                        {
                            taskArray.map((task) => {
                                return (
                                    <li className="list-group-item">
                                        <button className="text" onClick="markItemAsCompleted(this)">
                                            {task}
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
                <div className="completed-list">
                    <h2>Completed Items</h2>
                    <ul className="list-group list-group-flush" id="completedListItem"></ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;