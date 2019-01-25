'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomTag = function (_HTMLElement) {
  _inherits(CustomTag, _HTMLElement);

  function CustomTag() {
    _classCallCheck(this, CustomTag);

    var _this = _possibleConstructorReturn(this, (CustomTag.__proto__ || Object.getPrototypeOf(CustomTag)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<slot></slot>';
    return _this;
  }

  return CustomTag;
}(HTMLElement);

window.customElements.define('custom-tag', CustomTag);