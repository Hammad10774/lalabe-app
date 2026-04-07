import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const AmbientBackground = () => (
  <div className="bg-ambient"></div>
);

const Stars = () => {
  const [stars, setStars] = useState<{ id: number; size: number; top: number; left: number; d: number; delay: number; op: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      top: Math.random() * 60,
      left: Math.random() * 100,
      d: 3 + Math.random() * 5,
      delay: Math.random() * 6,
      op: 0.15 + Math.random() * 0.25,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="stars">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            top: `${s.top}%`,
            left: `${s.left}%`,
            '--d': `${s.d}s`,
            '--delay': `${s.delay}s`,
            '--op': s.op,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const Header = () => (
  <div className="pt-[52px] pb-6 px-7 text-center animate-fade-up relative">
    <button className="absolute top-[52px] right-7 text-terracotta hover:text-deep-rust transition-colors">
      <Menu size={24} strokeWidth={1.5} />
    </button>
    <div className="w-11 h-11 mx-auto mb-4 animate-float">
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="20" fill="#F5E6D3" stroke="rgba(201,123,75,0.3)" strokeWidth="1"/>
        <path d="M28 14C24 14 20 18 20 22C20 26 24 30 28 30C24.5 30.5 19 28 17 24C15 20 17 15 21 13C23.5 12 26 12.5 28 14Z" fill="#C97B4B" opacity="0.6"/>
        <circle cx="28" cy="16" r="1.5" fill="#C97B4B" opacity="0.4"/>
        <circle cx="25" cy="13" r="1" fill="#C97B4B" opacity="0.3"/>
      </svg>
    </div>
    <div className="font-serif text-4xl font-light tracking-[0.08em] text-deep-rust leading-none">lalabe</div>
    <div className="text-[13px] text-text-muted tracking-[0.12em] mt-1.5 font-light">your voice, their dreams</div>
  </div>
);

const NavTabs = ({ currentTab, setCurrentTab }: { currentTab: string, setCurrentTab: (t: string) => void }) => {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'record', label: 'Record' },
    { id: 'sleep', label: 'Sleep' },
    { id: 'profile', label: 'Profile' },
  ];

  return (
    <div className="flex gap-1.5 mx-6 mb-7 bg-white/50 rounded-2xl p-1.5 border border-terracotta/10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setCurrentTab(tab.id)}
          className={`flex-1 py-2.5 px-1.5 rounded-xl text-xs font-medium tracking-[0.04em] transition-all duration-300 font-sans ${
            currentTab === tab.id
              ? 'bg-cream text-deep-rust shadow-[0_2px_12px_rgba(139,74,42,0.1)]'
              : 'text-text-muted bg-transparent'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const BottomNav = ({ currentTab, setCurrentTab }: { currentTab: string, setCurrentTab: (t: string) => void }) => {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (active: boolean) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" opacity={active ? 1 : 0.6}>
          <path d="M10 2L2 8V18H7V13H13V18H18V8L10 2Z"/>
        </svg>
      )
    },
    {
      id: 'record',
      label: 'Record',
      icon: (active: boolean) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" opacity={active ? 1 : 0.6}>
          <rect x="7" y="3" width="6" height="10" rx="3"/>
          <path d="M4 11C4 14.3 6.7 17 10 17C13.3 17 16 14.3 16 11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <line x1="10" y1="17" x2="10" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'sleep',
      label: 'Sleep',
      icon: (active: boolean) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" opacity={active ? 1 : 0.6}>
          <path d="M17 14C13 15 9 12 9 8C9 6 10 4 12 3C7 3 4 7 4 11C4 15 7 18 11 18C14 18 16 16 17 14Z"/>
        </svg>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: (active: boolean) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" opacity={active ? 1 : 0.6}>
          <circle cx="10" cy="7" r="4"/>
          <path d="M3 17C3 14 6 12 10 12C14 12 17 14 17 17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-[#FDF6EE]/90 backdrop-blur-xl border-t border-terracotta/10 flex py-2 pb-4 z-[200]">
      {navItems.map(item => {
        const active = currentTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setCurrentTab(item.id)}
            className={`flex-1 flex flex-col items-center gap-1 p-1.5 font-sans text-[10px] tracking-[0.04em] transition-colors duration-200 ${
              active ? 'text-terracotta' : 'text-text-muted'
            }`}
          >
            {item.icon(active)}
            <span>{item.label}</span>
            <div className={`w-1 h-1 rounded-full bg-terracotta mt-0.5 transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-0'}`} />
          </button>
        );
      })}
    </div>
  );
};

