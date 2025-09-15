import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Sertification from "./components/Sertification";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Project />
      <Sertification />
      <WorkExperience />
      <Footer />
    </main>
  );
}
