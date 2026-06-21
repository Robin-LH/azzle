'use client';

import Link from 'next/link';
import Image from 'next/image';
import useTabs from '@/components/hooks/useTabs';
import Breadcrumb from '@/app/_sections/Breadcrumb';
import FAQ from '@/app/_sections/FAQ';
import pricingData from '@/app/_sections/pricing.json';

function Pricing() {
  const [activeTab, handleTab] = useTabs();

  return (
    <main className='main-wrapper relative overflow-hidden'>
      {/*...::: Breadcrumb Section :::... */}
      <Breadcrumb title="Pricing Plans" />

      {/*...::: Pricing Section Start :::... */}
      <section className='pricing-section'>
        {/* Section Spacer */}
        <div className='pb-20 xl:pb-[150px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* Section Content Block */}
            <div className='jos mb-10 text-center lg:mb-12'>
              <div className='mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]'>
                <h2>Find a flexible plan that fits your business</h2>
              </div>
            </div>
            {/* Section Content Block */}
            {/* Pricing Block */}
            <div className='container mx-auto'>
              {/* Tab buttons */}
              <div className='jos flex justify-center' data-jos_delay='0.3'>
                <div className='inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold'>
                  <button
                    className={`tab-button price-button ${
                      activeTab === 0 ? 'active' : ''
                    }`}
                    onClick={() => handleTab(0)}
                    data-tab='monthly'
                  >
                    Monthly
                  </button>
                  <button
                    className={`tab-button price-button ${
                      activeTab === 1 ? 'active' : ''
                    }`}
                    onClick={() => handleTab(1)}
                    data-tab='annually'
                  >
                    Annually
                  </button>
                </div>
              </div>
              {/* Pricing Block */}
              <div className='mt-12 lg:mt-16 xl:mt-20'>
                {/* Price List (Monthly) */}
                {activeTab === 0 && (
                  <ul
                    id='monthly'
                    className='tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-4'
                  >
                    {pricingData.map((plan) => (
                      <li
                        key={plan.id}
                        className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                        data-jos_animation='flip'
                        data-jos_delay={0}
                      >
                        <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                          {plan.name}
                        </h3>
                        <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                          {plan.members}
                        </span>
                        <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                        <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                          {plan.price.monthly}
                          <span className='text-lg font-semibold'>
                            {plan.period.monthly}
                          </span>
                        </h4>
                        <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                          {plan.description}
                        </p>
                        {/* Price Info List */}
                        <ul className='mb-10 flex flex-col gap-y-3'>
                          {plan.features.map((feature, fIndex) => (
                            <li
                              key={fIndex}
                              className='flex items-center gap-x-3 font-bold group-hover:text-white'
                            >
                              <div className='relative h-[24px] w-[24px]'>
                                <Image
                                  src='/assets/img/th-1/icon-black-badge-check.svg'
                                  alt='icon-black-badge-check'
                                  width={24}
                                  height={24}
                                  className='h-full w-full object-cover'
                                />
                                <Image
                                  src='/assets/img/th-1/icon-orange-badge-check.svg'
                                  alt='icon-black-badge-check'
                                  width={24}
                                  height={24}
                                  className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                                />
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={plan.link}
                          className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                        >
                          Choose the plan
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Price List (Annually) */}
                {activeTab === 1 && (
                  <ul
                    id='annually'
                    className='tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-4'
                  >
                    {pricingData.map((plan) => (
                      <li
                        key={plan.id}
                        className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-[30px] transition-all duration-300 ease-linear hover:bg-black'
                        data-jos_animation='flip'
                        data-jos_delay={0}
                      >
                        <h3 className='flex flex-wrap font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                          {plan.name}
                        </h3>
                        <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                          {plan.members}
                        </span>
                        <div className='my-5 h-[1px] w-full bg-[#DBD6CF]' />
                        <h4 className='mb-4 flex flex-col font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                          {plan.price.annually}
                          <span className='text-lg font-semibold'>
                            {plan.period.annually}
                          </span>
                        </h4>
                        <p className='mb-6 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                          {plan.description}
                        </p>
                        {/* Price Info List */}
                        <ul className='mb-10 flex flex-col gap-y-3'>
                          {plan.features.map((feature, fIndex) => (
                            <li
                              key={fIndex}
                              className='flex items-center gap-x-3 font-bold group-hover:text-white'
                            >
                              <div className='relative h-[24px] w-[24px]'>
                                <Image
                                  src='/assets/img/th-1/icon-black-badge-check.svg'
                                  alt='icon-black-badge-check'
                                  width={24}
                                  height={24}
                                  className='h-full w-full object-cover'
                                />
                                <Image
                                  src='/assets/img/th-1/icon-orange-badge-check.svg'
                                  alt='icon-black-badge-check'
                                  width={24}
                                  height={24}
                                  className='absolute inset-0 left-0 top-0 h-full w-full object-cover opacity-0 group-hover:opacity-100'
                                />
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={plan.link}
                          className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
                        >
                          Choose the plan
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Pricing Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Pricing Section End :::... */}

      {/*...::: FAQ Section Start :::... */}
      <FAQ layout="two-column" />
      {/*...::: FAQ Section End :::... */}
    </main>
  );
}

export default Pricing;
