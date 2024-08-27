// src/components/NavBar.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NavBar = () => {
  return (
    <header className='py-4 px-6 flex justify-between items-center bg-gray-900'>
      <div className='text-2xl font-bold text-veryLightGray'>dictumAI</div>

      <nav className='flex gap-2'>
        <Button
          variant='secondary'
          className='text-darkGreyishBlue'>
          Pricing
        </Button>
        <Button
          variant='outline'
          className='text-darkGreyishBlue'>
          Resources
        </Button>
        <Button
          variant='outline'
          className='text-darkGreyishBlue'>
          Login
        </Button>
        <Button
          variant='default'
          className='ml-4 bg-brightRedLight'>
          Sign up
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;
