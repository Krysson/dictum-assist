// File: src/components/PricingComponent.tsx
import React from 'react';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: {
    name: string;
    included: boolean;
  }[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    description:
      'Find out what we can do for you for NO cost. Summarization and analysis of various legal documents.',
    features: [
      { name: 'Default AI Model', included: true },
      { name: 'Context-aware responses', included: true },
      { name: '1 user', included: true },
      { name: '500MB of storage', included: true },
      { name: 'Secure document storage', included: true },
      { name: 'Chat-like interface for queries', included: true },
      { name: 'Personal Dashboard', included: true },
      { name: 'Community support', included: true }
    ]
  },
  {
    name: 'Pro',
    price: '$20',
    description:
      'For Solo Offices or Single Users. Get answers and analysis on all of your stored documents. Single research assistant / paralegal included.',
    features: [
      { name: 'Free Tier Features', included: true },
      { name: 'Choose your AI Model - Default, OpenAi or Anthropic', included: true },
      { name: 'Free Assistant / Paralegal User Account', included: true },
      { name: '25GB of storage', included: true },
      { name: 'Document Redlines - (COMING SOON)', included: true },
      {
        name: 'Full Note taking capabilities, including voice notes - (COMING SOON)',
        included: true
      },
      { name: 'Default integration with legal websites & databases', included: true },
      { name: 'Integrated AI fine-tuning with user-specific stored documents', included: true },
      { name: 'Dashboard for stored information and file access', included: true },
      { name: 'Project Organization', included: true },
      { name: 'Project and chat history view', included: true },
      { name: 'Email Support', included: true }
    ]
  },
  {
    name: 'Enterprise / Firm',
    price: '$60',
    description:
      'Three (3) Assistant / Paralegal User Accounts included. Self Hosting Options. Custom AI Models.',
    features: [
      { name: 'Everything in Pro +', included: true },
      { name: '100GB of storage', included: true },
      { name: 'Collaborative features', included: true },
      { name: 'Project & Chat comments', included: true },
      { name: 'Custom Work Flows', included: true },
      { name: 'Document Creation - (COMING SOON)', included: true },
      { name: 'Self-hosting option with local model (add on)', included: true },
      { name: 'Priority support - Email & Phone', included: true }
    ]
  }
];

const PricingCard: React.FC<{ tier: PricingTier }> = ({ tier }) => (
  <Card className='flex flex-col'>
    <CardHeader>
      <CardTitle>{tier.name}</CardTitle>
      <CardDescription>{tier.description}</CardDescription>
    </CardHeader>
    <CardContent className='flex-grow'>
      <div className='text-3xl font-bold mb-4'>
        {tier.price} <span className='text-sm font-normal text-gray-600'>/ user per month</span>
      </div>
      <ul className='space-y-2'>
        {tier.features.map((feature, index) => (
          <li
            key={index}
            className='flex items-center'>
            {feature.included ? (
              <Check className='h-5 w-5 text-green-500 mr-2' />
            ) : (
              <X className='h-5 w-5 text-red-500 mr-2' />
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button
        asChild
        className='w-full'>
        <Link href='#'>Get Started</Link>
      </Button>
    </CardFooter>
  </Card>
);

const PricingComponent: React.FC = () => {
  return (
    <section className='bg-gray-50 py-12 sm:py-16 lg:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl'>
            Pricing Plans
          </h2>
          <p className='mt-4 text-xl text-gray-600'>Choose the perfect plan for your needs.</p>
          <p className='text-sm text-gray-600'>
            Every Plan comes with Encrypted Storage, Secure access, Default Ai Models.
          </p>
        </div>
        <div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
