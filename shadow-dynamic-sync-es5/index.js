'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomTag = function (_HTMLElement) {
  _inherits(CustomTag, _HTMLElement);

  _createClass(CustomTag, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['content'];
    }
  }]);

  function CustomTag() {
    _classCallCheck(this, CustomTag);

    var _this = _possibleConstructorReturn(this, (CustomTag.__proto__ || Object.getPrototypeOf(CustomTag)).call(this));

    _this.attachShadow({ mode: 'open' });
    return _this;
  }

  _createClass(CustomTag, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(type, oldValue, newValue) {
      this.shadowRoot.innerHTML = '\n      <h1>' + newValue + '</h1>\n      <p>' + newValue + '</p>\n    ';
    }
  }, {
    key: 'content',
    get: function get() {
      return this.getAttribute('content');
    },
    set: function set(value) {
      this.setAttribute('content', value);
    }
  }]);

  return CustomTag;
}(HTMLElement);

window.customElements.define('custom-tag', CustomTag);

var tag = document.querySelector('custom-tag');
tag.content = 'Will this be indexed?';