"use strict";function _instanceof(e,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}function _classCallCheck(e,n){if(!_instanceof(e,n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}var initiateCkeditor=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];Array.from(n).forEach(function(e){newEditor(e)})},newEditor=function(e){var n=document.querySelector(e);if(null===n)return!1;try{ClassicEditor.create(n).then(function(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return new UploadAdapter(e)}}).catch(function(e){console.error(e)})}catch(e){console.log(e),console.log("Is ckeditor.js included?","https://ckeditor.com/ckeditor-5/download/")}},UploadAdapter=function(){function e(n){_classCallCheck(this,e),this.loader=n}return _createClass(e,[{key:"upload",value:function(){var e=this;return this.loader.file.then(function(n){return new Promise(function(t,r){e._initRequest(),e._initListeners(t,r,n),e._sendRequest(n)})})}},{key:"abort",value:function(){this.xhr&&this.xhr.abort()}},{key:"_initRequest",value:function(){var e=this.xhr=new XMLHttpRequest;e.open("POST","/ckeditor_wave/ck_images",!0),e.responseType="json"}},{key:"_initListeners",value:function(e,n,t){var r=this.xhr,o=this.loader,a="Couldn't upload file: ".concat(t.name,".");r.addEventListener("error",function(){return n(a)}),r.addEventListener("abort",function(){return n()}),r.addEventListener("load",function(){var t=r.response;if(!t||t.error)return n(t&&t.error?t.error.message:a);e({default:t.url})}),r.upload&&r.upload.addEventListener("progress",function(e){e.lengthComputable&&(o.uploadTotal=e.total,o.uploaded=e.loaded)})}},{key:"_sendRequest",value:function(e){var n=new FormData;n.append("ck_image",e),this.xhr.send(n)}}]),e}();