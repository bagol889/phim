import { createClient } from '@supabase/supabase-js';

// --- KONFIGURASI VERCEL ---
// Kita suruh website baca "Environment Variables" dari Vercel
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Pengecekan keamanan (hanya muncul di console developer jika lupa setting)
if (!supabaseUrl || !supabaseKey) {
  console.warn('⚠️ Supabase URL atau Key belum disetting di Vercel Environment Variables!');
}

// Setting ini untuk mematikan mode data palsu
export const useMockData = false; 

// Membuat koneksi
export const supabase = createClient(
  supabaseUrl || '', 
  supabaseKey || ''
);

// Data palsu (cadangan)
export const mockMessages = [
  {
    id: '1',
    name: 'Julian',
    message: 'Thank you for being someone I feel safe growing with.',
    created_at: new Date().toISOString(),
  },
];
