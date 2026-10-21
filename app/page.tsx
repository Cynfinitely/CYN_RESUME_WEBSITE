import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutModal } from "@/components/AboutModal";
import { SkillsModal } from "@/components/SkillsModal";
import { ProjectsModal } from "@/components/ProjectsModal";
import { ExperienceModal } from "@/components/ExperienceModal";
import { YouTubeModal } from "@/components/YouTubeModal";
import { getLatestVideos } from "@/lib/youtube";

export default async function HomePage() {
  const videos = await getLatestVideos();

  return (
    <div className="page-shell">
      <Header />

      <main className="newspaper-grid">
        <section className="grid-col grid-col--about" aria-label="About">
          <AboutModal />
        </section>

        <section className="grid-col grid-col--skills" aria-label="Skills">
          <SkillsModal />
        </section>

        <section className="grid-col grid-col--portrait" aria-label="Portrait">
          <span className="col-section-label" aria-hidden="true">
            Correspondent
          </span>
          <div className="portrait-frame">
            <Image
              src="/img/g1.png"
              alt="Portrait of Celal Yasin Nari"
              width={500}
              height={500}
              priority
              className="portrait-image"
            />
            <p className="portrait-caption">
              Celal Yasin Nari &mdash; Senior Full Stack Developer, Helsinki
            </p>
          </div>
        </section>

        <section className="grid-col grid-col--projects" aria-label="Projects">
          <ProjectsModal />
        </section>

        <section
          className="grid-col grid-col--more"
          aria-label="Experience and YouTube"
        >
          <ExperienceModal />
          <div className="section-spacer">
            <YouTubeModal videos={videos} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
