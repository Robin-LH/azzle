import Link from "next/link";
import Image from "next/image";

function Team() {
  return (
    <>
      {/*...::: Team Section Start :::... */}
      <section id="team-section">
        {/* Section Spacer */}
        <div className="py-20 xl:py-[130px]">
          {/* Section Container */}
          <div className="global-container">
            {/* Section Content Block */}
            <div className="jos mb-10 flex flex-wrap items-center justify-between lg:mb-12 xl:mb-20">
              <div className="max-w-sm lg:max-w-3xl xl:max-w-[745px]">
                <h2>Our team consists of a group of talents</h2>
              </div>
              <Link
                href="/teams"
                className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
              >
                Join our team
              </Link>
            </div>
            {/* Section Content Block */}
            {/* Team Member List */}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Team Member Item */}
              <li
                className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]"
                data-jos_animation="flip"
                data-jos_delay="0.1"
              >
                <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                  <Image
                    src="/assets/img/th-1/team-member-img-1.jpg"
                    alt="team-member-img-1"
                    width={376}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <Link
                    href="/team-details"
                    className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                  >
                    Mr. Abraham Maslo
                  </Link>
                  <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                    <span className="text-[21px]">Chief AI Officer</span>
                    <ul className="mt-auto flex gap-x-[15px]">
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.facebook.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/facebook-icon-white.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/facebook-icon-black.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.twitter.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/twitter-icon-white.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/twitter-icon-black.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.linkedin.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/linkedin-icon-white.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/linkedin-icon-black.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.instagram.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/instagram-icon-white.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/instagram-icon-black.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Team Member Item */}
              {/* Team Member Item */}
              <li
                className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]"
                data-jos_animation="flip"
                data-jos_delay="0.2"
              >
                <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                  <Image
                    src="/assets/img/th-1/team-member-img-2.jpg"
                    alt="team-member-img-2"
                    width={376}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <Link
                    href="/team-details"
                    className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                  >
                    Willium Robert
                  </Link>
                  <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                    <span className="text-[21px]">Data Engineer</span>
                    <ul className="mt-auto flex gap-x-[15px]">
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.facebook.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/facebook-icon-white.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/facebook-icon-black.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.twitter.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/twitter-icon-white.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/twitter-icon-black.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.linkedin.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/linkedin-icon-white.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/linkedin-icon-black.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.instagram.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/instagram-icon-white.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/instagram-icon-black.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Team Member Item */}
              {/* Team Member Item */}
              <li
                className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]"
                data-jos_animation="flip"
                data-jos_delay="0.3"
              >
                <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                  <Image
                    src="/assets/img/th-1/team-member-img-3.jpg"
                    alt="team-member-img-3"
                    width={376}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <Link
                    href="/team-details"
                    className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                  >
                    Henry Fayol
                  </Link>
                  <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                    <span className="text-[21px]">Research Scientist</span>
                    <ul className="mt-auto flex gap-x-[15px]">
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.facebook.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/facebook-icon-white.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/facebook-icon-black.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.twitter.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/twitter-icon-white.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/twitter-icon-black.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.linkedin.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/linkedin-icon-white.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/linkedin-icon-black.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.instagram.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/instagram-icon-white.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/instagram-icon-black.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Team Member Item */}
              {/* Team Member Item */}
              <li
                className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]"
                data-jos_animation="flip"
                data-jos_delay="0.4"
              >
                <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                  <Image
                    src="/assets/img/th-1/team-member-img-4.jpg"
                    alt="team-member-img-4"
                    width={376}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <Link
                    href="/team-details"
                    className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                  >
                    Henry Martine
                  </Link>
                  <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                    <span className="text-[21px]">AI Researchers</span>
                    <ul className="mt-auto flex gap-x-[15px]">
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.facebook.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/facebook-icon-white.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/facebook-icon-black.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.twitter.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/twitter-icon-white.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/twitter-icon-black.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.linkedin.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/linkedin-icon-white.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/linkedin-icon-black.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.instagram.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/instagram-icon-white.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/instagram-icon-black.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Team Member Item */}
              {/* Team Member Item */}
              <li
                className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]"
                data-jos_animation="flip"
                data-jos_delay="0.5"
              >
                <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                  <Image
                    src="/assets/img/th-1/team-member-img-5.jpg"
                    alt="team-member-img-5"
                    width={376}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <Link
                    href="/team-details"
                    className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                  >
                    Jack Fox
                  </Link>
                  <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                    <span className="text-[21px]">NLP Expert</span>
                    <ul className="mt-auto flex gap-x-[15px]">
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.facebook.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/facebook-icon-white.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/facebook-icon-black.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.twitter.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/twitter-icon-white.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/twitter-icon-black.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.linkedin.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/linkedin-icon-white.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/linkedin-icon-black.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.instagram.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/instagram-icon-white.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/instagram-icon-black.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Team Member Item */}
              {/* Team Member Item */}
              <li
                className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]"
                data-jos_animation="flip"
                data-jos_delay="0.6"
              >
                <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                  <Image
                    src="/assets/img/th-1/team-member-img-6.jpg"
                    alt="team-member-img-6"
                    width={376}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5">
                  <Link
                    href="/team-details"
                    className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                  >
                    Adam Smith
                  </Link>
                  <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                    <span className="text-[21px]">Project Manager</span>
                    <ul className="mt-auto flex gap-x-[15px]">
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.facebook.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/facebook-icon-white.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/facebook-icon-black.svg"
                            alt="facebook"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.twitter.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/twitter-icon-white.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/twitter-icon-black.svg"
                            alt="twitter"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.linkedin.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/linkedin-icon-white.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/linkedin-icon-black.svg"
                            alt="linkedin"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          rel="noopener noreferrer"
                          href="http://www.instagram.com"
                          className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                        >
                          <Image
                            src="/assets/img/th-1/instagram-icon-white.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            src="/assets/img/th-1/instagram-icon-black.svg"
                            alt="instagram"
                            width={14}
                            height={14}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* Team Member Item */}
            </ul>
            {/* Team Member List */}
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Team Section End :::... */}
    </>
  );
}

export default Team;
