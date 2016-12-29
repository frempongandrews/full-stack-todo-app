import React from "react";

const Header = React.createClass({
    render () {
        return (
            <div className="header">
                <div className="day-date">
                    <p>Monday, 4th</p> <br />
                    <span>January</span>
                </div>

                <div className="tasks-pending">
                    <p>6 tasks pending</p>
                </div>
            </div>
        )
    }
});

export default Header;