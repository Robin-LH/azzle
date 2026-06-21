import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/app/_sections/Breadcrumb';
import teamsData from '@/app/_sections/teams.json';

function TeamDetails({ params }) {
  const { slug } = params;
  const member = teamsData.find((m) => m.slug === slug) || teamsData[0];

  return (
    <main className='main-wrapper relative overflow-hidden'>
      {/*...::: Breadcrumb Section :::... */}
      <Breadcrumb title={member.name} />

      {/*...::: Team Details Section Start :::... */}
      <section id='team-details-section'>
        {/* Section Spacer */}
        <div className='pb-40 xl:pb-[220px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* Team Details Top Block*/}
            <div className='grid items-center gap-x-16 gap-y-16 md:grid-cols-2 lg:grid-cols-[minmax(0,_1.2fr)_auto] xl:gap-x-20 xxl:gap-x-32'>
              {/* Team Content Left Block */}
              <div
                className='jos order-2 md:order-1'
                data-jos_animation='fade-left'
              >
                {/* Section Content Block */}
                <div className='mb-6'>
                  <h2>{member.name}</h2>
                </div>
                {/* Section Content Block */}
                <div className='text-lg leading-[1.4] lg:text-[21px]'>
                  {member.bio.map((paragraph, index) => (
                    <p key={index} className='mb-7 last:mb-0'>
                      {paragraph}
                    </p>
                  ))}
                  <p className='mb-7 font-semibold last:mb-0'>
                    {member.bioHeader}
                  </p>
                </div>
              </div>
              {/* Team Content Left Block */}

              {/* team Content Right Block */}
              <div
                className='jos order-1 md:order-2'
                data-jos_animation='fade-right'
              >
                {/* Team Member Item */}
                <div className='rounded-[20px] bg-colorLinenRuffle p-[20px]'>
                  <div className='xl:h[300px] w-full overflow-hidden rounded-[20px] xxl:h-[400px]'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={376}
                      height={400}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div className='mt-5'>
                    <div className='mt-3 flex flex-col justify-between gap-3 xxl:flex-row xxl:flex-wrap xxl:items-center'>
                      <h4 className='text-[21px] leading-[1.33]'>
                        {member.role}
                      </h4>
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
                </div>
                {/* Team Member Item */}
              </div>
              {/* team Content Right Block */}
            </div>
            {/* Team Details Top Block*/}

            {/* Horizontal Separator */}
            <div className='my-20 h-[1px] w-full bg-[#EAEDF0]' />
            {/* Horizontal Separator */}

            {/* Team Details Bottom Block*/}
            <div>
              {/* Team Member Skill List */}
              <ul className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
                {member.skills.map((skill, index) => (
                  <li
                    key={index}
                    className='jos flex flex-col gap-y-4 lg:text-[21px]'
                    data-jos_delay={`0.${index + 1}`}
                  >
                    <div className='text-2xl lg:text-3xl font-bold leading-[1.4] -tracking-[1px]'>
                      {skill.title}
                    </div>
                    <p>{skill.description}</p>
                  </li>
                ))}
              </ul>
              {/* Team Member Skill List */}
            </div>
            {/* Team Details Bottom Block*/}
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Team Details Section End :::... */}
    </main>
  );
}

export default TeamDetails;
