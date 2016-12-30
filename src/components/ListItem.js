import React from "react";


const ListItem = React.createClass({
    handleChange (e) {
        console.log(e.target.checked);
    },
    render () {
        return (
            <div>
                <li className="list-item">
                    <div className="input-checkbox-container">
                        <input type="checkbox" onChange={this.handleChange}/>
                    </div>
                    <p>todoitem</p>
                    <span>7.00</span>

                </li>
            </div>
        )
    }
});

export default ListItem;