'use strict';

exports.__esModule = true;
exports.PROVIDER_GOOGLE = exports.PROVIDER_TWITTER = exports.PROVIDER_GITHUB = exports.PROVIDER_FACEBOOK = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _Tabs = require('@material-ui/core/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('@material-ui/core/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Fade = require('@material-ui/core/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TabContent = require('./components/TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('./Register');

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROVIDER_FACEBOOK = exports.PROVIDER_FACEBOOK = 'facebook';
var PROVIDER_GITHUB = exports.PROVIDER_GITHUB = 'github';
var PROVIDER_TWITTER = exports.PROVIDER_TWITTER = 'twitter';
var PROVIDER_GOOGLE = exports.PROVIDER_GOOGLE = 'google';

var styles = function styles(theme) {
  var _card;

  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    card: (_card = {
      flexGrow: 1
    }, _card[theme.breakpoints.up('sm')] = {
      flexBasis: '25rem',
      flexGrow: 0
    }, _card)
  };
};

var LoginRegister = (_temp = _class = function (_Component) {
  _inherits(LoginRegister, _Component);

  function LoginRegister(props) {
    _classCallCheck(this, LoginRegister);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleTabChange = function (event, value) {
      _this.setState({ tab: value });
    };

    _this.state = {
      tab: 0
    };
    return _this;
  }

  LoginRegister.prototype.render = function render() {
    var _props = this.props,
        classes = _props.classes,
        transitionTimeout = _props.transitionTimeout,
        header = _props.header,
        footer = _props.footer,
        onLogin = _props.onLogin,
        onLoginWithProvider = _props.onLoginWithProvider,
        onRegister = _props.onRegister,
        onRegisterWithProvider = _props.onRegisterWithProvider,
        loginFailed = _props.loginFailed,
        registerFailed = _props.registerFailed,
        providers = _props.providers,
        disableLocal = _props.disableLocal,
        disableRegister = _props.disableRegister,
        disableRegisterProviders = _props.disableRegisterProviders;
    var tab = this.state.tab;


    var activeTab = void 0;
    switch (tab) {
      case 0:
        activeTab = _react2.default.createElement(
          _TabContent2.default,
          null,
          _react2.default.createElement(_Login2.default, { onLogin: onLogin,
            onLoginWithProvider: onLoginWithProvider,
            providers: providers,
            loginFailed: loginFailed,
            disableLocal: disableLocal
          })
        );
        break;

      case 1:
        activeTab = _react2.default.createElement(
          _TabContent2.default,
          null,
          _react2.default.createElement(_Register2.default, { onRegister: onRegister,
            onRegisterWithProvider: onRegisterWithProvider,
            providers: providers,
            registerFailed: registerFailed,
            disableLocal: disableLocal,
            disableRegisterProviders: disableRegisterProviders
          })
        );
        break;
    }

    return _react2.default.createElement(
      'div',
      { className: classes.root },
      _react2.default.createElement(
        _Card2.default,
        { className: classes.card },
        header && _react2.default.createElement(
          'div',
          null,
          header
        ),
        !disableLocal && !disableRegister && _react2.default.createElement(
          _Tabs2.default,
          {
            value: this.state.tab,
            onChange: this.handleTabChange,
            indicatorColor: 'primary',
            textColor: 'primary',
            variant: 'fullWidth'
          },
          _react2.default.createElement(_Tab2.default, { label: 'Login' }),
          !disableRegister && _react2.default.createElement(_Tab2.default, { label: 'Register' })
        ),
        transitionTimeout > 0 ? _react2.default.createElement(
          _Fade2.default,
          { key: tab, 'in': true, timeout: transitionTimeout },
          activeTab
        ) : activeTab,
        footer && _react2.default.createElement(
          'div',
          null,
          footer
        )
      )
    );
  };

  return LoginRegister;
}(_react.Component), _class.defaultProps = {
  transitionTimeout: 1000,
  providers: [PROVIDER_FACEBOOK, PROVIDER_GITHUB, PROVIDER_TWITTER, PROVIDER_GOOGLE]
}, _temp);
LoginRegister.propTypes = process.env.NODE_ENV !== "production" ? {
  transitionTimeout: _propTypes2.default.number,
  header: _propTypes2.default.element,
  footer: _propTypes2.default.element,
  onLogin: _propTypes2.default.func,
  loginFailed: _propTypes2.default.string,
  registerFailed: _propTypes2.default.string,
  onRegister: _propTypes2.default.func,
  onLoginWithProvider: _propTypes2.default.func,
  onRegisterWithProvider: _propTypes2.default.func,
  providers: _propTypes2.default.arrayOf(_propTypes2.default.oneOf([PROVIDER_FACEBOOK, PROVIDER_GITHUB, PROVIDER_TWITTER, PROVIDER_GOOGLE])),
  disableLocal: _propTypes2.default.bool,
  disableRegister: _propTypes2.default.bool,
  disableRegisterProviders: _propTypes2.default.bool
} : {};
exports.default = (0, _styles.withStyles)(styles)(LoginRegister);