// File: src/app/api/queries/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { answerQuery } from '@/lib/ai-service';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { query } = await req.json();
    if (!query) {
      return NextResponse.json({ error: 'No query provided' }, { status: 400 });
    }

    // TODO: Fetch relevant context from user's documents
    const context = 'Context from user documents';

    // Get AI response
    const aiResponse = await answerQuery(query, context);

    // Save query and response to database
    const savedQuery = await prisma.query.create({
      data: {
        content: query,
        response: aiResponse,
        userId: userId
      }
    });

    return NextResponse.json({ response: aiResponse, id: savedQuery.id });
  } catch (error) {
    console.error('Error processing query:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const queries = await prisma.query.findMany({
      where: { userId: userId },
      orderBy: { createdAt: 'desc' },
      take: 10 // Limit to the 10 most recent queries
    });

    return NextResponse.json(queries);
  } catch (error) {
    console.error('Error fetching queries:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
