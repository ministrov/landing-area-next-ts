import { Hero } from '@/components/hero/Hero';
import { Partners } from '@/components/partners/Partners';

export default function Home() {
  return (
    <div className='container'>
      <Hero />
      <Partners />
    </div>
  );
}
