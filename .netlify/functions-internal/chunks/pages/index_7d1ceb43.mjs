import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, o as renderHead, g as addAttribute } from '../astro_aa9623e8.mjs';
import 'clsx';
import { a as $$BaseHead, b as $$Header, c as $$Footer, S as SITE_TITLE, d as SITE_DESCRIPTION, g as getCollection, e as $$FormattedDate } from './__49fe4a61.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head><body><div class="bkg"></div>${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })}<main class="center"><div class="home"><div class="container"><h1>Soluções Estratégicas & Inovadoras</h1><p>
Estamos construindo um lugar onde você será acolhido com...
</p></div></div></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/index.astro", void 0);

const $$file$1 = "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head><body><div class="bkg blur"></div>${renderComponent($$result, "Header", $$Header, {})}<main class="blog"><div class="container"><section class="blog-index"><ul>${posts.map((post) => renderTemplate`<li><a${addAttribute(`/blog/${post.slug}/`, "href")}><img${addAttribute(post.data.heroImage, "src")} alt=""><h4 class="title">${post.data.title}</h4><p class="date">${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })}</p></a></li>`)}</ul></section></div></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/blog/index.astro", void 0);

const $$file = "D:/ESTUDOS/Tayna_projeto_Wordpress/Github/pappo-site/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
