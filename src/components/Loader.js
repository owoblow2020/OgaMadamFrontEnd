import React, { Component } from 'react';

class Loader extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="page-loading">
                    <img src="images/loader.gif" alt="" />
                    <span>Skip Loader</span>
                </div>
            </div>
        );
    }
}

export default Loader;