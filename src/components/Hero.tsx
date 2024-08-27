// src/components/Hero.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <main className=' mx-auto px-4 py-12 bg-gray-900 text-center text-veryLightGray'>
      <h1 className='text-5xl font-bold mb-6'>
        Find the right information. <span className='text-green-400'>Instantly.</span>
      </h1>
      <p className='text-xl mb-8'>
        Connect all your legal documents for seamless, unified searching.
      </p>
      <div className='max-w-xl mx-auto'>
        <div className='flex mb-4'>
          <Input
            placeholder='Search...'
            className='flex-grow'
          />
          <Button
            variant='secondary'
            className='ml-2'>
            Search
          </Button>
        </div>
        <Button className='w-full text-gray-900'>Try it for free</Button>
      </div>
    </main>
  );
};

export default Hero;
