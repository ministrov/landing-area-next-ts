import { Hero } from '@/components/hero/Hero';
import { Partners } from '@/components/partners/Partners';
import { Benefits } from '@/components/benefits/Benefits';
import { Features } from '@/components/features/Features';

export default function Home() {
  return (
    <div className='container'>
      <Hero />
      <Partners />
      <Benefits />
      <Features />
    </div>
  );
}
