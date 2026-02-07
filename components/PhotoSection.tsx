import React from 'react';

const PhotoSection: React.FC = () => {
  return (
    <section className="py-6 px-4 relative z-10 flex flex-col items-center">
      {/* Bingkai Foto */}
      <div className="relative p-2 bg-white/40 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm rotate-1 hover:rotate-0 transition-transform duration-700 ease-in-out mb-4">
        <div className="relative overflow-hidden rounded-lg w-64 aspect-[3/4]">
          {/* UPDATE: Source gambar diubah ke link baru */}
          <img 
            src="https://files.catbox.moe/dfhmpy.jpg" 
            alt="Memorable moment" 
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent"></div>
        </div>
      </div>

      {/* Bagian Quote (Ukuran Normal & Rapat) */}
      <div className="max-w-xs text-center">
        <p className="text-rose-900/80 font-serif italic text-base leading-relaxed">
          “There is a beauty in your presence that words cannot quite capture.”
        </p>
        
        <div className="mt-3 w-6 h-px bg-rose-300/40 mx-auto"></div>
      </div>
    </section>
  );
};

export default PhotoSection;
