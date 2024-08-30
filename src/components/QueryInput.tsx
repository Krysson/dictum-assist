// File: src/components/QueryInput.tsx
import React, { useState } from 'react';
import AIResponse from './AIResponse';

export default function QueryInput() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch('/api/queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });

      if (!res.ok) throw new Error('Failed to submit query');

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error submitting query:', error);
      setResponse('An error occurred while processing your query.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Legal Query</h2>
      <form
        onSubmit={handleSubmit}
        className='space-y-4'>
        <textarea
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='Enter your legal query here...'
          className='w-full p-2 border rounded'
          rows={4}
        />
        <button
          type='submit'
          disabled={isLoading}
          className='bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300'>
          {isLoading ? 'Submitting...' : 'Submit Query'}
        </button>
      </form>
      {response && <AIResponse response={response} />}
    </div>
  );
}
