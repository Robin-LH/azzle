import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/app/_sections/Breadcrumb";
import ContactInfo from "@/app/_sections/ContactInfo";
import portfolioData from "@/app/_sections/portfolio.json";

function PortfolioDetails({ params }) {
  const { slug } = params;
  const title = slug ? slug.replace(/-/g, " ") : "Portfolio Details";
  const project = portfolioData.find((p) => p.link.split("/").pop() === slug) || portfolioData[0];

  return (
    <main className="main-wrapper relative overflow-hidden">
      <Breadcrumb title={title} />

      <section id="portfolio-detial-section">
        <div className="pb-20 xl:pb-[150px]">
          <div className="global-container">
            <div className="jos mb-10 lg:mb-16 xl:mb-20">
              <div className="md:max-w-xs lg:max-w-xl xl:max-w-[846px]">
                <h2 className="capitalize">{project.title}</h2>
              </div>
            </div>
            <div
              className="jos h-80 w-full overflow-hidden rounded-[10px] lg:h-[550px]"
              data-jos_animation="zoom"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1296}
                height={550}
                className="h-full w-full object-cover"
              />
            </div>
            <ul className="mt-[55px] grid grid-cols-1 justify-between gap-x-16 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:flex">
              <li className="jos flex flex-col gap-y-2 sm:gap-y-4" data-jos_delay="0.1">
                <span className="text-[21px] font-semibold leading-[1.4] text-[#7F8995]">
                  Client:
                </span>
                <div className="text-2xl font-bold leading-[1.4] -tracking-[1px] md:text-[30px]">
                  XYZ Company
                </div>
              </li>
              <li className="jos flex flex-col gap-y-2 sm:gap-y-4" data-jos_delay="0.2">
                <span className="text-[21px] font-semibold leading-[1.4] text-[#7F8995]">
                  Services:
                </span>
                <div className="text-2xl font-bold leading-[1.4] -tracking-[1px] md:text-[30px]">
                  Web Design
                </div>
              </li>
              <li className="jos flex flex-col gap-y-2 sm:gap-y-4" data-jos_delay="0.3">
                <span className="text-[21px] font-semibold leading-[1.4] text-[#7F8995]">
                  Duration:
                </span>
                <div className="text-2xl font-bold leading-[1.4] -tracking-[1px] md:text-[30px]">
                  2 Weeks
                </div>
              </li>
              <li className="jos flex flex-col gap-y-2 sm:gap-y-4" data-jos_delay="0.4">
                <span className="text-[21px] font-semibold leading-[1.4] text-[#7F8995]">
                  Website
                </span>
                <div className="text-2xl font-bold leading-[1.4] -tracking-[1px] md:text-[30px]">
                  <Link
                    rel="noopener noreferrer"
                    href="https://www.example.com"
                    className="flex items-center gap-x-[10px] hover:text-colorOrangyRed"
                  >
                    Live preview
                    <div className="h-9 w-9">
                      <Image
                        src="/assets/img/th-1/icon-black-long-arrow-right.svg"
                        alt="icon-black-long-arrow-right"
                        width={35}
                        height={35}
                        className="h-auto w-9"
                      />
                    </div>
                  </Link>
                </div>
              </li>
            </ul>

            <div className="my-10 h-[1px] w-full bg-[#EAEDF0] lg:my-20" />
            <div className="flex flex-col gap-y-10 lg:gap-y-20">
              <div className="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2">
                <div
                  className="jos order-2 overflow-hidden rounded-md lg:order-1"
                  data-jos_animation="fade-right"
                >
                  <Image
                    src="/assets/img/th-1/content-image-5.jpg"
                    alt="content-image-6"
                    width={636}
                    height={400}
                    className="h-auto w-full"
                  />
                </div>

                <div className="jos order-1 lg:order-2" data-jos_animation="fade-left">
                  <div className="mb-4 xl:mb-6">
                    <h2>Project overview</h2>
                  </div>

                  <span className="mb-8 block text-2xl font-bold leading-snug">
                    Machine Learning and Predictive Analytics:
                  </span>
                  <ul className="mb-7 flex flex-col gap-y-[30px] text-lg leading-[1.4] last:mb-0 lg:text-[21px]">
                    <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[6px] after:w-[6px] after:rounded-[50%] after:bg-black">
                      Demand Forecasting: AI SaaS helps businesses predict demand for products and
                      services, optimizing inventory management and supply chain operations.
                    </li>
                    <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[6px] after:w-[6px] after:rounded-[50%] after:bg-black">
                      Customer Churn Prediction: It s used to identify customers at risk of leaving
                      a service or product, allowing proactive retention efforts.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2">
                <div
                  className="jos order-2 overflow-hidden rounded-md lg:order-2"
                  data-jos_animation="fade-left"
                >
                  <Image
                    src="/assets/img/th-1/content-image-6.jpg"
                    alt="content-image-6"
                    width={636}
                    height={400}
                    className="h-auto w-full"
                  />
                </div>

                <div className="jos order-1 lg:order-1" data-jos_animation="fade-right">
                  <div className="mb-4 xl:mb-6">
                    <h2>Project results</h2>
                  </div>

                  <span className="mb-8 block text-2xl font-bold leading-snug">
                    Natural Language Processing (NLP):
                  </span>
                  <ul className="mb-7 flex flex-col gap-y-[30px] text-lg leading-[1.4] last:mb-0 lg:text-[21px]">
                    <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[6px] after:w-[6px] after:rounded-[50%] after:bg-black">
                      Text Analysis: AI SaaS can be used to analyze text data for sentiment
                      analysis, entity recognition, language translation, and text summarization.
                    </li>
                    <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[6px] after:w-[6px] after:rounded-[50%] after:bg-black">
                      Chatbots and Virtual Assistants: Businesses use AI SaaS to build chatbots and
                      virtual assistants for customer support, improving response times and
                      efficiency.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactInfo />
    </main>
  );
}

export default PortfolioDetails;
