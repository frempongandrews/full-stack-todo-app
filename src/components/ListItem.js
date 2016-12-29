import React from "react";


const ListItem = React.createClass({
    render () {
        return (
            <div>
                <li className="list-item">
                    <div className="input-checkbox-container">
                        <input type="checkbox"/>
                    </div>
                    <p>todoitem</p>
                    <span>7.00</span>

                </li>
            </div>
        )
    }
});

export default ListItem;