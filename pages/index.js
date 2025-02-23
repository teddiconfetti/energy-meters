import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the EnergyMeters component with no SSR to allow localStorage
const EnergyMeters = dynamic(() => import('../components/EnergyMeters'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="min-h-screen p-4 flex justify-center items-center bg-gray-50">
      <EnergyMeters />
    </div>
  );
}
