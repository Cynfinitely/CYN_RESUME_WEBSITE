import type { YouTubeVideo } from "@/lib/youtube";
import { socials } from "@/data/socials";
import { SectionModal } from "@/components/SectionModal";
import { VideoCard } from "@/components/VideoCard";

type YouTubeModalProps = {
  videos: YouTubeVideo[];
};

export function YouTubeModal({ videos }: YouTubeModalProps) {
  return (
    <SectionModal
      id="youtube"
      label="YouTube"
      sectionLabel="Media"
      teaserText="Developer content on job hunting, mentoring, and real-world software engineering @CynCoding."
      wide
    >
      <p>
        Developer-focused content on job hunting, mentoring, and real-world
        software engineering.{" "}
        <a href={socials.youtube} target="_blank" rel="noopener noreferrer">
          Visit @CynCoding <span aria-hidden="true">&#8599;</span>
        </a>
      </p>
      {videos.length === 0 ? (
        <p className="modal-empty">
          The latest videos couldn&rsquo;t be loaded right now.{" "}
          <a href={socials.youtube} target="_blank" rel="noopener noreferrer">
            Watch on YouTube <span aria-hidden="true">&#8599;</span>
          </a>
        </p>
      ) : (
        <div className="video-grid">
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </SectionModal>
  );
}
