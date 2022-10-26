import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { registerMicroApps, start } from 'qiankun';
// import microApps from './micro-app';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
// console.log(process.env.MICRO_APP);
// registerMicroApps(
//   [
//     {
//       name: 'micro-app',
//       // entry: process.env.MICRO_APP,
//       entry: '//localhost:8082/micro', // 生产环境后面加'/'
//       activeRule: '/micro',
//       container: '#subapp-viewport', // 子应用挂载的div
//       props: {
//         routerBase: '/micro', // 下发基础路由
//         getGlobalState: store.getGlobalState // 下发getGlobalState方法
//       }
//     }
//   ],
//   {
//     beforeLoad: app => {
//       console.log('before load app.name====>>>>>', app.name);
//     },
//     beforeMount: [
//       app => {
//         console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
//       }
//     ],
//     afterMount: [
//       app => {
//         console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
//       }
//     ],
//     afterUnmount: [
//       app => {
//         console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
//       }
//     ]
//   }
// );
// setDefaultMountApp('/micro');
// start();
registerMicroApps([
  {
    name: 'app-vue-history',
    entry: 'http://localhost:2222',
    container: '#appContainer',
    activeRule: '/app-vue-history',
    props: { data: store }
  }
]);

start();
