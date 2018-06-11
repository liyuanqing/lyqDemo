import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

export default class LyqButton extends PureComponent {
    // static displayName = 'LyqButton';

    // static propTypes = {
    //     /**
    //     * button内容
    //     */
    //     children: PropTypes.string,
    // };

    // static defaultProps = {
    //     text: '',
    // };

    render() {
        const {
            className,
            style,
            text,
            children
        } = this.props;
        const childrenText = (
            <div>
                {children}
            </div>
        );

        // const cls = classNames('ice-title', className);

        return (
            <div className={className} style={style} >{childrenText}</div>
        );
    }
}
