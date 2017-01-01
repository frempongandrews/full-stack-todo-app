import React from "react";


const ListItem = React.createClass({

    handleCompletedTask (e) {
        var checkedValue = e.target.checked;
        var target = this.props;
        this.setState({
            check: checkedValue
        })
        this.props.onCompletedTask(checkedValue, target);
        // console.log(checkedValue);
        // console.log(target);
    },

    render () {
        // console.log(this.props);

        return (
            <div>
                <li className="list-item" >
                    <div className="input-checkbox-container">
                        <input type="checkbox" onChange={this.handleCompletedTask} defaultChecked={this.props.completed} />
                    </div>
                    <p>{this.props.name}</p>

                    <span>{this.props.time}</span>

                </li>
            </div>
        )
    }
});

export default ListItem;