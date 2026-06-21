"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useAccordion from "@/components/hooks/useAccordion";
import faqData from "./faq.json";

export default function FAQ({ layout = "two-column", limit }) {
  const [activeIndex, handleAccordion] = useAccordion(0);

  // Set default limit for two-column if not specified
  const actualLimit = limit || (layout === "two-column" ? 3 : null);

  const [faqs, setFaqs] = useState(() => {
    // Initial stable slice to match SSR and avoid hydration warning
    return actualLimit ? faqData.slice(0, actualLimit) : faqData;
  });

  useEffect(() => {
    // Shuffle and pick subset on client side after mount
    const shuffled = [...faqData].sort(() => 0.5 - Math.random());
    setFaqs(actualLimit ? shuffled.slice(0, actualLimit) : shuffled);
  }, [actualLimit]);

  if (layout === "two-column") {
    return (
      <section className="faq-section">
        {/* Section Spacer */}
        <div className="pb-20 xl:pb-[150px]">
          {/* Section Container */}
          <div className="global-container">
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
              {/* FAQ Left Block */}
              <div className="jos flex flex-col" data-jos_animation="fade-right">
                {/* Section Content Block */}
                <div className="mb-6">
                  <div className="mx-auto md:mx-0 md:max-w-none">
                    <h2>Freely ask us for more information</h2>
                  </div>
                </div>
                {/* Section Content Block */}
                <div className="text-lg leading-[1.4] lg:text-[21px]">
                  <p className="mb-7 last:mb-0">
                    Our AI SaaS solutions can be quickly deployed, enabling users to start
                    benefiting from AI capabilities without lengthy setup and development times in
                    fast-paced industries.
                  </p>
                  <Link
                    href="/faq"
                    className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                  >
                    Ask you questions
                  </Link>
                </div>
              </div>
              {/* FAQ Left Block */}

              {/* FAQ Right Block */}
              <div className="jos md:ml-10 lg:ml-20 xl:ml-32" data-jos_animation="fade-left">
                {/* Accordion*/}
                <ul className="accordion">
                  {faqs.map((item, index) => (
                    <li
                      key={item.id}
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleAccordion(index)}
                    >
                      <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
                        <p>{item.question}</p>
                        <div className="accordion-icon">
                          <Image src="/assets/img/plus.svg" width={24} height={24} alt="plus" />
                        </div>
                      </div>
                      <div className="accordion-content text-[#2C2C2C]">
                        <p>{item.answer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Accordion*/}
              </div>
              {/* FAQ Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
    );
  }

  // Centered list layout (like FAQ Listing page)
  return (
    <section className="faq-section">
      {/* Section Spacer */}
      <div className="pb-20 xl:pb-[130px]">
        {/* Section Container */}
        <div className="global-container">
          {/* Section Content Block */}
          <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]">
              <h2>Our experts are able to answer all your questions</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Accordion*/}
          <ul className="accordion flex flex-col gap-y-6">
            {faqs.map((item, index) => (
              <li
                key={item.id}
                className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                  activeIndex === index ? "active" : ""
                }`}
                data-jos_delay="0.1"
                onClick={() => handleAccordion(index)}
              >
                <div className="accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[0.5px] lg:text-[28px]">
                  <h5>{item.question}</h5>
                  <div className="accordion-icon">
                    <Image src="/assets/img/plus.svg" width={24} height={24} alt="plus" />
                  </div>
                </div>
                <div className="accordion-content text-[#2C2C2C]">
                  <p>{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* Accordion*/}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
}