const PlayerBar = ({ nowPlaying, playerPlaying, setPlayerPlaying }: { nowPlaying: string | null, playerPlaying: boolean, setPlayerPlaying: (p: boolean) => void }) => {
  return (
    <div className={`fixed bottom-[72px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[358px] bg-gradient-to-br from-[#3A2514]/95 to-[#2A3550]/95 rounded-2xl py-3.5 px-4 flex items-center gap-3 z-[100] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-400 ${
      nowPlaying ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-5 pointer-events-none'
    }`}>
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F0C9A8] to-[#C97B4B] flex items-center justify-center text-base shrink-0">⭐</div>
      <div className="flex-1">
        <div className="font-serif text-[15px] text-white/90 mb-0.5">{nowPlaying}</div>
        <div className="text-[10px] text-white/40 tracking-[0.05em]">MAMA'S VOICE</div>
      </div>
      <div className="flex items-center gap-2.5">
        <button className="text-white/60 hover:text-white p-1 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 2L3 14M3 8L13 2V14L3 8Z"/></svg>
        </button>
        <button 
          className="w-9 h-9 rounded-full bg-terracotta hover:bg-[#E08A5C] hover:scale-105 flex items-center justify-center transition-all border-none cursor-pointer"
          onClick={() => setPlayerPlaying(!playerPlaying)}
        >
          {playerPlaying ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><rect x="3" y="2" width="3" height="12" rx="1"/><rect x="10" y="2" width="3" height="12" rx="1"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path d="M4 2L12 8L4 14Z"/></svg>
          )}
        </button>
        <button className="text-white/60 hover:text-white p-1 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13 2L13 14M13 8L3 2V14L13 8Z"/></svg>
        </button>
      </div>
    </div>
  );
};

