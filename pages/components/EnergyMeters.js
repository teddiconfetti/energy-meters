import React, { useState, useEffect } from 'react';

const EnergyMeters = () => {
  const [glycogenLevel, setGlycogenLevel] = useState(1200);
  const [fatStores, setFatStores] = useState(50000);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Energy Stores Monitor</h1>
      <div className="flex gap-4">
        <div className="text-center">
          <h2>Glycogen</h2>
          <div className="text-xl">{glycogenLevel} cal</div>
        </div>
        <div className="text-center">
          <h2>Fat Stores</h2>
          <div className="text-xl">{fatStores} cal</div>
        </div>
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default EnergyMeters;
