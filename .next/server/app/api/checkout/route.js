"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/checkout/route";
exports.ids = ["app/api/checkout/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheckout%2Froute&page=%2Fapi%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheckout%2Froute.ts&appDir=%2FUsers%2Fhaythamabouelfaid%2FDownloads%2Ftrademind%202%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhaythamabouelfaid%2FDownloads%2Ftrademind%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheckout%2Froute&page=%2Fapi%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheckout%2Froute.ts&appDir=%2FUsers%2Fhaythamabouelfaid%2FDownloads%2Ftrademind%202%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhaythamabouelfaid%2FDownloads%2Ftrademind%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_haythamabouelfaid_Downloads_trademind_2_src_app_api_checkout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/checkout/route.ts */ \"(rsc)/./src/app/api/checkout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/checkout/route\",\n        pathname: \"/api/checkout\",\n        filename: \"route\",\n        bundlePath: \"app/api/checkout/route\"\n    },\n    resolvedPagePath: \"/Users/haythamabouelfaid/Downloads/trademind 2/src/app/api/checkout/route.ts\",\n    nextConfigOutput,\n    userland: _Users_haythamabouelfaid_Downloads_trademind_2_src_app_api_checkout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/checkout/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGVja291dCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY2hlY2tvdXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjaGVja291dCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmhheXRoYW1hYm91ZWxmYWlkJTJGRG93bmxvYWRzJTJGdHJhZGVtaW5kJTIwMiUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZoYXl0aGFtYWJvdWVsZmFpZCUyRkRvd25sb2FkcyUyRnRyYWRlbWluZCUyMDImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDc0Q7QUFDdkM7QUFDMEM7QUFDekc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhZGVtaW5kLz85N2FjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaGF5dGhhbWFib3VlbGZhaWQvRG93bmxvYWRzL3RyYWRlbWluZCAyL3NyYy9hcHAvYXBpL2NoZWNrb3V0L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jaGVja291dC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NoZWNrb3V0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGVja291dC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9oYXl0aGFtYWJvdWVsZmFpZC9Eb3dubG9hZHMvdHJhZGVtaW5kIDIvc3JjL2FwcC9hcGkvY2hlY2tvdXQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY2hlY2tvdXQvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheckout%2Froute&page=%2Fapi%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheckout%2Froute.ts&appDir=%2FUsers%2Fhaythamabouelfaid%2FDownloads%2Ftrademind%202%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhaythamabouelfaid%2FDownloads%2Ftrademind%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/checkout/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/checkout/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n// src/app/api/checkout/route.ts\n\n\nfunction getStripe() {\n    const key = process.env.STRIPE_SECRET_KEY;\n    if (!key) throw new Error(\"Missing STRIPE_SECRET_KEY\");\n    return new stripe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](key);\n}\nasync function POST(req) {\n    try {\n        const stripe = getStripe();\n        const { success_url, cancel_url } = await req.json();\n        // Fetch the price via lookup key (safer than hardcoding an ID)\n        const prices = await stripe.prices.list({\n            lookup_keys: [\n                \"trademind_pro_monthly\"\n            ],\n            expand: [\n                \"data.product\"\n            ],\n            limit: 1\n        });\n        const price = prices.data[0];\n        if (!price) throw new Error(\"Price with lookup_key=trademind_pro_monthly not found\");\n        const session = await stripe.checkout.sessions.create({\n            mode: \"subscription\",\n            line_items: [\n                {\n                    price: price.id,\n                    quantity: 1\n                }\n            ],\n            success_url,\n            cancel_url,\n            allow_promotion_codes: true\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            ok: true,\n            url: session.url\n        });\n    } catch (e) {\n        console.error(\"[checkout] error:\", e);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            ok: false,\n            error: e.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jaGVja291dC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnQ0FBZ0M7QUFDd0I7QUFDNUI7QUFFNUIsU0FBU0U7SUFDUCxNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtJQUN6QyxJQUFJLENBQUNILEtBQUssTUFBTSxJQUFJSSxNQUFNO0lBQzFCLE9BQU8sSUFBSU4sOENBQU1BLENBQUNFO0FBQ3BCO0FBRU8sZUFBZUssS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1DLFNBQVNSO1FBQ2YsTUFBTSxFQUFFUyxXQUFXLEVBQUVDLFVBQVUsRUFBRSxHQUFHLE1BQU1ILElBQUlJLElBQUk7UUFFbEQsK0RBQStEO1FBQy9ELE1BQU1DLFNBQVMsTUFBTUosT0FBT0ksTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFDdENDLGFBQWE7Z0JBQUM7YUFBd0I7WUFDdENDLFFBQVE7Z0JBQUM7YUFBZTtZQUN4QkMsT0FBTztRQUNUO1FBQ0EsTUFBTUMsUUFBUUwsT0FBT00sSUFBSSxDQUFDLEVBQUU7UUFDNUIsSUFBSSxDQUFDRCxPQUFPLE1BQU0sSUFBSVosTUFBTTtRQUU1QixNQUFNYyxVQUFVLE1BQU1YLE9BQU9ZLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7WUFDcERDLE1BQU07WUFDTkMsWUFBWTtnQkFBQztvQkFBRVAsT0FBT0EsTUFBTVEsRUFBRTtvQkFBRUMsVUFBVTtnQkFBRTthQUFFO1lBQzlDakI7WUFDQUM7WUFDQWlCLHVCQUF1QjtRQUN6QjtRQUVBLE9BQU83QixrRkFBWUEsQ0FBQ2EsSUFBSSxDQUFDO1lBQUVpQixJQUFJO1lBQU1DLEtBQUtWLFFBQVFVLEdBQUc7UUFBQztJQUN4RCxFQUFFLE9BQU9DLEdBQVE7UUFDZkMsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQkY7UUFDbkMsT0FBT2hDLGtGQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRWlCLElBQUk7WUFBT0ksT0FBT0YsRUFBRUcsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzFFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFkZW1pbmQvLi9zcmMvYXBwL2FwaS9jaGVja291dC9yb3V0ZS50cz9iNjcxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL2NoZWNrb3V0L3JvdXRlLnRzXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuZnVuY3Rpb24gZ2V0U3RyaXBlKCkge1xuICBjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWTtcbiAgaWYgKCFrZXkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgU1RSSVBFX1NFQ1JFVF9LRVlcIik7XG4gIHJldHVybiBuZXcgU3RyaXBlKGtleSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdHJpcGUgPSBnZXRTdHJpcGUoKTtcbiAgICBjb25zdCB7IHN1Y2Nlc3NfdXJsLCBjYW5jZWxfdXJsIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgLy8gRmV0Y2ggdGhlIHByaWNlIHZpYSBsb29rdXAga2V5IChzYWZlciB0aGFuIGhhcmRjb2RpbmcgYW4gSUQpXG4gICAgY29uc3QgcHJpY2VzID0gYXdhaXQgc3RyaXBlLnByaWNlcy5saXN0KHtcbiAgICAgIGxvb2t1cF9rZXlzOiBbXCJ0cmFkZW1pbmRfcHJvX21vbnRobHlcIl0sXG4gICAgICBleHBhbmQ6IFtcImRhdGEucHJvZHVjdFwiXSxcbiAgICAgIGxpbWl0OiAxLFxuICAgIH0pO1xuICAgIGNvbnN0IHByaWNlID0gcHJpY2VzLmRhdGFbMF07XG4gICAgaWYgKCFwcmljZSkgdGhyb3cgbmV3IEVycm9yKFwiUHJpY2Ugd2l0aCBsb29rdXBfa2V5PXRyYWRlbWluZF9wcm9fbW9udGhseSBub3QgZm91bmRcIik7XG5cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICBtb2RlOiBcInN1YnNjcmlwdGlvblwiLFxuICAgICAgbGluZV9pdGVtczogW3sgcHJpY2U6IHByaWNlLmlkLCBxdWFudGl0eTogMSB9XSxcbiAgICAgIHN1Y2Nlc3NfdXJsLFxuICAgICAgY2FuY2VsX3VybCxcbiAgICAgIGFsbG93X3Byb21vdGlvbl9jb2RlczogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG9rOiB0cnVlLCB1cmw6IHNlc3Npb24udXJsIH0pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW2NoZWNrb3V0XSBlcnJvcjpcIiwgZSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgb2s6IGZhbHNlLCBlcnJvcjogZS5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJTdHJpcGUiLCJnZXRTdHJpcGUiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJFcnJvciIsIlBPU1QiLCJyZXEiLCJzdHJpcGUiLCJzdWNjZXNzX3VybCIsImNhbmNlbF91cmwiLCJqc29uIiwicHJpY2VzIiwibGlzdCIsImxvb2t1cF9rZXlzIiwiZXhwYW5kIiwibGltaXQiLCJwcmljZSIsImRhdGEiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsIm1vZGUiLCJsaW5lX2l0ZW1zIiwiaWQiLCJxdWFudGl0eSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsIm9rIiwidXJsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/checkout/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/hasown","vendor-chunks/get-intrinsic","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/call-bound"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcheckout%2Froute&page=%2Fapi%2Fcheckout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcheckout%2Froute.ts&appDir=%2FUsers%2Fhaythamabouelfaid%2FDownloads%2Ftrademind%202%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhaythamabouelfaid%2FDownloads%2Ftrademind%202&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();