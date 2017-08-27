webpackJsonp([4],{

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(42),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/joe3m/Code/SocialPrayer/SocialPrayer_back/resources/assets/js/components/Welcome.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Welcome.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f7498290", Component.options)
  } else {
    hotAPI.reload("data-v-f7498290", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 41:
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "hero is-fullheight is-primary"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container is-padded-top"
  }, [_c('div', {
    staticClass: "columns is-centered is-multiline is-mobile"
  }, [_c('div', {
    staticClass: "column is-12"
  }), _vm._v(" "), _c('div', {
    staticClass: "column is-12"
  }), _vm._v(" "), _c('div', {
    staticClass: "column is-12"
  }), _vm._v(" "), _c('div', {
    staticClass: "column is-12"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "column is-12"
  }, [_c('div', {
    staticClass: "columns is-multiline is-centered"
  }, [_c('div', {
    staticClass: "column is-2 has-text-centered is-size-3-desktop is-size-5-touch"
  }, [_c('router-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Login")])], 1), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
    staticClass: "column is-12"
  }), _vm._v(" "), _c('div', {
    staticClass: "column is-12"
  }), _vm._v(" "), _c('div', {
    staticClass: "column is-12"
  }), _vm._v(" "), _c('div', {
    staticClass: "column is-12"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "columns is-centered is-multiline"
  }, [_c('div', {
    staticClass: "column is-12"
  }), _vm._v(" "), _c('div', {
    staticClass: "column is-6"
  }, [_c('prayer')], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "column is-12"
  }, [_c('div', {
    staticClass: "is-size-1-desktop is-size-2-touch title has-text-centered",
    staticStyle: {
      "font-weight": "100"
    }
  }, [_vm._v("\n            SocialPrayer\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "is-size-5-desktop is-size-7-touch subtitle has-text-centered"
  }, [_vm._v("\n            If we pray together, there is nothing we cannot accomplish\n          ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "column is-12 has-text-centered"
  }, [_c('img', {
    staticClass: "image-size-30-touch image-size-10-desktop",
    attrs: {
      "src": "/images/logos/social-prayer-logo-square.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "column is-2 has-text-centered is-size-3-desktop is-size-5-touch"
  }, [_c('a', {
    attrs: {
      "href": "/login"
    }
  }, [_vm._v("Register")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f7498290", module.exports)
  }
}

/***/ })

});