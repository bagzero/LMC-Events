import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import HostingEventSection from "@/components/HostingEventSection";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import PreviousEventsSection from "@/components/PreviousEventsSection";

import { Jost, Bebas_Neue } from 'next/font/google';

// Initialize the fonts
const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Main className={`${jost.variable} ${bebasNeue.variable}`}>
        <HeroSection />
        <GallerySection />
        <PreviousEventsSection />
        <HostingEventSection />
      </Main>
      <Footer />
    </>

  );
}