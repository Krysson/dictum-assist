// src/components/Hero.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className='bg-gray-900 text-white '
      style={{
        backgroundImage: "url('/images/bgTest.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className='mx-auto max-w-screen-xl px-4 pb-36 pt-32 sm:pb-16 sm:pt-16 lg:flex lg:h-screen lg:items-center'>
        <div className='mx-auto max-w-3xl text-center'>
          <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl'>
            dictumAI <br /> <span className='sm:block'>Only Relevant Data.</span>
            <span className='sm:block sm:h-28'> Together. </span>
          </h1>

          <p className='mx-auto mt-4 max-w-xl sm:text-xl/relaxed'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga
            ducimus numquam ea!
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Button
              asChild
              className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'>
              <Link href='#'>Get Started</Link>
            </Button>

            <Button
              asChild
              className='block w-full rounded border border-blue-600 bg-transparent px-12 py-2 text-sm font-medium text-white hover:bg-blue-600/40 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto'>
              <Link href='#'>Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
