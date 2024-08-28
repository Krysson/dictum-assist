// src/app/page.tsx
import Feature from '@/components/Feature';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='bg-black'>
      <Hero />
      <Feature />
    </div>
  );
}
