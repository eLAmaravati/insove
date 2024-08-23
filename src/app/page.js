import Image from "next/image";
import Header from '@/components/partials/Header';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServiceSection from '@/components/sections/ServiceSection';
import BookSection from '@/components/sections/BookSection';
import FaqSection from '@/components/sections/FaqSection';
import DepartmentSection from '@/components/sections/DepartmentSection';
import BlogSection from '@/components/sections/BlogSection';
import CtaSection from '@/components/sections/CtaSection';
import LogoSection from '@/components/sections/LogoSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import Footer from '@/components/partials/Footer';
import ScrollToTop from '@/components/utils/ScrollToTop';

export default function Home() {
  return (
    <>
    <Header/>
    <main className='space-y-24'>
      <HeroSection/>
      <StatsSection/>
      <ServiceSection/>
      <BookSection/>
      <TestimonialSection/>
      <FaqSection/>
      <DepartmentSection/>
      <BlogSection/>
      <LogoSection/>
      <CtaSection/>
    </main>
    <Footer />
    {/* <ScrollToTop/> */}
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    </>
  );
}
