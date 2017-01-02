import React from "react";
import ListItem from "./ListItem";

const ListBoard = React.createClass({

    render () {
        var todos = this.props.todos;
        var todoItems = todos.map(function (todo, i) {
            return <ListItem
                key={i}
                id={todo._id}
                name={todo.name}
                time={todo.time}
                completed={todo.completed}
                onCompletedTask={this.props.onCompletedTask}
                removeTask={this.props.removeTask}
            />
        }.bind(this))
        return (
            <div className="list-board">
                <ul>
                    {todoItems}
                </ul>
            </div>
        )
    }
});

export default ListBoard;