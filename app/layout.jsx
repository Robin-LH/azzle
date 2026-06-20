import "@/styles/globals.css";
import "@/styles/vendors/menu.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import JOSAnimation from "./JOSAnimation";
import "swiper/css";
import "swiper/css/navigation";
import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";

const DMSans = localFont({
  src: "../fonts/DMSans-Bold.woff2",
  variable: "--font-DMSans",
});

const ClashDisplay = localFont({
  src: "../fonts/ClashDisplay-Medium.woff2",
  variable: "--font-clash-display",
});

const Raleway = localFont({
  src: "../fonts/Raleway-Bold.woff2",
  variable: "--font-raleway",
});

const SpaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Bold.woff2",
  variable: "--font-space-grotesk",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="rum-script"
          src="https://gateway-api.sitebeacon.io/v1/sb-script"
          data-projectid="AE-09e16170d6"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${DMSans.variable} ${ClashDisplay.variable} ${Raleway.variable} ${SpaceGrotesk.variable} ${inter.variable}`}
      >
        <JOSAnimation>
          <Header_01 />
          {children}
          <Footer_01 />
        </JOSAnimation>
      </body>
    </html>
  );
}
