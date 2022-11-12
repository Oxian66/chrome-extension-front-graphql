"use strict";
globalThis["webpackHotUpdatechrome_extension"]("popup",{

/***/ "./src/popup/index.jsx":
/*!*****************************!*\
  !*** ./src/popup/index.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup */ "./src/popup/Popup.jsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/ApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/context/ApolloProvider.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.InMemoryCache(),
  // fetchOptions: {
  //     mode: 'no-cors',
  //   },
  connectToDevTools: true
});
(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {
  client: client
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popup__WEBPACK_IMPORTED_MODULE_2__["default"], null)), window.document.querySelector('#app-container'));

// if (module.hot) module.hot.accept();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(client, "client", "D:\\works\\Chrome-extension-with-react-and-graphql\\src\\popup\\index.jsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8fc206d7adb85167394a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.3ddaaba5a44ae45704bc.hot-update.js.map