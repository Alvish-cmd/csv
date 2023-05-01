'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ProviderChoices = require('./ProviderChoices');

var _ProviderChoices2 = _interopRequireDefault(_ProviderChoices);

var _LocalUserRegister = require('./LocalUserRegister');

var _LocalUserRegister2 = _interopRequireDefault(_LocalUserRegister);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      "& > * + *": {
        marginTop: theme.spacing.unit * 2
      }
    },
    or: {
      textAlign: 'center'
    }
  };
};

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register() {
    _classCallCheck(this, Register);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Register.prototype.render = function render() {
    var _props = this.props,
        classes = _props.classes,
        onRegister = _props.onRegister,
        onRegisterWithProvider = _props.onRegisterWithProvider,
        registerFailed = _props.registerFailed,
        providers = _props.providers,
        disableLocal = _props.disableLocal,
        disableRegisterProviders = _props.disableRegisterProviders;


    var showProviders = !_lodash2.default.isEmpty(providers) && !disableRegisterProviders;
    var showOr = !disableLocal && showProviders;

    return _react2.default.createElement(
      'div',
      { className: classes.root },
      !disableLocal && _react2.default.createElement(_LocalUserRegister2.default, { onRegister: onRegister, registerFailed: registerFailed }),
      showOr && _react2.default.createElement(
        'div',
        { className: classes.or },
        'or'
      ),
      showProviders && _react2.default.createElement(_ProviderChoices2.default, { register: true,
        onChoice: onRegisterWithProvider,
        providers: providers
      })
    );
  };

  return Register;
}(_react.Component);

Register.propTypes = process.env.NODE_ENV !== "production" ? {
  onRegister: _propTypes2.default.func,
  onRegisterWithProvider: _propTypes2.default.func,
  providers: _propTypes2.default.arrayOf(_propTypes2.default.string),
  registerFailed: _propTypes2.default.string,
  disableLocal: _propTypes2.default.bool,
  disableRegisterProviders: _propTypes2.default.bool
} : {};
exports.default = (0, _styles.withStyles)(styles)(Register);
module.exports = exports['default'];