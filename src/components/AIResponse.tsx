// File: src/components/AIResponse.tsx
import React from 'react';

interface AIResponseProps {
  response: string;
}

export default function AIResponse({ response }: AIResponseProps) {
  return (
    <div className='mt-4 p-4 bg-gray-100 rounded'>
      <h3 className='text-xl font-semibold mb-2'>AI Response</h3>
      <div className='prose max-w-none'>
        {response.split('\n').map((paragraph, index) => (
          <p
            key={index}
            className='mb-2'>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
