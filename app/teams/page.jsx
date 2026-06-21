import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/app/_sections/Breadcrumb';
import teamsData from '@/app/_sections/teams.json';

function Team() {
  return (
    <main className='main-wrapper relative overflow-hidden'>
      {/*...::: Breadcrumb Section :::... */}
      <Breadcrumb title="Our Team" />

      {/*...::: Team Section Start :::... */}
      <section id='team-section'>
        {/* Section Spacer */}
        <div className='pb-40 xl:pb-[220px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* Section Content Block */}
            <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
              <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]'>
                <h2>Our team consists of a group of talents</h2>
              </div>
            </div>
            {/* Section Content Block */}
            {/* Team Member List */}
            <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {teamsData.map((member, index) => (
                <li
                  key={member.id}
                  className='jos rounded-[20px] bg-colorLinenRuffle p-[20px]'
                  data-jos_animation='flip'
                  data-jos_delay={`0.${index + 1}`}
                >
                  <div className='xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]'>
                    <Image
                      src={member.image}
                      alt={member.slug}
                      width={376}
                      height={400}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div className='mt-5'>
                    <Link
                      href={`/teams/${member.slug}`}
                      className='font-dmSans text-[26px] leading-[1.33] hover:text-colorOrangyRed xxl:text-[30px]'
                    >
                      {member.name}
                    </Link>
                    <div className='mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center'>
                      <span className='text-[21px]'>{member.role}</span>
                      <ul className='mt-auto flex gap-x-[15px]'>
                        {Object.entries(member.social).map(([platform, url]) => (
                          <li key={platform}>
                            <Link
                              rel='noopener noreferrer'
                              href={url}
                              className='group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-colorOrangyRed'
                            >
                              <Image
                                src={`/assets/img/th-1/${platform}-icon-white.svg`}
                                alt={platform}
                                width={14}
                                height={14}
                                className='opacity-100 group-hover:opacity-0'
                              />
                              <Image
                                src={`/assets/img/th-1/${platform}-icon-black.svg`}
                                alt={platform}
                                width={14}
                                height={14}
                                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}

              {/* Team Member Join CTA Item */}
              <li
                className='jos min-h-[400px] rounded-[20px] bg-colorLinenRuffle p-[20px]'
                data-jos_animation='flip'
                data-jos_delay='0.9'
              >
                <div className='flex h-full flex-col items-center justify-center text-center'>
                  <div className='text-3xl font-semibold leading-[1.2] tracking-[-1px] text-black xl:text-[40px]'>
                    You want to join our amazing team
                  </div>
                  <p className='mb-6 mt-4 text-lg leading-[1.4] xl:mb-[30px] xl:text-[21px]'>
                    Specify the job you are applying for and introduce yourself
                  </p>
                  <Link
                    href='/teams'
                    className='button block w-full rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                  >
                    Join our team
                  </Link>
                </div>
              </li>
            </ul>
            {/* Team Member List */}
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Team Section End :::... */}
    </main>
  );
}

export default Team;
