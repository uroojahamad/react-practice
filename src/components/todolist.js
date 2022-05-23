import React, { useState } from 'react';
import '../css/todolist.css';

const TodoList = () => {
    const [tasks, setTasks] = useState('');
    const [taskArray, setTaskArray] = useState([]);
    const [completedTaskArrray, setCompletedTaskArrray] = useState([]);

    // Adding task to Todo List
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

    //Mark task as complete
    const markItemAsCompleted = (e) => {
        const taskName = e.target.innerText
        setTaskArray(taskArray.filter(task => {
                return task !== taskName;
            })
        );

        setCompletedTaskArrray([taskName, ...completedTaskArrray]);
    };

    //Delete a Task
    const deletedItem = (e) =>{
        const deleteTaskName = e.target.offsetParent.firstElementChild.innerText;
        setTaskArray(taskArray.filter(task => {
                return task !== deleteTaskName;
            })
        );
    };

    return (
        <div className="todolist-container d-flex-column">
            <h1 className="text-center">Todo List</h1>
            <div className="todolist-subcontainer input-group">
                <input type="text" className="form-control" id="todoItem" placeholder="Add a todo item" onChange={(e) => setTasks(e.target.value.trim())} />
                <button className="todolist-btn" id="addItemToList" onClick={addTask}><i className="fa fa-plus"></i>Add Task</button>
            </div>
            <div className="todolist-subcontainer d-flex-row">
                <div className="task-list">
                    <h2>Your Items</h2>
                    <ul className="list-group list-group-flush" id="listItem">
                        {
                            taskArray.map((task) => {
                                return (
                                    <li className="list-group-item">
                                        <button className="text" onClick={markItemAsCompleted}>
                                            {task}
                                        </button>
                                        <button className="deletedItem" onClick={deletedItem}>
                                            <i className="fa fa-trash"></i>
                                            Delete
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
                <div className="completed-list">
                    <h2>Completed Items</h2>
                    <ul className="list-group list-group-flush" id="completedListItem">
                        {
                            completedTaskArrray.map(completedTask => {
                                return (
                                    <li className="list-group-item">
                                        <button className="text strikeText">
                                            {completedTask}
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;