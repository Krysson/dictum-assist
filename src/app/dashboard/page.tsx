// File: src/app/dashboard/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DocumentUpload from '@/components/DocumentUpload';
import QueryInput from '@/components/QueryInput';

type Project = {
  id: string;
  name: string;
  type: string;
  documents: { id: string }[];
};

type Query = {
  id: string;
  content: string;
  response: string;
  createdAt: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [recentQueries, setRecentQueries] = useState<Query[]>([]);

  useEffect(() => {
    // Fetch projects and queries here
    const fetchData = async () => {
      try {
        const projectsResponse = await fetch('/api/projects');
        const queriesResponse = await fetch('/api/queries');

        if (projectsResponse.ok && queriesResponse.ok) {
          const projectsData = await projectsResponse.json();
          const queriesData = await queriesResponse.json();
          setProjects(projectsData);
          setRecentQueries(queriesData);
        } else {
          // Handle error
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Your Projects</h2>
          {projects.length > 0 ? (
            <ul className='space-y-4'>
              {projects.map(project => (
                <li
                  key={project.id}
                  className='border p-4 rounded'>
                  <h3 className='text-xl font-medium'>{project.name}</h3>
                  <p className='text-gray-600'>Type: {project.type}</p>
                  <p className='text-gray-600'>Documents: {project.documents.length}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>You don&lsquo;t have any projects yet.</p>
          )}

          <h2 className='text-2xl font-semibold mt-8 mb-4'>Recent Queries</h2>
          {recentQueries.length > 0 ? (
            <ul className='space-y-4'>
              {recentQueries.map(query => (
                <li
                  key={query.id}
                  className='border p-4 rounded'>
                  <p className='font-medium'>Query: {query.content}</p>
                  <p className='text-gray-600 mt-2'>
                    Response: {query.response.substring(0, 100)}...
                  </p>
                  <p className='text-sm text-gray-500 mt-1'>
                    {new Date(query.createdAt).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven&lsquo;t made any queries yet.</p>
          )}
        </div>

        <div>
          <DocumentUpload />
          <QueryInput />
        </div>
      </div>
    </div>
  );
}
