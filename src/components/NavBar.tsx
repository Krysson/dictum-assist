// src/components/NavBar.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const NavBar = () => {
  return (
    <header className=' bg-gray-950'>
      <div className=' px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex-1 md:flex md:items-center md:gap-12 '>
            <Link
              className='block text-purple-600'
              href='/'>
              <div className='flex items-center'>
                <Image
                  src='/images/logotest1.png'
                  alt='logo'
                  width={75}
                  height={75}
                />
                {/* <p className='text-white ml-2'>dictumAssist</p> */}
              </div>
            </Link>
          </div>

          <div className='md:flex md:items-center md:gap-12'>
            <nav
              aria-label='Global'
              className='hidden md:block'>
              <ul className='flex items-center gap-6 text-sm'>
                <li>
                  <Link
                    className='text-white hover:text-white/75'
                    href='#'>
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white hover:text-white/75'
                    href='#'>
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white hover:text-white/75'
                    href='#'>
                    History
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white hover:text-white/75'
                    href='/pricing'>
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white hover:text-white/75'
                    href='#'>
                    Resources
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-white hover:text-white/75'
                    href='#'>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            <div className='flex items-center gap-4'>
              <div className='sm:flex sm:gap-4'>
                <Button
                  asChild
                  className='rounded-md border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600/40 hover:text-white focus:outline-none focus:ring active:text-opacity-75'>
                  <Link href='#'>Login</Link>
                </Button>

                <div className='hidden sm:flex'>
                  <Button
                    asChild
                    className='rounded-md bg-transparent text-blue-600 border-blue-600/40 border-2 px-5 py-2.5 text-sm font-medium hover:bg-blue-600/40 active:bg-blue-500'>
                    <Link href='#'>Register</Link>
                  </Button>
                </div>
              </div>

              <div className='block md:hidden'>
                <Button className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
