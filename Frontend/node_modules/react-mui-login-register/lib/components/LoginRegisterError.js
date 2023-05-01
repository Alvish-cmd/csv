'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      color: theme.palette.error.main,
      fontWeight: 'bold',
      margin: [[theme.spacing.unit, 0]]
    }
  };
};

var LoginRegisterError = function (_Component) {
  _inherits(LoginRegisterError, _Component);

  function LoginRegisterError() {
    _classCallCheck(this, LoginRegisterError);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LoginRegisterError.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: this.props.classes.root },
      this.props.message
    );
  };

  return LoginRegisterError;
}(_react.Component);

LoginRegisterError.propTypes = process.env.NODE_ENV !== "production" ? {
  message: _propTypes2.default.string.isRequired
} : {};
exports.default = (0, _styles.withStyles)(styles)(LoginRegisterError);
module.exports = exports['default'];