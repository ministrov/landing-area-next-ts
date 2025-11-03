import { Hero } from '@/components/hero/Hero';
import { Partners } from '@/components/partners/Partners';
import { Benefits } from '@/components/benefits/Benefits';

export default function Home() {
  return (
    <div className='container'>
      <Hero />
      <Partners />
      <Benefits />
    </div>
  );
}
