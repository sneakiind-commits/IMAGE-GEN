import React from 'react';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
}

const LoadingSkeleton: React.FC = () => (
    <div className="w-full aspect-[3/4] bg-slate-700/50 rounded-lg animate-pulse flex items-center justify-center">
        <svg className="w-12 h-12 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
    </div>
);

const Placeholder: React.FC = () => (
    <div className="w-full aspect-[3/4] bg-slate-800 border-2 border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center text-center text-slate-500 p-8">
         <svg className="w-16 h-16 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <h3 className="text-lg font-semibold text-slate-400">Your generated image will appear here</h3>
        <p className="mt-1 text-sm">Describe the photo shoot you want to create and click "Generate Image" to begin.</p>
    </div>
);


export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error, prompt }) => {
  return (
    <div className="mt-8">
      {error && (
        <div className="w-full aspect-[3/4] bg-red-900/20 border border-red-500 rounded-lg flex flex-col items-center justify-center text-center p-8">
           <svg className="w-12 h-12 text-red-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
           </svg>
           <h3 className="text-lg font-semibold text-red-300">Generation Failed</h3>
           <p className="mt-1 text-sm text-red-400">{error}</p>
        </div>
      )}
      {!error && (
        <div className="relative w-full max-w-lg mx-auto aspect-[3/4]">
          {isLoading && <LoadingSkeleton />}
          {!isLoading && !imageUrl && <Placeholder />}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={prompt}
              className="w-full h-full object-cover rounded-lg shadow-2xl animate-fade-in"
            />
          )}
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
