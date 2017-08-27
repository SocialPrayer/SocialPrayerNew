webpackJsonp([1],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(39),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/joe3m/Code/SocialPrayer/SocialPrayer_back/resources/assets/js/components/prayers/Prayer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Prayer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f420c04", Component.options)
  } else {
    hotAPI.reload("data-v-5f420c04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        // console.log('Component mounted.')
    }
});

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-content"
  }, [_c('div', {
    staticClass: "media"
  }, [_c('div', {
    staticClass: "media-left"
  }, [_c('figure', {
    staticClass: "image is-48x48"
  }, [_c('img', {
    attrs: {
      "src": "http://bulma.io/images/placeholders/96x96.png",
      "alt": "Image"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "media-content"
  }, [_c('p', {
    staticClass: " is-4"
  }, [_vm._v("John Smith")]), _vm._v(" "), _c('p', {
    staticClass: " is-6"
  }, [_vm._v("@johnsmith")])])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      Phasellus nec iaculis mauris. "), _c('a', [_vm._v("@bulmaio")]), _vm._v(".\n      "), _c('a', [_vm._v("#css")]), _vm._v(" "), _c('a', [_vm._v("#responsive")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
    staticClass: "is-pulled-right"
  }, [_vm._v("11:09 PM - 1 Jan 2016")])])]), _vm._v(" "), _c('footer', {
    staticClass: "card-footer"
  }, [_c('p', {
    staticClass: "card-footer-item"
  }, [_c('span', [_vm._v("\n        Pray\n      ")])]), _vm._v(" "), _c('p', {
    staticClass: "card-footer-item"
  }, [_c('span', [_vm._v("\n        Save\n      ")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f420c04", module.exports)
  }
}

/***/ })

});