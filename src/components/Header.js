import React from "react";

const Header = React.createClass({

    getRemainingTasks (tasks) {

        tasks = this.props.todos;
        var pending = tasks.filter(function (task) {
            return task.completed === false;
        }).length;

        if (pending === 0) {
            return "No task pending"
        }

        if (pending === 1) {
            return pending + " task pending"
        }

        if (pending > 1) {
            return pending + " tasks pending"
        }

    },

    render () {

        return (
            <div className="header">
                <div className="day-date">
                    <p>{this.props.currentDate.day}</p> <br />
                    <span>{this.props.currentDate.month}</span>
                </div>

                <div className="tasks-pending">
                    <p>{this.getRemainingTasks()}</p>
                </div>
            </div>
        )
    }
});

export default Header;