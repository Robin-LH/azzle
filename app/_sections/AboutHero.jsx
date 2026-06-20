import Image from "next/image";

function AboutHero() {
  return (
    <section id="about-hero-section">
      <div className="mb-20 lg:mb-24">
        <div className="global-container">
          <div className="jos mb-10 text-center lg:mb-12 xl:mb-20">
            <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]">
              <h2>We are a trusted partner in our clients AI journey</h2>
            </div>
          </div>
          <div className="jos overflow-hidden rounded-3xl" data-jos_animation="zoom">
            <Image
              src="/assets/img/th-1/about-hero-image.jpg"
              alt="about-hero-image"
              width={1296}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
