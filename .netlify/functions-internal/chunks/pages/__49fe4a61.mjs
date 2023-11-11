import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderComponent, m as maybeRenderHead, s as spreadAttributes, i as renderSlot, A as AstroError, j as UnknownContentCollectionError, k as renderUniqueStylesheet, l as renderScriptElement, n as createHeadAndContent, u as unescapeHTML, o as renderHead, p as renderTransition } from '../astro_aa9623e8.mjs';
import 'clsx';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                           *//* empty css                                                                    *//* empty css                           */
const $$Astro$7 = createAstro("https://example.com");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$6 = createAstro("https://example.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><!-- <link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin />
<link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin />

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700;900&display=swap" rel="stylesheet"> --><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/components/BaseHead.astro", void 0);

const $$Astro$5 = createAstro("https://example.com");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg>${renderSlot($$result, $$slots["default"])}</a>`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = "PAPPO";
const SITE_DESCRIPTION = "Consultoria Financeira";

const $$Astro$4 = createAstro("https://example.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2><div class="container" data-astro-cid-3ef6ksr2><nav data-astro-cid-3ef6ksr2><div class="logo" data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2><img src="/img/logo.png"${addAttribute(SITE_TITLE, "alt")} data-astro-cid-3ef6ksr2></a></div><div class="internal-links" data-astro-cid-3ef6ksr2>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Início` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`News` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Pappo` })}</div></nav></div></header>`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte><div class="container" data-astro-cid-sz7xmlte><div class="ftr-left" data-astro-cid-sz7xmlte><div class="copy" data-astro-cid-sz7xmlte>
&copy; ${SITE_TITLE}&nbsp;${today.getFullYear()} - Todos os direitos
        reservados.
</div><a href="https://pappoconsult.com.br" class="logo" data-astro-cid-sz7xmlte><img src="/img/logo.png" alt="logo" class="logo" data-astro-cid-sz7xmlte></a></div><div class="ftr-right" data-astro-cid-sz7xmlte><a href="mailto:queroserpappo@pappoconsult.com.br" data-astro-cid-sz7xmlte><div data-astro-cid-sz7xmlte>Email:</div><div data-astro-cid-sz7xmlte>queroserpappo@pappoconsult.com.br</div></a><a href="tel:+5524992544982" data-astro-cid-sz7xmlte><div data-astro-cid-sz7xmlte>Telefone:</div><div data-astro-cid-sz7xmlte>(24) 99254 4982</div></a></div></div></footer>`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/components/Footer.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('../first-post_73c4036e.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide_01b2cf06.mjs'),"/src/content/blog/second-post.md": () => import('../second-post_2f83d1c3.mjs'),"/src/content/blog/third-post.md": () => import('../third-post_174c9e0d.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_d5633ef0.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"first-post":"/src/content/blog/first-post.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md","second-post":"/src/content/blog/second-post.md","third-post":"/src/content/blog/third-post.md","using-mdx":"/src/content/blog/using-mdx.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('../first-post_51c55fd9.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('../markdown-style-guide_aef4a15d.mjs'),"/src/content/blog/second-post.md": () => import('../second-post_9edaf9d8.mjs'),"/src/content/blog/third-post.md": () => import('../third-post_54f3dc20.mjs'),"/src/content/blog/using-mdx.mdx": () => import('../using-mdx_446a870e.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$2 = createAstro("https://example.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}>${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })}</time>`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, heroVideo } = Astro2.props;
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head><body><div class="bkg blur"></div>${renderComponent($$result, "Header", $$Header, {})}<main class="blog"><div class="container"><article><div class="hero-image"${addAttribute(renderTransition($$result, "dtwjjjbx", "", "hero"), "data-astro-transition-scope")}>${heroVideo ? renderTemplate`<video${addAttribute(heroImage, "poster")} autoplay muted loop><source${addAttribute(heroVideo, "src")} type="video/mp4"></video>` : renderTemplate`<img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")}>`}<div class="prose"><div class="title"><div class="date">${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })}${updatedDate && renderTemplate`<div class="last-updated-on">
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate })}</div>`}</div><h1>${title}</h1></div>${renderSlot($$result, $$slots["default"])}</div></div></article></div></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/layouts/BlogPost.astro", "self");

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/blog/[...slug].astro", void 0);

const $$file = "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, SITE_TITLE as S, ____slug_ as _, $$BaseHead as a, $$Header as b, $$Footer as c, SITE_DESCRIPTION as d, $$FormattedDate as e, $$HeaderLink as f, getCollection as g };
