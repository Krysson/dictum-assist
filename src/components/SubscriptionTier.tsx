// File: src/components/SubscriptionTier.tsx
import React from 'react';

interface SubscriptionTierProps {
  tier: 'Free' | 'Solo' | 'Enterprise' | 'Education';
}

export default function SubscriptionTier({ tier }: SubscriptionTierProps) {
  // TODO: Implement subscription tier component
  return (
    <div>
      <h3>{tier} Tier</h3>
      {/* TODO: Add feature list and pricing information based on tier */}
    </div>
  );
}
