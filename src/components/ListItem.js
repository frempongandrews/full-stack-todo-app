import React from "react";


const ListItem = React.createClass({
    render () {
        console.log(this.props);
        return (
            <div>
                <li className="list-item">
                    <div className="input-checkbox-container">
                        <input type="checkbox" />
                    </div>
                    <p>{this.props.name}</p>
                    <span>{this.props.time}</span>

                </li>
            </div>
        )
    }
});

export default ListItem;