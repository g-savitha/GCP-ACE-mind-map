import React from 'react';
import GCPMindMap from '@/components/GCPMindMap';

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">GCP ACE Mind Map </h1>
        <GCPMindMap />
      </div>
    </div>
  );
}

export default App;