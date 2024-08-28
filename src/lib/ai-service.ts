// File: src/lib/ai-service.ts
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';

// TODO: Initialize OpenAI and Anthropic clients with proper configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This should be set in your .env.local file
});

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY // This should be set in your .env.local file
});

export async function analyzeDocument(documentContent: string) {
  // TODO: Implement document analysis using AI
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4', // or another appropriate model
      messages: [
        { role: 'system', content: 'You are a legal document analyzer.' },
        { role: 'user', content: `Analyze the following legal document: ${documentContent}` }
      ]
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error analyzing document:', error);
    throw error;
  }
}

export async function answerQuery(query: string, context: string) {
  // TODO: Implement AI-powered query answering
  try {
    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229', // or another appropriate model
      max_tokens: 1000,
      messages: [{ role: 'user', content: `Context: ${context}\n\nQuery: ${query}` }]
    });

    // Check if the response has content and it's an array
    if (response.content && Array.isArray(response.content) && response.content.length > 0) {
      // Find the first text content
      const textContent = response.content.find(block => block.type === 'text');
      if (textContent && 'text' in textContent) {
        return textContent.text;
      }
    }

    // If no text content is found, return an error message
    return 'No text response found.';
  } catch (error) {
    console.error('Error answering query:', error);
    throw error;
  }
}
