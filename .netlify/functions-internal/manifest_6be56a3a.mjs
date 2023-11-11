import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_aa9623e8.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')"}],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.382ac49c.js"},{"stage":"head-inline","children":"'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')"}],"styles":[{"type":"external","src":"/_astro/about.0c45b8a4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')"}],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.382ac49c.js"},{"stage":"head-inline","children":"'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')"}],"styles":[{"type":"external","src":"/_astro/about.0c45b8a4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.382ac49c.js"},{"stage":"head-inline","children":"'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')"}],"styles":[{"type":"external","src":"/_astro/about.0c45b8a4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.382ac49c.js"},{"stage":"head-inline","children":"'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')"}],"styles":[{"type":"external","src":"/_astro/about.0c45b8a4.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_01da523b.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_93764130.mjs","\u0000@astrojs-manifest":"manifest_6be56a3a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_825b86ff.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_83dc7efd.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_3c0447b4.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_49755b1d.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_29c72eb4.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._f13acacb.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_73c4036e.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_01b2cf06.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_2f83d1c3.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_174c9e0d.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_d5633ef0.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_51c55fd9.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_aef4a15d.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_9edaf9d8.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_54f3dc20.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_446a870e.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/first-post.md":"chunks/first-post_94623b6e.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_860c1f40.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/second-post.md":"chunks/second-post_417f52e1.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/third-post.md":"chunks/third-post_862065c9.mjs","D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/content/blog/using-mdx.mdx":"chunks/using-mdx_cc2de041.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.382ac49c.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.0c45b8a4.css","/blog-placeholder-about.jpg","/favicon.svg","/blog/1.png","/blog/2.jpg","/blog/3.jpg","/blog/4.jpg","/blog/5.jpg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/img/a.jpg","/img/b.jpg","/img/bg.jpg","/img/bg.png","/img/logo.png","/media/Apresentacao-Sebrae.mp4","/media/Apresentacao-Sebrae.png","/_astro/hoisted.382ac49c.js"]});

export { manifest };
