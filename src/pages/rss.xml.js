import rss from '@astrojs/rss';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { writingSortedForIndex } from '../data/writing';

const parser = new MarkdownIt();
const AUTHOR = 'Kyle Mayne';

function articleHtml(body) {
  return sanitizeHtml(parser.render(body), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
  });
}

export async function GET(context) {
  const articles = await writingSortedForIndex();

  return rss({
    title: 'Kyle Mayne — Writing',
    description: 'Writing by Kyle Mayne on design, product, and leadership.',
    site: context.site,
    trailingSlash: true,
    customData: '<language>en-gb</language>',
    items: articles.map((article) => ({
      title: article.data.title,
      author: AUTHOR,
      pubDate: article.data.pubDate,
      description:
        article.data.description ?? article.body.slice(0, 300).trim(),
      link: `/writing/${article.slug}/`,
      content: articleHtml(article.body),
    })),
  });
}
