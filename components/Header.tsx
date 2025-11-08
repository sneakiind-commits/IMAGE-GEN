import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="inline-flex items-center gap-4">
        <SparklesIcon className="w-10 h-10 text-violet-400" />
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
          AI Fashion Shoot
        </h1>
      </div>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
        Describe a scene and watch it come to life. Generate stunning, high-quality fashion photography with the power of AI.
      </p>
    </header>
  );
};
