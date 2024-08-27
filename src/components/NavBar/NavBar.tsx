// src/components/NavBar.tsx
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import Link from 'next/link';
import { InputWithButton } from '@/components/InputWithButton';

const NavBar = () => {
  return (
    <header className='py-4 px-6 bg-black flex justify-between items-center '>
      <div className='text-2xl font-bold text-veryLightGray'>dictumAI</div>
      <div className='text-2xl font-bold text-veryLightGray'>
        <InputWithButton />
      </div>
      <div className=' pl-96 ml-96  justify-between items-center'>
        <Button
          variant='outline'
          className=' text-veryLightGray bg-black border-none hover:bg-veryDarkBlue hover:text-veryLightGray'>
          About Us
        </Button>
        <Button
          variant='default'
          className=' text-veryLightGray bg-black border-none hover:bg-veryDarkBlue hover:text-veryLightGray '>
          Pricing
        </Button>
        <Button
          variant='default'
          className=' text-veryLightGray bg-black border-none hover:bg-veryDarkBlue hover:text-veryLightGray '>
          Resources
        </Button>
      </div>
      <div className='flex gap-2'>
        <Button
          variant='default'
          className=' bg-brightRed hover:bg-brightRedLight'>
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
