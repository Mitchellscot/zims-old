import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

export class Layout extends React.Component {

    render() {
        return (
            <div>
                <NavMenu />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
