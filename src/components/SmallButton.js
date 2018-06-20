import React from 'react';

export default class SmallButton extends React.Component {

    render() {
        return (
            <div>
                <button>{this.props.children}</button>
            </div>
        );
    }
}
