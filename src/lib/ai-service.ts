// File: src/lib/ai-service.ts
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

export async function analyzeDocument(documentContent: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a legal document analyzer.' },
        { role: 'user', content: `Analyze the following legal document: ${documentContent}` }
      ]
    });
    return response.choices[0].message.content || 'No analysis generated.';
  } catch (error) {
    console.error('Error analyzing document:', error);
    throw error;
  }
}

export async function answerQuery(query: string, context: string): Promise<string> {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1000,
      messages: [{ role: 'user', content: `Context: ${context}\n\nQuery: ${query}` }]
    });

    if (response.content && Array.isArray(response.content) && response.content.length > 0) {
      const textContent = response.content.find(block => block.type === 'text');
      if (textContent && 'text' in textContent) {
        return textContent.text;
      }
    }

    return 'No text response found.';
  } catch (error) {
    console.error('Error answering query:', error);
    throw error;
  }
}
