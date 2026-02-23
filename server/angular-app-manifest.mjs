
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/institute-panel"
  },
  {
    "renderMode": 2,
    "route": "/list-candidate"
  },
  {
    "renderMode": 2,
    "route": "/monitor"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 64077, hash: '652490728ee0f62565a572b4f208e55b44c2e4846b55ab4c38c144c51a00c59f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17184, hash: '9f121f7f53f4d07b4efee74fe9bca7ce826348c869f75048855784e1db45d031', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 66912, hash: 'e696b78612dde9b6bef2b1832d0e827844288a5557ecaeb81a5f19dae7d07c11', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'institute-panel/index.html': {size: 71059, hash: 'b49c99cefc9f9efef0ce5309fa524c621bf13687c69903930dd98f2d1feb8582', text: () => import('./assets-chunks/institute-panel_index_html.mjs').then(m => m.default)},
    'list-candidate/index.html': {size: 144414, hash: '7c44c9db44e2f5c2a7b64313b181ae8dc33979b312f0a299cd8779bd6dad9731', text: () => import('./assets-chunks/list-candidate_index_html.mjs').then(m => m.default)},
    'monitor/index.html': {size: 156981, hash: 'f970ecda3d661990a7f99fa9cfbb93bac28de520064f37fa7fabdc4e110b3335', text: () => import('./assets-chunks/monitor_index_html.mjs').then(m => m.default)},
    'styles-GETCWGA6.css': {size: 89802, hash: 'GzDi/Xx2rZo', text: () => import('./assets-chunks/styles-GETCWGA6_css.mjs').then(m => m.default)}
  },
};
