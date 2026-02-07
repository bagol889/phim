import React from 'react';
import HeartParticles from './components/HeartParticles';
import PhotoSection from './components/PhotoSection';
import MessageSection from './components/MessageSection';

const InstagramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const BackgroundDecor = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] opacity-20">
    <svg className="absolute top-0 left-0 w-64 h-64 text-rose-200" viewBox="0 0 100 100">
      <path d="M0,0 Q50,0 50,50 T100,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
    <svg className="absolute bottom-0 right-0 w-96 h-96 text-amber-200" viewBox="0 0 100 100">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1,4" />
      <path d="M100,20 Q80,50 100,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-rose-100 selection:text-rose-900 bg-transparent antialiased">
      <BackgroundDecor />
      <HeartParticles />

      {/* Header: Padding dikurangi, Font dikecilkan */}
      <header className="relative pt-12 pb-6 px-4 text-center z-10">
        <div className="mb-2 inline-block">
          <span className="text-rose-900/40 text-[10px] tracking-[0.3em] uppercase font-bold">Valentine’s 2026</span>
        </div>
        {/* Font diubah dari 5xl ke 3xl (mobile) dan 5xl (desktop) */}
        <h1 className="text-3xl md:text-5xl font-serif text-rose-900 mb-2 tracking-tight">
          Happy Valentine’s Day Phim
        </h1>
        
        <p className="text-rose-900/60 max-w-md mx-auto leading-relaxed font-light text-sm">
          Celebrating love in all its forms. Happy Valentine’s Day.
        </p>
        
        <div className="mt-6">
          <div className="w-px h-10 bg-gradient-to-b from-amber-200 via-rose-100 to-transparent mx-auto"></div>
        </div>
      </header>

      <main className="relative z-10 space-y-4">
        <PhotoSection />
        <MessageSection />
      </main>

      {/* Footer: Margin dan Padding dikurangi drastis agar lebih rapat */}
      <footer className="py-10 text-center border-t border-rose-100/50 mt-8 relative z-[200] bg-white/10 backdrop-blur-[4px]">
        <div className="mb-4 flex justify-center space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-rose-200/40"></div>
          ))}
        </div>

        <div className="mb-6 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-rose-900/40 mb-4 font-bold">The Socials</span>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://www.instagram.com/strio.bgass/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2"
              style={{ WebkitTapHighlightColor: 'transparent' }} 
            >
              <div className="p-3 rounded-full border border-rose-100/60 bg-white/70 backdrop-blur-md text-rose-900/40">
                <InstagramIcon />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[8px] uppercase tracking-[0.2em] text-rose-900/50 font-bold">The Creator</span>
                <span className="text-[9px] lowercase tracking-[0.1em] text-rose-900/30">@strio.bgass</span>
              </div>
            </a>
            
            <a 
              href="https://www.instagram.com/zm0k_9/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="p-3 rounded-full border border-rose-100/60 bg-white/70 backdrop-blur-md text-rose-900/40">
                <InstagramIcon />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[8px] uppercase tracking-[0.2em] text-rose-900/50 font-bold">The Recipient</span>
                <span className="text-[9px] lowercase tracking-[0.1em] text-rose-900/30">@zm0k_9</span>
              </div>
            </a>
          </div>
        </div>

        <p className="text-rose-900/40 font-serif italic text-sm">
          Just a little something for you.
        </p>
        <div className="mt-4 flex flex-col items-center space-y-2">
          <p className="text-[9px] text-rose-900/20 tracking-[0.4em] uppercase font-bold">
            Made by • strio.bgass
          </p>
          <div className="w-8 h-[1px] bg-rose-200/30"></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
