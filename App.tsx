import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptInput } from './components/PromptInput';
import { ImageDisplay } from './components/ImageDisplay';
import { generateImage } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>(
    'A stunning 20-year-old fashion influencer with long, wavy blonde hair, striking blue eyes, and a confident smile. She is in a high-fashion photo shoot in a modern, minimalist studio. She is posing dynamically, wearing a couture gown made of shimmering silver fabric. The studio has professional lighting, with softboxes and reflectors creating dramatic highlights and shadows. In the background, a rack of designer clothes and stacks of luxury brand boxes are artfully arranged but slightly out of focus.'
  );
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = useCallback(async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const generatedImageUrl = await generateImage(prompt);
      setImageUrl(generatedImageUrl);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Failed to generate image: ${err.message}`);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main className="mt-8">
          <div className="bg-slate-800/50 rounded-xl shadow-2xl backdrop-blur-lg p-6 sm:p-8 border border-slate-700">
            <PromptInput
              prompt={prompt}
              setPrompt={setPrompt}
              onSubmit={handleGenerateImage}
              isLoading={isLoading}
            />
            <ImageDisplay
              imageUrl={imageUrl}
              isLoading={isLoading}
              error={error}
              prompt={prompt}
            />
          </div>
        </main>
      </div>
      <footer className="w-full max-w-4xl mx-auto text-center py-6 mt-8 text-slate-500 text-sm">
        <p>Powered by Gemini. Images are AI-generated and may be fictional.</p>
      </footer>
    </div>
  );
};

export default App;
