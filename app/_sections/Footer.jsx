import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]">
      <div className="py-[60px] xl:pb-[100px] xl:pt-[130px]">
        <div className="overflow-hidden">
          <div className="footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap">
            <Image
              src="/assets/img/th-1/footer-text-slider-icon.svg"
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
              Start building software
            </div>
            <Image
              src="/assets/img/th-1/footer-text-slider-icon.svg"
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
              Start building software
            </div>

            <Image
              src="/assets/img/th-1/footer-text-slider-icon.svg"
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
              Start building software
            </div>
          </div>
        </div>
      </div>
      <div className="global-container">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        <div className="lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]">
          <div className="flex flex-col gap-y-6">
            <Link href="/" className="inline-block">
              <Image src="/assets/img/th-1/logo.png" alt="logo" width={96} height={24} />
            </Link>
            <p>
              Our mission is to harness the power of AI to solve complex business challenges &amp;
              decision-makers with data-driven insights, and enhance user experiences across digital
              platforms.
            </p>
            <p>
              Website: <Link href="https://www.example.com">www.example.com</Link>
            </p>
          </div>
          <div className="flex flex-col gap-y-6">
            <h4 className="text-[21px] font-semibold capitalize text-black">Resources</h4>
            <ul className="flex flex-col gap-y-[10px] capitalize">
              <li>
                <Link
                  href="/portfolio"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6 border">
            <h4 className="text-[21px] font-semibold capitalize text-black">
              Subscribe to our newsletter
            </h4>

            <form action="#" method="post">
              <div className="relative h-[50px] w-full ">
                <input
                  type="email"
                  name="newsletter-email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  className="p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none"
                  required=""
                />
                <button
                  type="submit"
                  className="absolute right-[5px] top-[50%] inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black px-6 transition-all hover:bg-orange-500"
                >
                  <Image
                    src="/assets/img/th-1/arrow-right-large.svg"
                    height={24}
                    width={24}
                    alt="newsletter"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        <div className="py-9 text-center">
          <p>© Copyright {new Date().getFullYear()}, All Rights Reserved by Mthemeus</p>
        </div>
      </div>
      <div className="orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]"></div>
      <div className="orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]"></div>
    </footer>
  );
};

export default Footer;
