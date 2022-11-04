import './public-path';
import { createApp } from 'vue';

import App from './App.vue';
import './registerServiceWorker';
import { setupRouter } from './router';
import { setupStore } from './store';
import { setupAntd, setupAssets } from './plugins';
import { setupI18n } from './locales';

let app: SafeAny = null;

async function setupPlugins(app: SafeAny) {
  // configure store with pinia
  setupStore(app);

  // import global antd components
  setupAntd(app);

  // import static assets
  setupAssets();

  // configure router
  setupRouter(app);

  await setupI18n(app);
}

async function setupApp(container?: SafeAny) {
  app.mount(container ? container.querySelector('#mainApp') : '#mainApp');
}

async function render(props: SafeAny) {
  app = createApp(App);
  const { container } = props;
  await setupPlugins(app);
  setupApp(container);
}

// console.log((window as any).__POWERED_BY_QIANKUN__);
// if (!(window as any).__POWERED_BY_QIANKUN__) {
//   render({});
// }

if (!(window as SafeAny).__POWERED_BY_QIANKUN__) {
  console.log('trigger not qiankun');
  render({});
}

export async function bootstrap() {
  console.log('bootstrap');
}

// Would be triggered when app starts
export async function mount(props: SafeAny) {
  console.log('mount', props);
  render(props);
}

// Would be triggered when app uninstalled
export async function unmount() {
  console.log('unmount');
  app.unmount();
}
