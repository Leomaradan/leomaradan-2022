import './global.less';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import App from './App.svelte';

const app = new App({
  target: document.body
});

export default app;
