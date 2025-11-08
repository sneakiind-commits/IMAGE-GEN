import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="prompt-input" className="text-lg font-semibold text-slate-300">
        Describe Your Vision
      </label>
      <textarea
        id="prompt-input"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., A model in a futuristic outfit on a rooftop at sunset..."
        className="w-full h-32 p-4 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200 resize-none placeholder-slate-500"
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading || !prompt}
        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-violet-600 rounded-lg shadow-lg hover:bg-violet-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-300 ease-in-out overflow-hidden disabled:shadow-none"
      >
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-40 group-hover:h-40 opacity-10"></span>
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          'Generate Image'
        )}
      </button>
    </div>
  );
};
