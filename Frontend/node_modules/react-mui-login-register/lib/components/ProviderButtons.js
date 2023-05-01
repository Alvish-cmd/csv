'use strict';

exports.__esModule = true;
exports.GoogleButton = exports.TwitterButton = exports.GithubButton = exports.FacebookButton = exports.ProviderButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _colorManipulator = require('@material-ui/core/styles/colorManipulator');

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mdiMaterialUi = require('mdi-material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var providerColors = {
  github: {
    primary: '#24292e'
  },
  facebook: {
    primary: '#3b5998'
  },
  twitter: {
    primary: '#1da1f2'
  },
  google: {
    primary: '#4285F4'
  }
};

/*
Properties
base color
icon
button label
 */

var ProviderButton = exports.ProviderButton = function (_Component) {
  _inherits(ProviderButton, _Component);

  function ProviderButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, ProviderButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(_this.props.provider);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ProviderButton.prototype.render = function render() {
    var _props = this.props,
        classes = _props.classes,
        providerIcon = _props.providerIcon,
        providerLabel = _props.providerLabel,
        login = _props.login,
        register = _props.register,
        provider = _props.provider,
        restOfProps = _objectWithoutProperties(_props, ['classes', 'providerIcon', 'providerLabel', 'login', 'register', 'provider']);

    var label = void 0;
    if (login) {
      label = 'Log in with ' + providerLabel;
    } else if (register) {
      label = 'Register with ' + providerLabel;
    } else {
      label = providerLabel;
    }

    return _react2.default.createElement(
      _Button2.default,
      _extends({}, restOfProps, { onClick: this.handleClick, classes: {
          root: classes.root
        }
      }),
      _react2.default.createElement(providerIcon, { className: classes.leftIcon }),
      label
    );
  };

  return ProviderButton;
}(_react.Component);

function createProviderButton(provider, baseColor, icon, label) {
  var _class2, _temp2;

  var styles = function styles(theme) {
    return {
      leftIcon: {
        marginRight: theme.spacing.unit
      },
      root: {
        backgroundColor: baseColor,
        '&:hover': {
          backgroundColor: (0, _colorManipulator.darken)(baseColor, 0.2)
        }
      }
    };
  };

  var inner = (0, _styles.withStyles)(styles)(ProviderButton);

  var component = (_temp2 = _class2 = function (_Component2) {
    _inherits(component, _Component2);

    function component() {
      _classCallCheck(this, component);

      return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    component.prototype.render = function render() {
      return _react2.default.createElement(inner, _extends({
        providerIcon: icon,
        providerLabel: label,
        provider: provider
      }, this.props));
    };

    return component;
  }(_react.Component), _class2.propTypes = _extends({}, _Button2.default.propTypes, {
    login: _propTypes2.default.bool,
    register: _propTypes2.default.bool,
    onClick: _propTypes2.default.func
  }), _temp2);

  return component;
}

var FacebookButton = exports.FacebookButton = createProviderButton("facebook", providerColors.facebook.primary, _mdiMaterialUi.FacebookBox, "Facebook");
var GithubButton = exports.GithubButton = createProviderButton("github", providerColors.github.primary, _mdiMaterialUi.GithubBox, "Github");
var TwitterButton = exports.TwitterButton = createProviderButton("twitter", providerColors.twitter.primary, _mdiMaterialUi.TwitterBox, "Twitter");
var GoogleButton = exports.GoogleButton = createProviderButton("google", providerColors.google.primary, _mdiMaterialUi.Google, "Google");