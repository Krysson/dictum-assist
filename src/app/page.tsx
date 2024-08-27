// src/app/page.tsx

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from '@/components/Footer';
import Feature from '@/components/Feature';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Feature />
    </div>
  );
}
