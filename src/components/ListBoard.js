import React from "react";
import ListItem from "./ListItem";

const ListBoard = React.createClass({
    render () {
        return (
            <div className="list-board">
                <ul>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />



                </ul>
            </div>
        )
    }
});

export default ListBoard;