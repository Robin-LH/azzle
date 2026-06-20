import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      {/* Section Spacer */}
      <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
        {/* Section Container */}
        <div className="global-container">
          {/* Section Content Block */}
          <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]">
              <h2 className="text-white">Positive feedback from our users</h2>
            </div>
          </div>
          {/* Section Content Block */}

          {/* Testimonial List */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial Item */}
            <div
              className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
              data-jos_animation="fade-left"
              data-jos_delay="0.1"
            >
              <div className="block">
                <Image src="/assets/img/th-1/rating.svg" alt="rating" width="146" height="25" />
              </div>
              <p>
                “This AI SaaS tool has revolutionized the way we process and analyze data. This
                is a game-changer for our business.”
              </p>
              <div className="flex items-center gap-x-4">
                <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                  <Image
                    src="/assets/img/th-1/testimonial-img-1.jpg"
                    alt="testimonial-img"
                    width="60"
                    height="60"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="block text-lg font-semibold leading-[1.6]">Max Weber</span>
                  <span className="block text-sm font-light leading-[1.4]">HR Manager</span>
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div
              className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
              data-jos_animation="fade-left"
              data-jos_delay="0.2"
            >
              <div className="block">
                <Image src="/assets/img/th-1/rating.svg" alt="rating" width="146" height="25" />
              </div>
              <p>
                It answers immediately, and we ve seen a significant reduction in response time.
                Our customers love it and so do we!
              </p>
              <div className="flex items-center gap-x-4">
                <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                  <Image
                    src="/assets/img/th-1/testimonial-img-2.jpg"
                    alt="testimonial-img"
                    width="60"
                    height="60"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="block text-lg font-semibold leading-[1.6]">
                    Douglas Smith
                  </span>
                  <span className="block text-sm font-light leading-[1.4]">Businessman</span>
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div
              className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
              data-jos_animation="fade-left"
              data-jos_delay="0.3"
            >
              <div className="block">
                <Image src="/assets/img/th-1/rating.svg" alt="rating" width="146" height="25" />
              </div>
              <p>
                It is accurate, fast and supports multiple languages support. It is a must for
                any international business success.
              </p>
              <div className="flex items-center gap-x-4">
                <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                  <Image
                    src="/assets/img/th-1/testimonial-img-3.jpg"
                    alt="testimonial-img"
                    width="60"
                    height="60"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="block text-lg font-semibold leading-[1.6]">
                    Abraham Maslo
                  </span>
                  <span className="block text-sm font-light leading-[1.4]">
                    Founder @ Marketing Company
                  </span>
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div
              className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
              data-jos_animation="fade-right"
              data-jos_delay="0.1"
            >
              <div className="block">
                <Image src="/assets/img/th-1/rating.svg" alt="rating" width="146" height="25" />
              </div>
              <p>
                Security is a top concern for us, and AI SaaS takes it seriously. It s a
                reassuring layer of protection for our organization.
              </p>
              <div className="flex items-center gap-x-4">
                <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                  <Image
                    src="/assets/img/th-1/testimonial-img-4.jpg"
                    alt="testimonial-img"
                    width="60"
                    height="60"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="block text-lg font-semibold leading-[1.6]">Jack Fayol</span>
                  <span className="block text-sm font-light leading-[1.4]">HR Manager</span>
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div
              className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
              data-jos_animation="fade-right"
              data-jos_delay="0.2"
            >
              <div className="block">
                <Image src="/assets/img/th-1/rating.svg" alt="rating" width="146" height="25" />
              </div>
              <p>
                We were concerned about integrating their APIs were well documented, and their
                support team was super cool.
              </p>
              <div className="flex items-center gap-x-4">
                <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                  <Image
                    src="/assets/img/th-1/testimonial-img-5.jpg"
                    alt="testimonial-img"
                    width="60"
                    height="60"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="block text-lg font-semibold leading-[1.6]">Karen Lynn</span>
                  <span className="block text-sm font-light leading-[1.4]">
                    Software Engineer
                  </span>
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            {/* Testimonial Item */}
            <div
              className="jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white"
              data-jos_animation="fade-right"
              data-jos_delay="0.3"
            >
              <div className="block">
                <Image src="/assets/img/th-1/rating.svg" alt="rating" width="146" height="25" />
              </div>
              <p>
                The return on investment has exceeded our expectations. it s an investment in
                the future of our business.
              </p>
              <div className="flex items-center gap-x-4">
                <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                  <Image
                    src="/assets/img/th-1/testimonial-img-6.jpg"
                    alt="testimonial-img"
                    width="60"
                    height="60"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="block text-lg font-semibold leading-[1.6]">Henry Ochi</span>
                  <span className="block text-sm font-light leading-[1.4]">Bank Manager</span>
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
          </div>
          {/* Testimonial List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
}
