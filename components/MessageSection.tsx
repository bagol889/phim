import React, { useState, useEffect } from 'react';
import { supabase, useMockData, mockMessages } from '../lib/supabase';
import { Message } from '../types';

const MessageSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    if (useMockData) {
      setMessages(mockMessages);
      return;
    }
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setMessages(data);
    if (error) console.error(error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    setIsLoading(true);
    if (useMockData) {
      const newMessage: Message = {
        id: Date.now().toString(),
        name,
        message: content,
        created_at: new Date().toISOString(),
      };
      setMessages([newMessage, ...messages]);
    } else {
      const { error } = await supabase
        .from('messages')
        .insert([{ name, message: content }]);
      if (!error) fetchMessages();
    }
    
    setName('');
    setContent('');
    setIsLoading(false);
  };

  return (
    <section className="py-10 px-4 max-w-2xl mx-auto z-10 relative">
      <div className="text-center mb-8">
        {/* UKURAN FONT DIKECILKAN: dari text-4xl ke text-3xl agar sama dengan Header */}
        <h2 className="text-3xl font-serif text-rose-900 mb-2">A Heartfelt Note</h2>
        <div className="w-12 h-px bg-amber-300 mx-auto opacity-40"></div>
      </div>

      {/* Form: Padding dikurangi, Font input dikecilkan ke text-base */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-white/70 backdrop-blur-2xl border border-white/60 p-6 md:p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(244,63,94,0.08)] mb-12 space-y-6"
      >
        <div className="relative">
          <label className="block text-[9px] uppercase tracking-[0.3em] text-rose-900/50 mb-2 font-bold">From the heart of</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-b border-rose-100/60 py-2 focus:outline-none font-light text-rose-950 text-base placeholder:text-rose-200"
            placeholder="Your name..."
          />
        </div>
        <div>
          <div className="mb-2">
            <label className="block text-[9px] uppercase tracking-[0.3em] text-rose-900/50 font-bold">Your Words</label>
          </div>
          <textarea 
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-white/40 border border-rose-50/50 p-4 rounded-xl focus:outline-none font-light text-rose-950 resize-none leading-relaxed text-base shadow-inner placeholder:text-rose-200"
            placeholder="Write something sincere..."
          />
        </div>
        <button 
          type="submit"
          disabled={isLoading}
          className="w-full bg-rose-900 text-white py-3 rounded-xl font-serif text-lg shadow-lg shadow-rose-900/10 disabled:bg-rose-200 transition-transform active:scale-[0.98]"
        >
          {isLoading ? 'Delivering...' : 'Send Message'}
        </button>
      </form>

      {/* Message List: Font quote dikecilkan ke text-base */}
      <div className="space-y-10">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className="relative"
          >
            <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-300/40 via-rose-200/30 to-transparent"></div>
            <div className="pl-6">
              {/* UKURAN FONT PESAN DIKECILKAN: text-xl -> text-base */}
              <p className="text-rose-900 font-light leading-relaxed text-base italic opacity-90">
                “{msg.message}”
              </p>
              <div className="mt-3 flex items-center space-x-3">
                <span className="text-rose-950/40 text-[10px] font-bold tracking-[0.2em] uppercase">— {msg.name}</span>
                <div className="w-1 h-1 rounded-full bg-amber-200/50"></div>
                <span className="text-rose-900/20 text-[9px] tracking-tight font-medium">
                  {new Date(msg.created_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MessageSection;
