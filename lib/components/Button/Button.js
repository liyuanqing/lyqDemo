'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import PropTypes from 'prop-types';
// import classNames from 'classnames';

var LyqButton = function (_PureComponent) {
    _inherits(LyqButton, _PureComponent);

    function LyqButton() {
        _classCallCheck(this, LyqButton);

        return _possibleConstructorReturn(this, (LyqButton.__proto__ || Object.getPrototypeOf(LyqButton)).apply(this, arguments));
    }

    _createClass(LyqButton, [{
        key: 'render',

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

        value: function render() {
            var _props = this.props,
                className = _props.className,
                style = _props.style,
                text = _props.text,
                children = _props.children;

            var childrenText = _react2.default.createElement(
                'div',
                null,
                children
            );

            // const cls = classNames('ice-title', className);

            return _react2.default.createElement(
                'div',
                { className: className, style: style },
                childrenText
            );
        }
    }]);

    return LyqButton;
}(_react.PureComponent);

exports.default = LyqButton;