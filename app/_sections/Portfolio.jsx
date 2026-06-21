import Image from "next/image";
import Link from "next/link";
import portfolioData from "./portfolio.json";

export default function Portfolio() {
  return (
    <section id="portfolio-section">
      {/* Section Spacer */}
      <div className="pb-40 xl:pb-[220px]">
        {/* Section Container */}
        <div className="global-container">
          {/* Section Content Block */}
          <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
              <h2>Valuable AI projects for new generation</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Portfolio List */}
          <ul className="col-1 gap-6 md:columns-2">
            {portfolioData.map((project) => (
              <li
                key={project.id}
                className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                data-jos_delay={project.delay}
              >
                <Link
                  href={project.link}
                  className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={636}
                    height={550}
                    className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </Link>
                <Link
                  href={project.link}
                  className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-colorOrangyRed lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl"
                >
                  <span className="flex-1">{project.title}</span>
                  <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                    <Image
                      src="/assets/img/th-1/icon-black-long-arrow-right.svg"
                      alt="icon-black-long-arrow-right.svg"
                      width={45}
                      height={45}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {/* Portfolio List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
}
