import React, { Component } from 'react';
import HeaderMenu1 from './HeaderMenu1';
import HeaderMenu2 from './HeaderMenu2';

class HeaderComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <HeaderMenu1 />
                <HeaderMenu2 />
            </div>
        );
    }
}

export default HeaderComponent;