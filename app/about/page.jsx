import Breadcrumb from "@/app/_sections/Breadcrumb";
import AboutHero from "@/app/_sections/AboutHero";
import AboutContent from "@/app/_sections/AboutContent";
import Team from "@/app/_sections/Team";
import AboutContact from "@/app/_sections/AboutContact";
import FactStats from "@/app/_sections/FactStats";
import CoreValues from "@/app/_sections/CoreValues";

function About() {
  return (
    <main className="main-wrapper relative overflow-hidden">
      <Breadcrumb title="About Us" />
      <AboutHero />
      <FactStats />
      <AboutContent />
      <CoreValues />
      <Team />
      <AboutContact />
    </main>
  );
}

export default About;
