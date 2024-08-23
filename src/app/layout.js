import { Poppins } from 'next/font/google';
import "./globals.css";
import ScrollToTop from '@/components/utils/ScrollToTop';

const poppins = Poppins(
  {
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600", "700"]
  }
)

export const metadata = {
  title: "Insove",
  description: "Slicing dengan Next.js. Coded by Langit Amaravati",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={poppins.className}>{children}<ScrollToTop/></body>
    </html>
  );
}