// Pages
const HomePage = ({ nowPlaying, setNowPlaying, playerPlaying, setPlayerPlaying }: any) => {
  const heights = [30,55,40,70,45,80,35,65,50,75,40,60,45,85,30,70,50,65,40,75,55,45,80,35,60,70,45,55,40,65];
  
  const lullabies = [
    { name: 'Twinkle Little Star', icon: '⭐', bg: 'from-[#FEF3E2] to-[#F5DEB3]', meta: '2:14 · Now playing' },
    { name: 'Hush Little Baby', icon: '🌙', bg: 'from-[#EEF5EE] to-[#C8DBC6]', meta: '3:02 · Gentle rhythm' },
    { name: 'Rock-a-bye Baby', icon: '🌸', bg: 'from-[#F0EAF5] to-[#C4B5D4]', meta: '2:45 · Soft & slow' },
    { name: 'You Are My Sunshine', icon: '☀️', bg: 'from-[#FDF3D3] to-[#FAD67A]', meta: '2:58 · Warm & bright' },
  ];

  const handlePlay = (name: string) => {
    if (nowPlaying === name) {
      setNowPlaying(null);
      setPlayerPlaying(false);
    } else {
      setNowPlaying(name);
      setPlayerPlaying(true);
    }
  };

  return (
    <div className="animate-fade-up">
      <div className="text-[11px] tracking-[0.14em] text-text-muted uppercase px-7 mb-3.5 font-medium">Your voice profile</div>
      
      <div className="mx-6 mb-5 bg-gradient-to-br from-[#FAEBD7] to-[#F5DEC8] rounded-3xl p-6 border border-terracotta/20 relative overflow-hidden">
        <div className="absolute -top-7 -right-7 w-[120px] h-[120px] rounded-full bg-terracotta/10"></div>
        <div className="font-serif text-[22px] text-deep-rust mb-1 relative z-10">Mama's voice</div>
        <div className="text-xs text-text-soft mb-5 relative z-10">Ready to sing · 7 phrases recorded</div>
        
        <div className="flex items-center gap-[3px] mb-5 h-8 relative z-10">
          {heights.map((h, i) => (
            <div 
              key={i} 
              className="flex-1 rounded-[3px] bg-terracotta/55 animate-wave"
              style={{ height: `${h}%`, '--wd': `${0.8 + Math.random() * 1.2}s`, '--wdelay': `${(i * 0.06).toFixed(2)}s` } as React.CSSProperties}
            />
          ))}
        </div>
        
        <div className="flex gap-4 relative z-10">
          <div className="flex items-center gap-1.5 text-[11px] text-text-soft bg-white/60 px-2.5 py-1.5 rounded-full">
            <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="#8BA888"/></svg>
            Voice ready
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-text-soft bg-white/60 px-2.5 py-1.5 rounded-full">
            <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="#C4B5D4"/></svg>
            3 lullabies
          </div>
        </div>
      </div>

      <div className="text-[11px] tracking-[0.14em] text-text-muted uppercase px-7 mb-3.5 font-medium mt-2">Choose a lullaby</div>

      <div className="px-6 flex flex-col gap-3 pb-6">
        {lullabies.map((l) => {
          const isPlaying = nowPlaying === l.name;
          return (
            <div 
              key={l.name}
              onClick={() => handlePlay(l.name)}
              className={`border rounded-[20px] p-4 pr-[18px] flex items-center gap-3.5 cursor-pointer transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(139,74,42,0.1)] hover:border-terracotta/25 ${
                isPlaying 
                  ? 'bg-gradient-to-br from-[#F0C9A8]/50 to-[#F5E6D3]/60 border-terracotta/30' 
                  : 'bg-white/70 border-terracotta/10'
              }`}
            >
              <div className={`w-[46px] h-[46px] rounded-xl flex items-center justify-center text-xl shrink-0 bg-gradient-to-br ${l.bg}`}>
                {l.icon}
              </div>
              <div className="flex-1">
                <div className="font-serif text-[17px] text-text-main mb-0.5">{l.name}</div>
                <div className="text-[11px] text-text-muted">{l.meta}</div>
              </div>
              <button 
                className="w-9 h-9 rounded-full border-[1.5px] border-terracotta/30 bg-white/80 flex items-center justify-center cursor-pointer transition-all duration-200 shrink-0 hover:bg-terracotta hover:border-terracotta group"
                onClick={(e) => { e.stopPropagation(); handlePlay(l.name); }}
              >
                {isPlaying && playerPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" className="fill-terracotta/80 group-hover:fill-white transition-colors"><rect x="3" y="2" width="3" height="10" rx="1"/><rect x="8" y="2" width="3" height="10" rx="1"/></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" className="fill-terracotta/80 group-hover:fill-white transition-colors"><path d="M4 2L12 7L4 12Z"/></svg>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RecordPage = () => {
  const [recording, setRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);

  const handleRecord = () => {
    if (!recording && !recorded) {
      setRecording(true);
    } else if (recording) {
      setRecording(false);
      setRecorded(true);
    } else {
      // Reset to record next
      setRecorded(false);
    }
  };

  return (
    <div className="animate-fade-up">
      <div className="mx-6 mb-6 bg-gradient-to-br from-[#2A3550] to-[#3D2B1A] rounded-[28px] py-9 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(201,123,75,0.2)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="text-[11px] tracking-[0.16em] text-white/40 uppercase mb-2 relative z-10">Step 1 of 3 — voice setup</div>
        <div className="font-serif text-[28px] font-light text-moon leading-[1.2] mb-7 relative z-10">Read this phrase<br/>in your natural voice</div>

        <div className="w-[100px] h-[100px] mx-auto mb-6 relative cursor-pointer" onClick={handleRecord}>
          <div className="absolute inset-0 rounded-full border-[1.5px] border-terracotta/30 animate-ring-pulse"></div>
          <div className="absolute -inset-[10px] rounded-full border-[1.5px] border-terracotta/30 animate-ring-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -inset-[20px] rounded-full border-[1.5px] border-terracotta/30 animate-ring-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
          
          <div className={`absolute inset-0 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(201,123,75,0.4)] ${
            recording ? 'bg-[#C0392B] animate-record-pulse' : 'bg-terracotta hover:scale-105 hover:bg-[#E08A5C]'
          }`}>
            {recording ? (
              <svg width="16" height="16" viewBox="0 0 16 16"><rect x="3" y="3" width="10" height="10" rx="2" fill="white"/></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="10" y="6" width="8" height="14" rx="4" fill="white"/>
                <path d="M6 14C6 18.4 9.6 22 14 22C18.4 22 22 18.4 22 14" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <line x1="14" y1="22" x2="14" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="10" y1="26" x2="18" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        </div>

        <div className="text-xs text-white/45 relative z-10">
          {recording ? 'Recording… tap to stop' : recorded ? 'Saved! Tap to record next phrase' : 'Tap to start recording'}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl py-4 px-[18px] mt-5 text-left relative z-10">
          <div className="text-[10px] tracking-[0.12em] text-white/35 uppercase mb-2">Read aloud</div>
          <div className="font-serif text-lg italic text-white/85 leading-relaxed">"Goodnight my little love, sleep tight and dream of wonderful things."</div>
        </div>
      </div>

      <div className="mx-6 mb-5">
        <div className="text-[11px] tracking-[0.14em] text-text-muted uppercase mb-3 font-medium">Recording progress</div>
        <div className="h-1 bg-terracotta/15 rounded-full mb-2">
          <div className="h-full rounded-full bg-gradient-to-r from-terracotta to-[#E08A5C] transition-all duration-400" style={{ width: recorded ? '60%' : '40%' }}></div>
        </div>
        <div className="text-[11px] text-text-muted">{recorded ? '3' : '2'} of 5 phrases recorded</div>
      </div>

      <div className="px-6 flex flex-col gap-2.5 pb-6">
        <div className="bg-white/60 border border-terracotta/10 rounded-2xl py-3.5 px-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#EEF5EE] flex items-center justify-center text-sm">✅</div>
          <div>
            <div className="text-[13px] text-text-main">"Goodnight my little love…"</div>
            <div className="text-[11px] text-text-muted">Recorded · 8 sec</div>
          </div>
        </div>

        <div className="bg-white/60 border border-terracotta/10 rounded-2xl py-3.5 px-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#EEF5EE] flex items-center justify-center text-sm">✅</div>
          <div>
            <div className="text-[13px] text-text-main">"Sleep my darling, close your eyes…"</div>
            <div className="text-[11px] text-text-muted">Recorded · 7 sec</div>
          </div>
        </div>

        <div className="bg-terracotta/5 border-[1.5px] border-dashed border-terracotta/25 rounded-2xl py-3.5 px-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-sm">🎙️</div>
          <div>
            <div className="text-[13px] text-text-main">"Dream of stars and butterflies…"</div>
            <div className="text-[11px] text-terracotta">Tap the button above to record</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SleepPage = () => {
  const [timer, setTimer] = useState(20);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="animate-fade-up">
      <div className="mx-6 mb-6 bg-gradient-to-b from-[#1A2540] to-[#2A1A0E] rounded-[28px] py-8 px-6 text-center relative overflow-hidden">
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(249,243,232,0.06)_0%,transparent_70%)]"></div>
        
        <div className="font-serif text-[56px] font-light text-moon tracking-[-0.02em] leading-none mb-1 relative z-10">
          {timer === 0 ? '∞' : `${timer}:00`}
        </div>
        <div className="text-[11px] text-white/30 tracking-[0.14em] uppercase mb-7 relative z-10">Sleep timer</div>

        <div className="flex items-center justify-center gap-5 mb-1 relative z-10">
          <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M4 3L4 15M4 9L14 3V15L4 9Z"/></svg>
          </button>
          <button 
            className="w-16 h-16 rounded-full bg-terracotta hover:bg-[#E08A5C] hover:scale-105 flex items-center justify-center text-white shadow-[0_4px_24px_rgba(201,123,75,0.4)] transition-all cursor-pointer"
            onClick={() => setPlaying(!playing)}
          >
            {playing ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M6 4L18 12L6 20Z"/></svg>
            )}
          </button>
          <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M14 3L14 15M14 9L4 3V15L14 9Z"/></svg>
          </button>
        </div>

        <div className="flex gap-2 justify-center mt-5 flex-wrap relative z-10">
          {[15, 20, 30, 45, 0].map(t => (
            <button
              key={t}
              onClick={() => setTimer(t)}
              className={`px-3.5 py-1.5 rounded-full border text-[11px] font-sans transition-all cursor-pointer ${
                timer === t 
                  ? 'bg-terracotta/25 border-terracotta/40 text-white/90' 
                  : 'bg-white/5 border-white/10 text-white/50 hover:bg-terracotta/25 hover:border-terracotta/40 hover:text-white/90'
              }`}
            >
              {t === 0 ? 'Loop ∞' : `${t} min`}
            </button>
          ))}
        </div>
      </div>

      <div className="text-[11px] tracking-[0.14em] text-text-muted uppercase px-7 mb-3.5 font-medium">Currently playing</div>

      <div className="mx-6 mb-4 bg-gradient-to-br from-[#F0C9A8]/40 to-[#F5E6D3]/50 border border-terracotta/20 rounded-[20px] p-[18px]">
        <div className="font-serif text-[19px] text-deep-rust mb-1">Twinkle Little Star</div>
        <div className="text-xs text-text-muted mb-4">Mama's voice · Soft tempo</div>
        <div className="h-1 bg-terracotta/15 rounded-full">
          <div className="w-[38%] h-full rounded-full bg-gradient-to-r from-terracotta to-[#E08A5C]"></div>
        </div>
        <div className="flex justify-between mt-1.5 text-[11px] text-text-muted">
          <span>0:52</span><span>2:14</span>
        </div>
      </div>

      <div className="text-[11px] tracking-[0.14em] text-text-muted uppercase px-7 mb-3.5 font-medium">Sleep settings</div>

      <div className="mx-6 flex flex-col gap-2.5 pb-6">
        <div className="bg-white/60 border border-terracotta/10 rounded-2xl py-3.5 px-[18px] flex items-center justify-between">
          <div className="text-[13px] text-text-main">Fade out when timer ends</div>
          <div className="w-[38px] h-[22px] bg-sage rounded-full relative cursor-pointer">
            <div className="absolute right-[3px] top-[3px] w-4 h-4 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)]"></div>
          </div>
        </div>

        <div className="bg-white/60 border border-terracotta/10 rounded-2xl py-3.5 px-[18px] flex items-center justify-between">
          <div className="text-[13px] text-text-main">Volume reduces gently</div>
          <div className="w-[38px] h-[22px] bg-sage rounded-full relative cursor-pointer">
            <div className="absolute right-[3px] top-[3px] w-4 h-4 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="animate-fade-up">
      <div className="mx-6 mb-5 bg-white/60 border border-terracotta/15 rounded-3xl p-6 flex items-center gap-4">
        <div className="w-[58px] h-[58px] rounded-[18px] bg-gradient-to-br from-[#F0C9A8] to-[#C97B4B] flex items-center justify-center text-[26px] shrink-0">👩</div>
        <div>
          <div className="font-serif text-[22px] text-text-main mb-0.5">Sarah & Baby Mia</div>
          <div className="text-xs text-text-muted">Member since March 2025 · 3 lullabies</div>
        </div>
      </div>

      <div className="text-[11px] tracking-[0.14em] text-text-muted uppercase px-7 mb-3.5 font-medium">Voice profiles</div>

      <div className="mx-6 mb-5 flex gap-2.5">
        <div className="flex-1 bg-white/60 border border-terracotta/10 rounded-2xl p-3.5 text-center">
          <div className="text-[22px] mb-1">👩</div>
          <div className="text-xs font-medium text-text-main">Mama</div>
          <div className="text-[10px] text-sage mt-0.5">✓ Ready</div>
        </div>
        <div className="flex-1 bg-white/60 border border-dashed border-terracotta/20 rounded-2xl p-3.5 text-center cursor-pointer">
          <div className="text-[22px] mb-1">👨</div>
          <div className="text-xs font-medium text-text-main">Papa</div>
          <div className="text-[10px] text-text-muted mt-0.5">+ Add voice</div>
        </div>
        <div className="flex-1 bg-white/60 border border-dashed border-terracotta/20 rounded-2xl p-3.5 text-center cursor-pointer">
          <div className="text-[22px] mb-1">➕</div>
          <div className="text-xs font-medium text-text-muted">Add</div>
          <div className="text-[10px] text-text-muted mt-0.5">New profile</div>
        </div>
      </div>

      <div className="text-[11px] tracking-[0.14em] text-text-muted uppercase px-7 mb-3.5 font-medium">Settings</div>

      <div className="mx-6 bg-white/60 border border-terracotta/10 rounded-[20px] overflow-hidden pb-6">
        {[
          { icon: '🔔', label: 'Notifications', bg: '#FEF3E2' },
          { icon: '🔒', label: 'Privacy & voice data', bg: '#EEF5EE' },
          { icon: '🌙', label: 'Night mode', bg: '#F0EAF5' },
          { icon: '💬', label: 'Contact support', bg: '#FEF3E2' },
        ].map((item, i, arr) => (
          <div 
            key={item.label}
            className={`flex items-center gap-3.5 py-4 px-[18px] cursor-pointer hover:bg-terracotta/5 transition-colors ${
              i !== arr.length - 1 ? 'border-b border-terracotta/10' : ''
            }`}
          >
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0" style={{ backgroundColor: item.bg }}>
              {item.icon}
            </div>
            <div className="flex-1 text-sm text-text-main">{item.label}</div>
            <div className="text-lg text-text-muted">›</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);
  const [playerPlaying, setPlayerPlaying] = useState(true);

  return (
    <div className="relative z-10 max-w-[390px] mx-auto min-h-screen flex flex-col pb-20">
      <AmbientBackground />
      <Stars />
      
      <Header />
      <NavTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div className="flex-1 relative z-10">
        {currentTab === 'home' && <HomePage nowPlaying={nowPlaying} setNowPlaying={setNowPlaying} playerPlaying={playerPlaying} setPlayerPlaying={setPlayerPlaying} />}
        {currentTab === 'record' && <RecordPage />}
        {currentTab === 'sleep' && <SleepPage />}
        {currentTab === 'profile' && <ProfilePage />}
      </div>

      <PlayerBar nowPlaying={nowPlaying} playerPlaying={playerPlaying} setPlayerPlaying={setPlayerPlaying} />
      <BottomNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}
