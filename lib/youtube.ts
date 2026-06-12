import { socials } from "@/data/socials";

export type YouTubeVideo = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
};

const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${socials.youtubeChannelId}`;

function parseVideoEntries(xml: string): YouTubeVideo[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];
  const videos: YouTubeVideo[] = [];

  for (const entry of entries.slice(0, 6)) {
    const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = entry.match(/<title>([^<]+)<\/title>/)?.[1];
    const publishedAt = entry.match(/<published>([^<]+)<\/published>/)?.[1];

    if (!id || !title || !publishedAt) continue;

    videos.push({
      id,
      title: title.replace(/&amp;/g, "&").replace(/&#39;/g, "'"),
      publishedAt,
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    });
  }

  return videos;
}

export async function getLatestVideos(): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(RSS_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return [];
    const xml = await response.text();
    return parseVideoEntries(xml);
  } catch {
    return [];
  }
}
