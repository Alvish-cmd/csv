'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ProviderButtons = require('./components/ProviderButtons');

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      "& > *+*": {
        marginTop: theme.spacing.unit
      }
    }
  };
};

var ProviderChoices = function (_Component) {
  _inherits(ProviderChoices, _Component);

  function ProviderChoices() {
    var _temp, _this, _ret;

    _classCallCheck(this, ProviderChoices);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (providerId) {
      if (_this.props.onChoice) {
        _this.props.onChoice(providerId);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ProviderChoices.prototype.render = function render() {
    var _props = this.props,
        classes = _props.classes,
        login = _props.login,
        register = _props.register,
        providers = _props.providers;


    var commonProps = {
      login: login,
      register: register,
      variant: 'contained',
      color: 'primary',
      className: classes.button,
      onClick: this.handleClick
    };

    return _react2.default.createElement(
      'div',
      { className: classes.root },
      providers.includes(_.PROVIDER_FACEBOOK) && _react2.default.createElement(_ProviderButtons.FacebookButton, commonProps),
      providers.includes(_.PROVIDER_GITHUB) && _react2.default.createElement(_ProviderButtons.GithubButton, commonProps),
      providers.includes(_.PROVIDER_TWITTER) && _react2.default.createElement(_ProviderButtons.TwitterButton, commonProps),
      providers.includes(_.PROVIDER_GOOGLE) && _react2.default.createElement(_ProviderButtons.GoogleButton, commonProps)
    );
  };

  return ProviderChoices;
}(_react.Component);

ProviderChoices.propTypes = process.env.NODE_ENV !== "production" ? {
  login: _propTypes2.default.bool,
  register: _propTypes2.default.bool,
  onChoice: _propTypes2.default.func,
  providers: _propTypes2.default.arrayOf(_propTypes2.default.string)
} : {};
exports.default = (0, _styles.withStyles)(styles)(ProviderChoices);
module.exports = exports['default'];