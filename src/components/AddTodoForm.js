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
        time = Number(this.props.taskFormTime).toFixed(2);

        if (Number(time) > 24 || Number(time) < 0) {
            alert("Please insert a human time: between 0 and 24");
            return;
        }

        if((name).trim().length === 0) {
            alert("please insert a task");
            return;
        }

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
                    <input type="number" onChange={this.onTaskTimeChangeHandler}/>
                    <br />
                    <input type="submit"/> <button>cancel</button>
                </form>
            </div>
        )
    }
});

export default AddTodoForm;