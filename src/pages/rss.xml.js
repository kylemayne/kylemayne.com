import rss from '@astrojs/rss';
import { writingSortedForIndex } from '../data/writing';

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
      pubDate: article.data.pubDate,
      description:
        article.data.description ?? article.body.slice(0, 300).trim(),
      link: `/writing/${article.slug}/`,
    })),
  });
}
