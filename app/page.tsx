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
    <main className="page-shell">
      <Header />

      <div className="newspaper-grid">
        <section className="grid-col grid-col--about" aria-label="About section">
          <AboutModal />
        </section>

        <section className="grid-col grid-col--skills" aria-label="Skills section">
          <SkillsModal />
        </section>

        <section className="grid-col grid-col--portrait" aria-label="Portrait">
          <div className="portrait-frame">
            <Image
              src="/img/g1.png"
              alt="Portrait of Celal Yasin Nari"
              width={400}
              height={500}
              priority
              className="portrait-image"
            />
          </div>
        </section>

        <section className="grid-col grid-col--projects" aria-label="Projects section">
          <ProjectsModal />
        </section>

        <section className="grid-col grid-col--more" aria-label="Experience and YouTube">
          <ExperienceModal />
          <div className="section-spacer">
            <YouTubeModal videos={videos} />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
