webpackHotUpdate(0,{

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(16), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(108);
	
	var _reactMaterialize = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Nav = function (_React$Component) {
	  _inherits(Nav, _React$Component);
	
	  function Nav(props) {
	    _classCallCheck(this, Nav);
	
	    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
	  }
	
	  _createClass(Nav, [{
	    key: 'logoutHandler',
	    value: function logoutHandler(route) {
	      console.log('hits logout handler');
	      // console.log('window.deepstream is: ', window.deepstream);
	      console.log('this.props.deep is: ', this.props.deep);
	      console.log('deep is: ', deep);
	      // window.deepstream.close()
	      // window.deepstream('localhost:6020'); // Need to change to production IP/URL when deploying
	
	      // this.props.toRoute(route);
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(route) {
	      this.props.toRoute(route);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        _reactMaterialize.Row,
	        { className: 'z-depth-0' },
	        _react2.default.createElement(
	          'nav',
	          { className: 'nav-extended z-depth-2' },
	          _react2.default.createElement(
	            'div',
	            { className: 'nav-wrapper green-text' },
	            _react2.default.createElement(
	              'a',
	              { className: 'brand-logo' },
	              'Cryptocracy'
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: '#', 'data-activates': 'mobile-demo', className: 'button-collapse' },
	              _react2.default.createElement(
	                'i',
	                { className: 'material-icons' },
	                'menu'
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              { id: 'nav-mobile', className: 'right hide-on-med-and-down' },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: this.clickHandler.bind(this, '/settings') },
	                  'Settings'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: this.logoutHandler.bind(this, '/') },
	                  'Logout'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: 'side-nav', id: 'mobile-demo' },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: this.clickHandler.bind(this, '/settings') },
	                  'Settings'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: this.logoutHandler.bind(this, '/') },
	                  'Logout'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: 'tabs tabs-transparent' },
	              _react2.default.createElement(
	                'li',
	                { className: 'tab' },
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this2.props.currencySelector(0);
	                    } },
	                  'BTC/LTC | 1.5'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { className: 'tab' },
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this2.props.currencySelector(1);
	                    } },
	                  'LTC/DOGE | 0.6'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { className: 'tab' },
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this2.props.currencySelector(2);
	                    } },
	                  'DOGE/BTC | 7.2'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Nav;
	}(_react2.default.Component);
	
	exports.default = Nav;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Nav.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2gvTmF2LmpzeD80YjE1Il0sIm5hbWVzIjpbIk5hdiIsInByb3BzIiwicm91dGUiLCJjb25zb2xlIiwibG9nIiwiZGVlcCIsInRvUm91dGUiLCJjbGlja0hhbmRsZXIiLCJiaW5kIiwibG9nb3V0SGFuZGxlciIsImN1cnJlbmN5U2VsZWN0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsRzs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzR0FDWEEsS0FEVztBQUVsQjs7OzttQ0FFYUMsSyxFQUFPO0FBQ25CQyxlQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQTtBQUNBRCxlQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0MsS0FBS0gsS0FBTCxDQUFXSSxJQUEvQztBQUNBRixlQUFRQyxHQUFSLENBQVksV0FBWixFQUF5QkMsSUFBekI7QUFDQTtBQUNBOztBQUVBO0FBQ0Q7OztrQ0FFWUgsSyxFQUFPO0FBQ2xCLFlBQUtELEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkosS0FBbkI7QUFDRDs7OzhCQUVRO0FBQUE7O0FBQ1AsY0FDRztBQUFBO0FBQUEsV0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLHdCQUFmO0FBQ0M7QUFBQTtBQUFBLGVBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxpQkFBRyxXQUFVLFlBQWI7QUFBQTtBQUFBLGNBREY7QUFFRTtBQUFBO0FBQUEsaUJBQUcsTUFBSyxHQUFSLEVBQVksa0JBQWUsYUFBM0IsRUFBeUMsV0FBVSxpQkFBbkQ7QUFBcUU7QUFBQTtBQUFBLG1CQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBO0FBQXJFLGNBRkY7QUFHRTtBQUFBO0FBQUEsaUJBQUksSUFBRyxZQUFQLEVBQW9CLFdBQVUsNEJBQTlCO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLHFCQUFHLFNBQVMsS0FBS0ssWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsV0FBN0IsQ0FBWjtBQUFBO0FBQUE7QUFBSixnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxxQkFBRyxTQUFTLEtBQUtDLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLEVBQThCLEdBQTlCLENBQVo7QUFBQTtBQUFBO0FBQUo7QUFGRixjQUhGO0FBT0U7QUFBQTtBQUFBLGlCQUFJLFdBQVUsVUFBZCxFQUF5QixJQUFHLGFBQTVCO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLHFCQUFHLFNBQVMsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsV0FBN0IsQ0FBWjtBQUFBO0FBQUE7QUFBSixnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxxQkFBRyxTQUFTLEtBQUtDLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLEVBQThCLEdBQTlCLENBQVo7QUFBQTtBQUFBO0FBQUo7QUFGRixjQVBGO0FBWUU7QUFBQTtBQUFBLGlCQUFJLFdBQVUsdUJBQWQ7QUFDRTtBQUFBO0FBQUEsbUJBQUksV0FBVSxLQUFkO0FBQW9CO0FBQUE7QUFBQSxxQkFBRyxTQUFTO0FBQUEsOEJBQU0sT0FBS1AsS0FBTCxDQUFXUyxnQkFBWCxDQUE0QixDQUE1QixDQUFOO0FBQUEsc0JBQVo7QUFBQTtBQUFBO0FBQXBCLGdCQURGO0FBRUU7QUFBQTtBQUFBLG1CQUFJLFdBQVUsS0FBZDtBQUFvQjtBQUFBO0FBQUEscUJBQUcsU0FBUztBQUFBLDhCQUFNLE9BQUtULEtBQUwsQ0FBV1MsZ0JBQVgsQ0FBNEIsQ0FBNUIsQ0FBTjtBQUFBLHNCQUFaO0FBQUE7QUFBQTtBQUFwQixnQkFGRjtBQUdFO0FBQUE7QUFBQSxtQkFBSSxXQUFVLEtBQWQ7QUFBb0I7QUFBQTtBQUFBLHFCQUFHLFNBQVM7QUFBQSw4QkFBTSxPQUFLVCxLQUFMLENBQVdTLGdCQUFYLENBQTRCLENBQTVCLENBQU47QUFBQSxzQkFBWjtBQUFBO0FBQUE7QUFBcEI7QUFIRjtBQVpGO0FBREQ7QUFERixRQURIO0FBeUJEOzs7O0dBOUNlLGdCQUFNQyxTOzttQkFpRFRYLEciLCJmaWxlIjoiMC44NzI1MDExZWMxOTAwMjg3N2JhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJztcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBsb2dvdXRIYW5kbGVyKHJvdXRlKSB7XG4gICAgY29uc29sZS5sb2coJ2hpdHMgbG9nb3V0IGhhbmRsZXInKTtcbiAgICAvLyBjb25zb2xlLmxvZygnd2luZG93LmRlZXBzdHJlYW0gaXM6ICcsIHdpbmRvdy5kZWVwc3RyZWFtKTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5wcm9wcy5kZWVwIGlzOiAnLCB0aGlzLnByb3BzLmRlZXApO1xuICAgIGNvbnNvbGUubG9nKCdkZWVwIGlzOiAnLCBkZWVwKTtcbiAgICAvLyB3aW5kb3cuZGVlcHN0cmVhbS5jbG9zZSgpXG4gICAgLy8gd2luZG93LmRlZXBzdHJlYW0oJ2xvY2FsaG9zdDo2MDIwJyk7IC8vIE5lZWQgdG8gY2hhbmdlIHRvIHByb2R1Y3Rpb24gSVAvVVJMIHdoZW4gZGVwbG95aW5nXG5cbiAgICAvLyB0aGlzLnByb3BzLnRvUm91dGUocm91dGUpO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKHJvdXRlKSB7XG4gICAgdGhpcy5wcm9wcy50b1JvdXRlKHJvdXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIDxSb3cgY2xhc3NOYW1lPSd6LWRlcHRoLTAnPlxuICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXYtZXh0ZW5kZWQgei1kZXB0aC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBncmVlbi10ZXh0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Q3J5cHRvY3JhY3k8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzc05hbWU9XCJidXR0b24tY29sbGFwc2VcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm1lbnU8L2k+PC9hPlxuICAgICAgICAgICAgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMsICcvc2V0dGluZ3MnKX0+U2V0dGluZ3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9e3RoaXMubG9nb3V0SGFuZGxlci5iaW5kKHRoaXMsICcvJyl9PkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcywgJy9zZXR0aW5ncycpfT5TZXR0aW5nczwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17dGhpcy5sb2dvdXRIYW5kbGVyLmJpbmQodGhpcywgJy8nKX0+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFicyB0YWJzLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmN1cnJlbmN5U2VsZWN0b3IoMCl9PkJUQy9MVEMgfCAxLjU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY3VycmVuY3lTZWxlY3RvcigxKX0+TFRDL0RPR0UgfCAwLjY8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY3VycmVuY3lTZWxlY3RvcigyKX0+RE9HRS9CVEMgfCA3LjI8L2E+PC9saT5cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvbmF2PlxuICAgICAgIDwvUm93PlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kYXNoL05hdi5qc3giXSwic291cmNlUm9vdCI6IiJ9