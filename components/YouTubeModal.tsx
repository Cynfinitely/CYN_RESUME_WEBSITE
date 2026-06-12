"use client";

import Image from "next/image";
import { useState } from "react";
import type { YouTubeVideo } from "@/lib/youtube";
import { socials } from "@/data/socials";
import { InkModal } from "@/components/Modal/InkModal";
import { SectionButton } from "@/components/SectionButton";

type YouTubeModalProps = {
  videos: YouTubeVideo[];
};

export function YouTubeModal({ videos }: YouTubeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SectionButton
        label="YouTube"
        sectionLabel="Media"
        teaserText="Developer content on job hunting, mentoring, and real-world software engineering @CynCoding."
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
      />
      <InkModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="YouTube">
        <div className="youtube-section">
          <p className="youtube-intro">
            Developer-focused content on job hunting, mentoring, and real-world software
            engineering.{" "}
            <a href={socials.youtube} target="_blank" rel="noopener noreferrer">
              Visit @CynCoding →
            </a>
          </p>
          {videos.length === 0 ? (
            <p>
              Latest videos are loading.{" "}
              <a href={socials.youtube} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
            </p>
          ) : (
            <div className="video-grid">
              {videos.map((video) => (
                <article key={video.id} className="video-card">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={480}
                      height={360}
                      className="video-thumb"
                    />
                    <h3>{video.title}</h3>
                    <time dateTime={video.publishedAt}>
                      {new Date(video.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </a>
                  <div className="video-embed">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </InkModal>
    </>
  );
}
