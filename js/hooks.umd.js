!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],t):t(n.preactHooks={},n.preact)}(this,function(n,t){var r,u,e=[],i=t.options.__r;t.options.__r=function(n){i&&i(n),r=0,(u=n.__c).__H&&(u.__H.t=l(u.__H.t))};var f=t.options.diffed;t.options.diffed=function(n){f&&f(n);var t=n.__c;if(t){var r=t.__H;r&&(r.u=(r.u.some(function(n){n.ref&&(n.ref.current=n.createHandle())}),[]),r.i=l(r.i))}};var o=t.options.unmount;function c(n){t.options.__h&&t.options.__h(u);var r=u.__H||(u.__H={o:[],t:[],i:[],u:[]});return n>=r.o.length&&r.o.push({}),r.o[n]}function a(n,t,e){var i=c(r++);return i.__c||(i.__c=u,i.v=[e?e(t):x(void 0,t),function(t){var r=n(i.v[0],t);i.v[0]!==r&&(i.v[0]=r,i.__c.setState({}))}]),i.v}function v(n,t){var u=c(r++);return _(u.p,t)?(u.p=t,u.s=n,u.v=n()):u.v}t.options.unmount=function(n){o&&o(n);var t=n.__c;if(t){var r=t.__H;r&&r.o.forEach(function(n){return n.l&&n.l()})}};var d=function(){};function p(){e.some(function(n){n.m=!1,n.__P&&(n.__H.t=l(n.__H.t))}),e=[]}if("undefined"!=typeof window){var s=t.options.requestAnimationFrame;d=function(n){(!n.m&&(n.m=!0)&&1===e.push(n)||s!==t.options.requestAnimationFrame)&&(s=t.options.requestAnimationFrame,(t.options.requestAnimationFrame||function(n){var t=function(){clearTimeout(r),cancelAnimationFrame(u),setTimeout(n)},r=setTimeout(t,100),u=requestAnimationFrame(t)})(p))}}function l(n){return n.forEach(m),n.forEach(y),[]}function m(n){n.l&&n.l()}function y(n){var t=n.v();"function"==typeof t&&(n.l=t)}function _(n,t){return!n||t.some(function(t,r){return t!==n[r]})}function x(n,t){return"function"==typeof t?t(n):t}n.useState=function(n){return a(x,n)},n.useReducer=a,n.useEffect=function(n,t){var e=c(r++);_(e.p,t)&&(e.v=n,e.p=t,u.__H.t.push(e),d(u))},n.useLayoutEffect=function(n,t){var e=c(r++);_(e.p,t)&&(e.v=n,e.p=t,u.__H.i.push(e))},n.useRef=function(n){return v(function(){return{current:n}},[])},n.useImperativeHandle=function(n,t,e){var i=c(r++);_(i.p,e)&&(i.p=e,u.__H.u.push({ref:n,createHandle:t}))},n.useMemo=v,n.useCallback=function(n,t){return v(function(){return n},t)},n.useContext=function(n){var t=u.context[n.__c];if(!t)return n.__p;var e=c(r++);return null==e.v&&(e.v=!0,t.sub(u)),t.props.value},n.useDebugValue=function(n,r){t.options.useDebugValue&&t.options.useDebugValue(r?r(n):n)}});