import { type CollectionEntry, getCollection, getEntryBySlug } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;

/** Newest first — used for ordering and “next article” chain */
export async function writingSortedForIndex(): Promise<WritingEntry[]> {
  const entries = await getCollection('writing');

  return [...entries].sort(
    (a, b) =>
      b.data.pubDate.getTime() - a.data.pubDate.getTime() ||
      a.slug.localeCompare(b.slug),
  );
}

/** Same order as listing: newer → older */
export async function getNextArticleSlug(
  currentSlug: string,
): Promise<string | null> {
  const order = await writingSortedForIndex();
  const i = order.findIndex((a) => a.slug === currentSlug);
  if (i === -1 || i === order.length - 1) return null;
  return order[i + 1].slug;
}

export async function getArticle(slug: string): Promise<WritingEntry | undefined> {
  const entry = await getEntryBySlug('writing', slug);
  return entry ?? undefined;
}

/** Years descending; within each year, newest first */
export async function writingGroupedByYear(): Promise<
  { year: number; articles: WritingEntry[] }[]
> {
  const sorted = await writingSortedForIndex();
  const byYear = new Map<number, WritingEntry[]>();

  for (const article of sorted) {
    const year = article.data.pubDate.getFullYear();
    let bucket = byYear.get(year);
    if (!bucket) {
      bucket = [];
      byYear.set(year, bucket);
    }
    bucket.push(article);
  }

  return [...byYear.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, articles]) => ({ year, articles }));
}
