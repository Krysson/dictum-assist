// src/components/Feature.tsx

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Feature = () => {
  return (
    <section className='bg-gray-950 text-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl'>Kickstart your Research or Writing</h2>

          <p className='mt-4 text-gray-300'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-myOrange/20 hover:shadow-myOrange/40'
            href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-10 text-myOrange'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>

            <h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>

            <p className='mt-1 text-sm text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </Link>

          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-myOrange/20 hover:shadow-myOrange/40'
            href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-10 text-myOrange'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>

            <h2 className='mt-4 text-xl font-bold text-white'>This Digital campaigns</h2>

            <p className='mt-1 text-sm text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </Link>

          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-myOrange/20 hover:shadow-myOrange/40'
            href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-10 text-myOrange'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>

            <h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>

            <p className='mt-1 text-sm text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </Link>

          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-myOrange/20 hover:shadow-myOrange/40'
            href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-10 text-myOrange'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>

            <h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>

            <p className='mt-1 text-sm text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </Link>

          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-myOrange/20 hover:shadow-myOrange/40'
            href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-10 text-myOrange'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>

            <h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>

            <p className='mt-1 text-sm text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </Link>

          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-myOrange/20 hover:shadow-myOrange/40'
            href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-10 text-myOrange'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path d='M12 14l9-5-9-5-9 5 9 5z' />
              <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
              />
            </svg>

            <h2 className='mt-4 text-xl font-bold text-white'>Digital campaigns</h2>

            <p className='mt-1 text-sm text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </Link>
        </div>

        <div className='mt-12 text-center'>
          <Button
            asChild
            className='rounded-md bg-myOrange/90 text-grey-100 border-myOrange/90 border-2 w-72  text-lg font-bold  hover:bg-myOrange/70 active:bg-myOrange'>
            <Link href='#'>Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
