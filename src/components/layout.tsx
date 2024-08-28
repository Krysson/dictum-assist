// File: src/components/Layout.tsx
import React from 'react';
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      {/* TODO: Add footer */}
    </div>
  );
}
