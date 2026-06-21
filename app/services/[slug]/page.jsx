import Image from "next/image";
import ContactInfo from "@/app/_sections/ContactInfo";
import Funfact from "@/app/_sections/Funfact";
import Breadcrumb from "@/app/_sections/Breadcrumb";

function ServiceDetails({ params }) {
  const { slug } = params;
  const title = slug ? slug.replace(/-/g, " ") : "Service Details";

  return (
    <main className="main-wrapper relative overflow-hidden">
      <Breadcrumb title={title} />

      <section id="content-section-1">
        {/* Section Spacer */}
        <div className="pb-20 xl:pb-[150px]">
          {/* Section Container */}
          <div className="global-container">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28">
              {/* Content Left Block */}
              <div
                className="jos order-2 overflow-hidden rounded-md"
                data-jos_animation="fade-left"
              >
                <Image
                  src="/assets/img/th-1/content-image-1.jpg"
                  alt="content-image-2"
                  width={526}
                  height={450}
                  className="h-auto w-full"
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div className="jos order-1" data-jos_animation="fade-right">
                {/* Section Content Block */}
                <div className="mb-6">
                  <h2>Analyze any data perfectly with AI</h2>
                </div>
                {/* Section Content Block */}
                <div className="text-lg leading-[1.4] lg:text-[21px]">
                  <p className="mb-7 last:mb-0">
                    AI data analysis, also known as artificial intelligence data analysis or
                    AI-driven data analysis, refers to the process of using artificial intelligence
                    and machine learning techniques.
                  </p>
                </div>
                <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-1 xl:mt-14 xl:grid-cols-2">
                  <li className="flex flex-col gap-y-4">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img/th-1/trending-up-icon.svg"
                        alt="trending-up-icon"
                        width={50}
                        height={50}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h5>Data Preprocessing</h5>
                    <p className="text-lg">
                      AI data analysis can begin, and raw data must be collected, cleaned.
                    </p>
                  </li>
                  <li className="flex flex-col gap-y-4">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img/th-1/cog-icon.svg"
                        alt="cog-icon"
                        width={50}
                        height={50}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h5>Predictive Analytics</h5>
                    <p className="text-lg">
                      Algorithms use historical data to forecast future trends, behaviors.
                    </p>
                  </li>
                </ul>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>

      <section id="content-section-2">
        <div className="pb-20 xl:pb-[150px]">
          <div className="global-container">
            <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
              <div className="mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-[950px]">
                <h2>Widely used throughout the industry for work</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,_1fr)_1.2fr] xl:gap-28 xxl:gap-32">
              <div
                className="jos order-2 overflow-hidden rounded-md md:order-1"
                data-jos_animation="fade-left"
              >
                <Image
                  src="/assets/img/th-1/content-image-4.jpg"
                  alt="content-image-4"
                  width={529}
                  height={500}
                  className="h-auto w-full"
                />
              </div>

              <div className="jos order-1 md:order-2" data-jos_animation="fade-right">
                <ul className="flex flex-col gap-y-6">
                  <li>
                    <h5 className="mb-[10px]">1. Businesses and Corporations:</h5>
                    <p className="mb-7 last:mb-0">
                      Businesses use AI data analysis to gain competitive advantages, optimize
                      operations, &amp; make data-driven decisions. This includes industries such as
                      retail, finance, manufacturing.
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-[10px]">2. Data Scientists and Analysts:</h5>
                    <p className="mb-7 last:mb-0">
                      Data scientists and analysts leverage AI tools and algorithms to extract
                      actionable insights from large datasets. They alsouse AI for predictive
                      modeling, anomaly detection, and data visualization.
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-[10px]">3. Government and Public Sector:</h5>
                    <p className="mb-7 last:mb-0">
                      Government agencies use AI data analysis for various purposes, including
                      public policy development, law enforcement, urban planning, and disaster.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Funfact />

      <section id="content-section-3">
        {/* Section Spacer */}
        <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
          {/* Section Container */}
          <div className="global-container">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28">
              {/* Content Left Block */}
              <div
                className="jos order-2 overflow-hidden rounded-md"
                data-jos_animation="fade-left"
              >
                <Image
                  src="/assets/img/th-1/content-image-1.jpg"
                  alt="content-image-2"
                  width={526}
                  height={450}
                  className="h-auto w-full"
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div className="jos order-1" data-jos_animation="fade-right">
                {/* Section Content Block */}
                <div className="mb-6">
                  <h2>Manage large amounts of data</h2>
                </div>
                {/* Section Content Block */}
                <div className="text-lg leading-[1.4] lg:text-[21px]">
                  <p className="mb-7 last:mb-0">
                    AI data analysis also can handle vast amounts of data, making it suitable for
                    big data environments. Data analysis can automate many aspects of data
                    processing and analysis
                  </p>
                </div>
                <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-1 xl:mt-14 xl:grid-cols-2">
                  <li className="flex flex-col gap-y-4">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img/th-1/icon-orange-clock.svg"
                        alt="trending-up-icon"
                        width={50}
                        height={50}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h5>Real-Time Analysis</h5>
                    <p className="text-lg">
                      Some AI data analysis solutions are design to process making instant.
                    </p>
                  </li>
                  <li className="flex flex-col gap-y-4">
                    <div className="h-[50px] w-[50px]">
                      <Image
                        src="/assets/img/th-1/icon-orange-cursor-click.svg"
                        alt="cog-icon"
                        width={50}
                        height={50}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h5>Automation</h5>
                    <p className="text-lg">
                      his leads to increased efficiency and quicker decision-making.
                    </p>
                  </li>
                </ul>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>

      <ContactInfo />
    </main>
  );
}

export default ServiceDetails;
