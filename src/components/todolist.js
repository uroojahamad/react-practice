import React from 'react';


const TodoList = () => {
    return (
        <div class="container d-flex-column">
            <h1 class="text-center">Todo List</h1>
            <div class="subcontainer input-group">
                <input type="text" class="form-control" id="todoItem" placeholder="Add a todo item" />
                <button class="btn" id="addItemToList"><i class="fa fa-plus"></i>Add</button>
            </div>
            <div class="subcontainer d-flex-row">
                <div class="task-list">
                    <h4>Your Items</h4>
                    <ul class="list-group list-group-flush" id="listItem"></ul>
                </div>
                <div class="completed-list">
                    <h4>Completed Items</h4>
                    <ul class="list-group list-group-flush" id="completedListItem"></ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;