"use client";

import Image from "next/image";
import { useState } from "react";
import type { YouTubeVideo } from "@/lib/youtube";

export function VideoCard({ video }: { video: YouTubeVideo }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="video-card">
      <div className="video-frame">
        {isPlaying ? (
          <iframe
            // Keep focus inside the modal when the play button is replaced
            ref={(frame) => frame?.focus()}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-play"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video: ${video.title}`}
          >
            <Image
              src={video.thumbnail}
              alt=""
              fill
              sizes="(min-width: 640px) 480px, 100vw"
              className="video-thumb"
            />
            <span className="video-play__icon" aria-hidden="true">
              &#9654;
            </span>
          </button>
        )}
      </div>
      <h3 className="video-card__title">
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {video.title}
        </a>
      </h3>
      <time dateTime={video.publishedAt}>
        {new Date(video.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "UTC",
        })}
      </time>
    </article>
  );
}
