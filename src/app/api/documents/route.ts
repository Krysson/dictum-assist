// src/app/api/documents/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { analyzeDocument } from '@/lib/ai-service';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // TODO: Implement file storage logic (e.g., upload to S3)
    // For now, we'll assume the content is stored as a string
    const content = await file.text();

    // Analyze the document
    const analysis = await analyzeDocument(content);

    // Create a new document in the database
    const document = await prisma.document.create({
      data: {
        type: file.type,
        content: content,
        summary: analysis,
        project: {
          connect: {
            id: formData.get('projectId') as string
          }
        }
      }
    });

    return NextResponse.json(document);
  } catch (error) {
    console.error('Error processing document:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
