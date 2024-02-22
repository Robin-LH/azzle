import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/vendors/menu.css';
import 'swiper/css';
import 'swiper/css/navigation';
import Header_01 from '@/components/header/Header_01';
import Footer_01 from '@/components/footer/Footer_01';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='page-wrapper relative z-[1] bg-white'>
          {/*...::: Header Start :::... */}
          <Header_01 />
          {/*...::: Header End :::... */}

          {/*...::: Main Start :::... */}
          {children}
          {/*...::: Main End :::... */}

          {/*...::: Footer Start :::... */}
          <Footer_01 />
          {/*...::: Footer End :::... */}
        </div>
      </body>
    </html>
  );
}
