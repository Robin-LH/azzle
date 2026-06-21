import Image from "next/image";
import Link from "next/link";
import servicesData from "./services.json";

export default function Services() {
  return (
    <section id="section-service">
      <div className="pb-20 xl:pb-[150px]">
        <div className="global-container">
          <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto max-w-md lg:max-w-xl xl:max-w-[950px]">
              <h2>We provide smart AI solutions for all tasks</h2>
            </div>
          </div>
          <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service) => (
              <li
                key={service.id}
                className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black"
              >
                <div className="relative mb-9 h-[70px] w-[70px]">
                  <Image src={service.iconBlack} alt={service.title} width={70} height={70} />
                  <Image
                    src={service.iconOrange}
                    alt={service.title}
                    width={70}
                    height={70}
                    className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                  />
                </div>
                <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                  <Link href={service.link} className="hover:text-colorOrangyRed">
                    {service.title}
                  </Link>
                </h3>
                <p className="mb-12 duration-300 group-hover:text-white">{service.description}</p>
                <Link
                  href={service.link}
                  className="relative inline-block h-[30px] w-[30px] duration-300"
                >
                  <Image
                    src="/assets/img/th-1/arrow-right-black.svg"
                    alt="arrow-right-black"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/assets/img/th-1/arrow-right-orange.svg"
                    alt="arrow-right-black"
                    width={30}
                    height={30}
                    className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
