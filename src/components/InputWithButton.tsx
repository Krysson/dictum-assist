import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function InputWithButton() {
  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input
        type='search'
        placeholder='Quick search...'
        className='bg-black  border-gray-800 focus:ring-gray-800 '
        height={8}
      />
      <Button
        className='bg-black'
        type='submit'>
        Search
      </Button>
    </div>
  );
}
