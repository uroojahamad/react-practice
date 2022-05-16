import React from 'react';


const TodoList = () => {
    return (
        <div className="container d-flex-column">
            <h1 className="text-center">Todo List</h1>
            <div className="subcontainer input-group">
                <input type="text" className="form-control" id="todoItem" placeholder="Add a todo item" />
                <button className="btn" id="addItemToList"><i className="fa fa-plus"></i>Add</button>
            </div>
            <div className="subcontainer d-flex-row">
                <div className="task-list">
                    <h4>Your Items</h4>
                    <ul className="list-group list-group-flush" id="listItem"></ul>
                </div>
                <div className="completed-list">
                    <h4>Completed Items</h4>
                    <ul className="list-group list-group-flush" id="completedListItem"></ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;