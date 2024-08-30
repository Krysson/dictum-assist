// File: src/components/DocumentUpload.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function DocumentUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/documents', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      // Redirect to the document page or update UI as needed
      router.push(`/document/${data.id}`);
    } catch (error) {
      console.error('Error uploading document:', error);
      // TODO: Add error handling UI
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className='mt-4'>
      <h2 className='text-xl font-semibold mb-2'>Upload Document</h2>
      <input
        type='file'
        accept='.pdf,.doc,.docx'
        onChange={handleFileChange}
        className='mb-2 p-2 border rounded'
      />
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className='bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300'>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}
