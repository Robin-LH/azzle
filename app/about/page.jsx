import Breadcrumb from "@/app/_sections/Breadcrumb";
import AboutHero from "@/app/_sections/AboutHero";
import AboutContent from "@/app/_sections/AboutContent";
import Team from "@/app/_sections/Team";
import FactStats from "@/app/_sections/FactStats";
import CoreValues from "@/app/_sections/CoreValues";
import ContactInfo from "@/app/_sections/ContactInfo";

function About() {
  return (
    <main className="main-wrapper relative overflow-hidden">
      <Breadcrumb title="About Us" />
      <AboutHero />
      <FactStats />
      <AboutContent />
      <CoreValues />
      <Team />
      <ContactInfo />
    </main>
  );
}

export default About;
