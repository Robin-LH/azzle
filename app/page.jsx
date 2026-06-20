import Hero from "@/app/_sections/Hero";
import Service from "@/app/_sections/Service";
import ZigZag from "@/app/_sections/ZigZag";
import Funfact from "@/app/_sections/Funfact";
import Pricing from "@/app/_sections/Pricing";
import FAQ from "@/app/_sections/FAQ";
import Testimonial from "@/app/_sections/Testimonial";

function Home() {
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <main className="main-wrapper relative overflow-hidden">
        <Hero />
        <Service />
        <ZigZag />
        <Funfact />
        <Pricing />
        <FAQ />
        <Testimonial />
      </main>
    </div>
  );
}

export default Home;
