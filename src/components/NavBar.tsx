// src/components/NavBar.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import UserName from '../lib/username';
import { Menu, X } from 'lucide-react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/dictumAI/overview', label: 'About' },
    { href: '/company/careers', label: 'Careers' },
    { href: '/dictumAI/stories', label: 'Stories' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/resources', label: 'Resources' },
    { href: '/resources/blog', label: 'Blog' }
  ];

  return (
    <header className='bg-gray-950'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex-1 md:flex md:items-center md:gap-12'>
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
              </div>
            </Link>
          </div>

          <div className='md:flex md:items-center md:gap-12'>
            <nav
              aria-label='Global'
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } absolute top-16 left-0 w-full bg-gray-950/95 md:static md:block md:w-auto`}>
              <div className='flex flex-col items-center py-8 md:flex-row md:py-0'>
                <ul className='flex  flex-col items-center gap-6 text-sm md:flex-row'>
                  {navLinks.map(link => (
                    <li key={link.href}>
                      <Link
                        className='text-white hover:text-white/75'
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className='mt-6  w-2/5 flex flex-col items-center gap-4 md:mt-0 md:flex-row md:ml-6'>
                  <SignedOut>
                    <SignInButton mode='modal'>
                      <Button
                        variant='default'
                        size='default'
                        className='w-full md:w-auto rounded-md bg-transparent text-blue-600 border-blue-600/40 border-2 px-5 py-2.5 text-sm font-medium hover:bg-blue-600/40 active:bg-blue-500'>
                        Sign In
                      </Button>
                    </SignInButton>

                    <SignUpButton mode='modal'>
                      <Button
                        variant='default'
                        size='default'
                        className='w-full md:w-auto rounded-md border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600/40 hover:text-white focus:outline-none focus:ring active:text-opacity-75'>
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <div className='flex justify-center items-center'>
                      <span className='mr-6 text-purple-600'>
                        <UserName />
                      </span>
                      <UserButton afterSignOutUrl='/' />
                    </div>
                  </SignedIn>
                </div>
              </div>
            </nav>

            <div className='block md:hidden'>
              <Button
                className='rounded bg-transparent p-2 text-gray-100 transition hover:text-gray-100/80 hover:bg-blue-600/70 border-blue-600/30 border-2 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
                onClick={toggleMenu}>
                {isMenuOpen ? <X className='size-5' /> : <Menu className='size-5' />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
