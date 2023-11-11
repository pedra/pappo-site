import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6be56a3a.mjs';
import './chunks/astro_aa9623e8.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_825b86ff.mjs');
const _page1  = () => import('./chunks/index_83dc7efd.mjs');
const _page2  = () => import('./chunks/rss_3c0447b4.mjs');
const _page3  = () => import('./chunks/about_49755b1d.mjs');
const _page4  = () => import('./chunks/index_29c72eb4.mjs');
const _page5  = () => import('./chunks/_.._f13acacb.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/rss.xml.js", _page2],["src/pages/about.astro", _page3],["src/pages/blog/index.astro", _page4],["src/pages/blog/[...slug].astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
