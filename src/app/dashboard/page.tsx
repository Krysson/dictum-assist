// File: src/app/dashboard/page.tsx
import React from 'react';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';
import DocumentUpload from '@/components/DocumentUpload';
import QueryInput from '@/components/QueryInput';

type ProjectWithDocuments = Awaited<ReturnType<typeof getProjects>>[number];
type RecentQuery = Awaited<ReturnType<typeof getRecentQueries>>[number];

async function getProjects(userId: string) {
  return await prisma.project.findMany({
    where: { userId },
    include: { documents: true }
  });
}

async function getRecentQueries(userId: string) {
  return await prisma.query.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: 5
  });
}

export default async function Dashboard() {
  const { userId } = auth();
  if (!userId) {
    return <div>Please log in to view your dashboard.</div>;
  }

  const projects: ProjectWithDocuments[] = await getProjects(userId);
  const recentQueries: RecentQuery[] = await getRecentQueries(userId);

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
