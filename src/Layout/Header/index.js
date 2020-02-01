import React, { Fragment } from 'react';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Fragment >
                <h1 className="center">To do List</h1>
            </Fragment>
        );
    }
}

export default Header;