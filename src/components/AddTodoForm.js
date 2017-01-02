import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

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

    handleHideAddTodoForm (e) {
        e.preventDefault();
        this.props.hideAddTodoForm();
    },
    render () {

        return (
            <CSSTransitionGroup
                component="div"
                transitionName="formTransition"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}
                className="add-todo-form form"
            >
                <form onSubmit={this.handleOnSubmitTask} key={1}>
                    <label>Task</label>
                    <input type="text" onChange={this.onTaskNameChangeHandler}/>
                    <br />
                    <label>Time</label>
                    <input type="number" onChange={this.onTaskTimeChangeHandler} className="time-input"/>
                    <br />
                    <input type="submit" value="Add task"/> <button onClick={this.handleHideAddTodoForm}>cancel</button>
                </form>
            </CSSTransitionGroup>
        )
    }
});

export default AddTodoForm;