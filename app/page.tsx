import { Hero } from '@/components/hero/Hero';
import { Partners } from '@/components/partners/Partners';
import { Benefits } from '@/components/benefits/Benefits';
import { Features } from '@/components/features/Features';
import { Specification } from '@/components/specification/Specification';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { HowItWorks } from '@/components/howItWorks/HowItWorks';
import { ConnectUs } from '@/components/connectUs/ConnectUs';

export default function Home() {
  return (
    <div className='container'>
      <Hero />
      <Partners />
      <Benefits />
      <Features />
      <Specification />
      <Testimonials />
      <HowItWorks />
      <ConnectUs />
    </div>
  );
}
