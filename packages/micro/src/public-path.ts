// src/public-path.ts
if ((window as SafeAny).__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = (window as SafeAny).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// (function () {
//   if ((window as any).__POWERED_BY_QIANKUN__) {
//     if (process.env.NODE_ENV === 'development') {
//       // eslint-disable-next-line
//       __webpack_public_path__ = `//localhost:8082/micro`;
//       return;
//     }
//     // eslint-disable-next-line
//     __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
//     // __webpack_public_path__ = `${process.env.BASE_URL}/`
//   }
// })();
