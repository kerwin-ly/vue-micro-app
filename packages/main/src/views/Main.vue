<template>
  <div>
    <p>This is Main</p>
    <div style="height: 500px; border: 1px solid red;">
      <router-view></router-view>
      <div id="microAppContainer"></div>
    </div>
  </div>
</template>

<script>
import { start } from 'qiankun';
export default {
  mounted() {
    if (!window.qiankunStarted) {
      console.log('start render micro app');
      window.qiankunStarted = true;
      start();
    }
  }
};
</script>
