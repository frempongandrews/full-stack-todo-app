import React from "react";


const AddTodo = React.createClass({
    showAddTaskHandler () {
        this.props.showAddTask();
    },
    render () {
        return (
            <div className="add-button-container">
                <button className="add-button" onClick={this.showAddTaskHandler}></button>
            </div>
        )
    }
});

export default AddTodo;