
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular"
  },
  {
    "renderMode": 2,
    "route": "/Angular/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/Angular/productos"
  },
  {
    "renderMode": 2,
    "route": "/Angular/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Angular",
    "route": "/Angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1366, hash: 'c36cdfa7fd6ee01fb2a7dfec2d7876cd7d2aee00398b9dbce08f070e897d6314', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1554, hash: 'cef376ed665cd450f21e8d39b1652f9df6e310ae3660ad55c3a7d82805b96c34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6125, hash: 'b2d90c3c9531977cf573ba2485b55f6b3ec0899bc75f929dcb538dbeb801b0aa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 8091, hash: '57cad80b1e0343065862ab90f066d36e1d666ca1874bdf3bfd42dede890eca01', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 7411, hash: '0d5f04e472a52f42f70b4b24056823a8f7e19f8c166c64ea41ecdb49a26ed301', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 7437, hash: 'eddd13600009b7e9f32d5e5cb2dc3b40c4ed5945ccdbc675c4d1482469a26120', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-G3RYJPTB.css': {size: 200, hash: 'OK3bu2PYmq4', text: () => import('./assets-chunks/styles-G3RYJPTB_css.mjs').then(m => m.default)}
  },
};
