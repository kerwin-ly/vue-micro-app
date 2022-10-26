<template>
  <div>
    <p>This is MicroContainer</p>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
// import store from '@/store';
import { start, registerMicroApps } from 'qiankun';
export default {
  created() {
    console.log('created micro container');
  },
  mounted() {
    console.log('mount micro container');
    this.loadMicroApp();
  },
  methods: {
    loadMicroApp() {
      registerMicroApps(
        [
          {
            name: 'micro-app',
            // entry: process.env.MICRO_APP,
            entry: 'http://localhost:8082', // 生产环境后面加'/'
            activeRule: '/micro',
            container: '#subapp-viewport', // 子应用挂载的div
            props: {
              routerBase: '/micro' // 下发基础路由
              // getGlobalState: store.getGlobalState // 下发getGlobalState方法
            }
          }
        ],
        {
          beforeLoad: app => {
            console.log('before load app.name====>>>>>', app.name);
          },
          beforeMount: [
            app => {
              console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
            }
          ],
          afterMount: [
            app => {
              console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
            }
          ],
          afterUnmount: [
            app => {
              console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
            }
          ]
        }
      );
      start();
    }
  }
};
</script>
