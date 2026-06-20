import Image from "next/image";
import zigzagData from "./zigzag.json";

export default function ZigZag() {
  return (
    <>
      {zigzagData.map((section, index) => {
        const isLeft = index % 2 === 0;

        return (
          <section key={section.id} id={isLeft ? "content-section-1" : "content-section-2"}>
            {/* Section Spacer */}
            <div className="pb-20 xl:pb-[150px]">
              {/* Section Container */}
              <div className="global-container">
                <div
                  className={
                    isLeft
                      ? "grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32"
                      : "grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32"
                  }
                >
                  {/* Content Left Block */}
                  <div
                    className={`jos ${
                      isLeft ? "order-2 md:order-1" : "order-2"
                    } overflow-hidden rounded-md`}
                    data-jos_animation="fade-left"
                  >
                    <Image
                      src={section.imageSrc}
                      alt={section.title}
                      width="526"
                      height="450"
                      className="h-auto w-full"
                    />
                  </div>
                  {/* Content Right Block */}
                  <div
                    className={`jos ${isLeft ? "order-1 md:order-2" : "order-1"}`}
                    data-jos_animation="fade-right"
                  >
                    {/* Section Content Block */}
                    <div className="mb-6">
                      <h2>{section.title}</h2>
                    </div>
                    {/* Section Content Block */}
                    <div className="text-lg leading-[1.4] lg:text-[21px]">
                      {section.paragraphs.map((p, idx) => (
                        <p key={idx} className="mb-7 last:mb-0">
                          {p}
                        </p>
                      ))}
                      {section.listItems && section.listItems.length > 0 && (
                        <ul className="flex flex-col gap-y-5 font-dmSans text-xl leading-tight tracking-tighter text-black lg:mt-12 lg:text-[28px]">
                          {section.listItems.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-x-3">
                              <div className="mt-[2.5px] h-[30px] w-[30px]">
                                <Image
                                  src="/assets/img/th-1/check-circle.svg"
                                  alt="check-circle"
                                  width="30"
                                  height="30"
                                  className="h-full w-full"
                                />
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
