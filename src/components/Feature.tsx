// src/components/Feature.tsx

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Feature = () => {
  return (
    <section className='py-16  bg-gray-900 text-center text-veryLightGray'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-8'>Internal Search</h2>
        <p className='text-xl mb-8'>
          Someone shared a file with you, but have no idea which app or platform it&lsquo;s on?
        </p>
        <p className='mb-8'>
          Simply type a keyword, and our AI will locate it for you - from documents, emails,
          conversations to customer files.
        </p>
        <div className='max-w-2xl mx-auto bg-gray-700 p-4 rounded-lg'>
          <Input
            placeholder='Type a command or search...'
            className='w-full mb-4'
          />
          <div className='flex justify-start space-x-2 mb-4'>
            <Button
              variant='secondary'
              size='sm'>
              All
            </Button>
            <Button
              variant='secondary'
              size='sm'>
              Emails
            </Button>
            <Button
              variant='secondary'
              size='sm'>
              Files
            </Button>
            <Button
              variant='secondary'
              size='sm'>
              Messages
            </Button>
            <Button
              variant='secondary'
              size='sm'>
              Tasks
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
