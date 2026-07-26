import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Gallery } from '@/components/Gallery';
import { AboutSection } from '@/components/AboutSection';
import { Timeline } from '@/components/Timeline';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Gallery />
      <AboutSection />
      <Timeline />
      <ContactSection />
      <Footer />
    </main>
  );
}
