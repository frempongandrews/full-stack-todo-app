import React from "react";
import ListItem from "./ListItem";
import CSSTransitionGroup from "react-addons-css-transition-group";

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
                <CSSTransitionGroup
                    component="ul"
                    className="list-board-container"
                    transitionName="listItems"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >

                    {todoItems}
                </CSSTransitionGroup>
            </div>
        )
    }
});

export default ListBoard;