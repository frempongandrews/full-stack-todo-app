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

    handleRemoveTask (){
        var item = this.props;
        // console.log(item);
        this.props.removeTask(item);
    },

    render () {
        // console.log(this.props);

        return (
            <div>
                <li className="list-item" >
                    <div className="input-checkbox-container">

                        <input
                            type="checkbox"
                            onChange={this.handleCompletedTask}
                            defaultChecked={this.props.completed}
                            className="list-item-checkbox"
                        />
                        <label className="input-checkbox-result">&#10003;</label>
                    </div>
                    <p className={this.props.completed ? "completed" : ""}>{this.props.name}</p>

                    <span>{this.props.time}</span>
                    <button className="remove-item" onClick={this.handleRemoveTask}>remove</button>
                </li>
            </div>
        )
    }
});

export default ListItem;