"use strict";
globalThis["webpackHotUpdatechrome_extension"]("popup",{

/***/ "./src/popup/Popup.jsx":
/*!*****************************!*\
  !*** ./src/popup/Popup.jsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Container/Container.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Stack/Stack.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Avatar/Avatar.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/List/List.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/ListItem/ListItem.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Typography/Typography.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Divider/Divider.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/TextField/TextField.js");
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/ */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_ThumbUpOffAlt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ThumbUpOffAlt */ "./node_modules/@mui/icons-material/ThumbUpOffAlt.js");
/* harmony import */ var _mui_icons_material_ThumbDownOffAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ThumbDownOffAlt */ "./node_modules/@mui/icons-material/ThumbDownOffAlt.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
/* eslint-disable no-undef */







const Popup = () => {
  const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [rerender, setRerender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const GET_COMMENTS = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query getComments($location: String!) {
    getComments(location: $location) {
      username
      text
    }
  }
`;
  const CREATE_COMMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  mutation createComment($commentText: CreateCommentInput!){
    createComment(commentText: $commentText ){
      username
      text
      time
    } 
  }
`;
  const [createComment, {
    data: data2
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(CREATE_COMMENT);
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(GET_COMMENTS, {
    variables: {
      location: "www.apolographql.com"
    }
  });
  console.log('data', data);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //setLoading(true);
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      const url = tabs[0].url.split('/')[2];
      console.log('url', url);
      setLocation(url);
      console.log('location:', location);
      setReviews(data.getComments);
      // axios.get(`http://localhost:3000/graphql/${encodeURIComponent(url)}`)
      //   .then((res) => {
      //     const reviews = res.data;
      //     console.log('reviews', reviews)
      //     const temp = [];
      //     reviews.forEach(review => {
      //       temp.push(<ListItem alignItems='flex-start' key={review._id}>
      //         <ListItemAvatar>
      //           <Avatar />
      //         </ListItemAvatar>
      //         <ListItemText
      //           primary={`${review.username} - ${moment(review.time).format('HH:mm DD MMM')}`}
      //           secondary={<Typography
      //             sx={{ wordWrap: 'break-word' }}>{review.comment}</Typography>}
      //         />
      //       </ListItem>, <Divider />);
      //     });
      //     temp.length > 0 ? setReviews(temp) : setReviews(<Typography sx={{ display: 'flex', alignContent: 'center' }}>No
      //       reviews!</Typography>);
      //     //setLoading(false);
      //   });
    });
  }, [location, data]);
  const handleUserInput = e => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };
  const submit = async () => {
    //setLoading(true);
    // chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    //   const url = tabs[0].url.split('/')[2];
    // axios.post(process.env.base_url, {
    //   time: new Date().toISOString(),
    //   location: url,
    //   isLiked: true,
    //   username: 'choenix',
    //   comment: userInput,
    // })
    //   .then((res) => {
    //     setLoading(false);
    //     setUserInput('');
    //     setRerender(!rerender);
    //     setError(false);
    //   })
    //   .catch((err) => {
    //     setError(true);
    //     setLoading(false);
    //   });
    //});
    createComment({
      variables: {
        commentText: {
          time: new Date().toISOString(),
          location,
          isLiked: true,
          username: 'choenix',
          text: userInput
        }
      }
    });
    setRerender(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      m: 2,
      display: 'flex',
      justifyContent: 'spaceBetween',
      flexWrap: 'wrap',
      width: '100%',
      minWidth: '20rem',
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_8__["default"], {
    alt: "Remy Sharp",
    src: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Adam Lambert")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ThumbUpOffAlt__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "success"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ThumbDownOffAlt__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "error"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      mt: 4
    },
    spacing: '2rem',
    maxHeight: '10rem'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper'
    }
  }, loading ? reviews.map(review => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_12__["default"], {
      alignItems: "flex-start",
      key: review._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_14__["default"], {
      primary: `${review.username} - ${moment__WEBPACK_IMPORTED_MODULE_2___default()(review.time).format('HH:mm DD MMM')}`,
      secondary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_15__["default"], {
        sx: {
          wordWrap: 'break-word'
        }
      }, review.text)
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_16__["default"], null));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_18__["default"], {
    error: error,
    value: userInput,
    onChange: handleUserInput,
    variant: "outlined",
    label: "Type your comment here",
    sx: {
      width: '100%'
    },
    fullWidth: true,
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material___WEBPACK_IMPORTED_MODULE_19__["default"], {
    variant: "contained",
    sx: {
      mt: 1
    },
    onClick: submit,
    size: "small",
    color: "inherit"
  }, "Send"));
};
__signature__(Popup, "useState{[userInput, setUserInput]('')}\nuseState{[error, setError](false)}\nuseState{[loading, setLoading](false)}\nuseState{[reviews, setReviews]([])}\nuseState{[rerender, setRerender](false)}\nuseState{[location, setLocation]('')}\nuseMutation{[createComment, {data: data2}]}\nuseQuery{{data}}\nuseEffect{}", () => [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery]);
const _default = Popup;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Popup, "Popup", "D:\\works\\Chrome-extension-with-react-and-graphql\\src\\popup\\Popup.jsx");
  reactHotLoader.register(_default, "default", "D:\\works\\Chrome-extension-with-react-and-graphql\\src\\popup\\Popup.jsx");
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
/******/ 	__webpack_require__.h = () => ("c8a4596fc76e967d9018")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.bc2c3c6bc0ba6e60a6a0.hot-update.js.map