// src/components/username.tsx
'use client';
import { useUser } from '@clerk/nextjs';

export default function UserName() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <div>Hi, {user.username} </div>;
}
