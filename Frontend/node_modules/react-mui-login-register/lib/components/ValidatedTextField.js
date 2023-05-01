'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _formsyReact = require('formsy-react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidatedTextField = function (_Component) {
  _inherits(ValidatedTextField, _Component);

  function ValidatedTextField() {
    var _temp, _this, _ret;

    _classCallCheck(this, ValidatedTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleChange = function (event) {
      _this.props.setValue(event.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ValidatedTextField.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        name = _props.name,
        label = _props.label,
        className = _props.className,
        autoComplete = _props.autoComplete;


    var textFieldProps = {
      type: type, name: name, label: label, className: className, autoComplete: autoComplete
    };

    return _react2.default.createElement(_TextField2.default, _extends({}, textFieldProps, {
      value: this.props.getValue() || '',
      onChange: this.handleChange,
      required: this.props.showRequired(),
      error: this.props.showError(),
      helperText: this.props.getErrorMessage()
    }));
  };

  return ValidatedTextField;
}(_react.Component);

ValidatedTextField.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _formsyReact.propTypes, {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  className: _propTypes2.default.string,
  autoComplete: _propTypes2.default.string
}) : {};
exports.default = (0, _formsyReact.withFormsy)(ValidatedTextField);
module.exports = exports['default'];