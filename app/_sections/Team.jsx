import Link from "next/link";
import Image from "next/image";
import teamsData from "@/app/_sections/teams.json";

function Team() {
  const visibleMembers = teamsData.slice(0, 6);

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
              {visibleMembers.map((member, index) => (
                <li
                  key={member.id}
                  className="jos rounded-[20px] bg-colorLinenRuffle p-[20px]"
                  data-jos_animation="flip"
                  data-jos_delay={`0.${index + 1}`}
                >
                  <div className="xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]">
                    <Image
                      src={member.image}
                      alt={member.slug}
                      width={376}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-5">
                    <Link
                      href={`/teams/${member.slug}`}
                      className="font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]"
                    >
                      {member.name}
                    </Link>
                    <div className="mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center">
                      <span className="text-[21px]">{member.role}</span>
                      <ul className="mt-auto flex gap-x-[15px]">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <li key={platform}>
                            <Link
                              rel="noopener noreferrer"
                              href={url}
                              className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed"
                            >
                              <Image
                                src={`/assets/img/th-1/${platform}-icon-white.svg`}
                                alt={platform}
                                width={14}
                                height={14}
                                className="opacity-100 group-hover:opacity-0"
                              />
                              <Image
                                src={`/assets/img/th-1/${platform}-icon-black.svg`}
                                alt={platform}
                                width={14}
                                height={14}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
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
