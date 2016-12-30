import React from "react";


const AddTodoForm = React.createClass({

    onTaskNameChangeHandler(e, name) {
        name = e.target.value;
        this.props.onTaskNameChange(name);
        // console.log(name);
    },

    onTaskTimeChangeHandler(e, time) {
        time = e.target.value;
        this.props.onTaskTimeChange(time);
        // console.log(time);
    },

    handleOnSubmitTask (e, name, time) {
        e.preventDefault();
        name = this.props.taskFormName;
        time = this.props.taskFormTime;
        this.props.onSubmitTask (name, time);
    },
    render () {

        return (
            <div className="add-todo-form">
                <form onSubmit={this.handleOnSubmitTask}>
                    <label>Name</label>
                    <input type="text" onChange={this.onTaskNameChangeHandler}/>
                    <br />
                    <label>Time</label>
                    <input type="text" onChange={this.onTaskTimeChangeHandler}/>
                    <br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
});

export default AddTodoForm;