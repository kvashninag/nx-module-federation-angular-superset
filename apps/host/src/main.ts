import { init } from '@module-federation/enhanced/runtime';

fetch('/assets/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => init({name: '@module-federation-examples/host', remotes: definitions}))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
