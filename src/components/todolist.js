import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../css/todolist.css';

const TodoList = () => {
    const [taskInput, setTaskInput] = useState('');
    const [taskArray, setTaskArray] = useState([]);
    // const [completedTaskArrray, setCompletedTaskArrray] = useState([]);

    // Adding task to Todo List
    const addTask = () => {
        if (taskInput === "") {
            return alert("Value can't be blank. Please add a Todo Item");
        }

        const taskObj = {
            key: uuidv4(),
            text: taskInput,
            isCompleted: false
        }
        setTaskArray(() => {
            return [taskObj, ...taskArray];
        });
        setTaskInput('');
    };

    //Mark task as complete
    const toggleIsCompleted = (task) => {
        // const taskName = e.target.innerText
        setTaskArray((previousTaskArray) => {
            return previousTaskArray.map(item => {
                if(item.key === task.key){
                    item.isCompleted = !item.isCompleted;
                } 
                return item;
            })
        });
        // setCompletedTaskArrray([taskName, ...completedTaskArrray]);
    };

    //Delete a Task
    const deletedItem = (task) =>{
        // const deleteTaskName = e.target.offsetParent.firstElementChild.innerkey;
        setTaskArray((previousTaskArray) => previousTaskArray.filter(item => {
                return item.key !== task.key;
            })
        );
    };

    return (
        <div className="todolist-container d-flex-column">
            <h1 className="text-center">Todo List</h1>
            <div className="todolist-subcontainer input-group">
                <input type="text" className="form-control" id="todoItem" placeholder="Add a todo item" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                <button className="todolist-btn" id="addItemToList" onClick={addTask}><i className="fa fa-plus"></i>Add Task</button>
            </div>
            <div className="todolist-subcontainer d-flex-row">
                <div className="task-list">
                    <h2>Your Items</h2>
                    <ul className="list-group list-group-flush" id="listItem">
                        {
                            taskArray.filter(task => !task.isCompleted).map((task) => {
                                return (
                                    <li className="list-group-item" key={task.key}>
                                        <button className="text" onClick={() => toggleIsCompleted(task)}>
                                            {task.text}
                                        </button>
                                        <button className="deletedItem" onClick={() => deletedItem(task)}>
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
                            taskArray.filter(task => task.isCompleted).map(completedTask => {
                                return (
                                    <li className="list-group-item" key={completedTask.key}>
                                        <button className="text strikeText" onClick={() => toggleIsCompleted(completedTask)}>
                                            {completedTask.text}
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