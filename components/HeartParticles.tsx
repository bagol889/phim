import React, { useEffect, useState } from 'react';

const HeartParticles: React.FC = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate partikel sekali saja
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Posisi horizontal acak
      size: Math.random() * 15 + 8, // Ukuran bervariasi
      // Durasi animasi (semakin besar angka, semakin lambat)
      duration: Math.random() * 20 + 15, 
      // Delay negatif penting agar layar langsung penuh saat dibuka
      delay: Math.random() * -30, 
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes floatUpStable {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-120vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>

      {/* PERBAIKAN UTAMA:
        height: '100lvh' -> Mengunci tinggi layar agar tidak berubah saat address bar HP naik/turun.
        position: fixed  -> Menempel di layar, tidak ikut scroll konten.
      */}
      <div 
        className="fixed top-0 left-0 w-full overflow-hidden pointer-events-none z-[0]"
        style={{ height: '100lvh' }} 
      >
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.left}%`,
              // Mulai dari BAWAH layar yang sudah dikunci (100lvh)
              top: '100%', 
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              // Animasi jalan terus
              animation: `floatUpStable ${p.duration}s linear ${p.delay}s infinite`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-rose-300/60"
              style={{ filter: 'drop-shadow(0 0 2px rgba(255, 182, 193, 0.4))' }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeartParticles;
