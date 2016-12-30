import React from "react";

const Header = React.createClass({

    getRemainingTasks (tasks) {
        tasks = this.props.todos.length;
        if (tasks === 0) {
            return "All tasks completed";
        }
        if (tasks === 1 ) {
            return tasks + " task pending";
        }
        if (tasks > 1 ) {
            return tasks + " tasks pending";
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