import React, { useState, useEffect, useRef } from 'react';
import { Music2, VolumeX } from 'lucide-react';

interface BackgroundMusicProps {
  audioSrc: string; // Path to audio file
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Listen to audio playing/pause events to sync state
    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    // Try to autoplay
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay was prevented, user will need to click to play
        console.log('Autoplay prevented. User interaction required.');
        setIsPlaying(false);
      }
    };

    playAudio();

    // Handle when audio ends - loop it
    const handleEnded = () => {
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      // If not playing yet, start playing
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
        audio.muted = false;
      }).catch((err) => {
        console.log('Play failed', err);
      });
    } else {
      // Toggle mute
      const newMutedState = !isMuted;
      audio.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  // Determine if we should show playing state
  const showPlayingState = isPlaying && !isMuted;

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
      />

      {/* Floating Music Control with Label */}
      <div className="fixed bottom-6 right-6 z-[9998] flex items-center gap-3">
        {/* Label */}
        <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
          <p className="text-xs font-medium text-slate-700 whitespace-nowrap">
            Dengarkan jingle promed path!
          </p>
        </div>

        {/* Music Control Button - Changes shape when playing */}
        <button
          onClick={toggleMute}
          className={`
            ${showPlayingState ? 'w-16 h-16 rounded-2xl rotate-45' : 'w-14 h-14 rounded-full'}
            bg-[#35489e] hover:bg-[#243376] text-white shadow-2xl
            flex items-center justify-center transition-all duration-500 hover:scale-110 group
          `}
          aria-label={showPlayingState ? 'Mute Music' : 'Play Music'}
        >
          <div className={showPlayingState ? '-rotate-45' : ''}>
            {showPlayingState ? (
              <Music2 className="w-7 h-7 group-hover:scale-110 transition-transform animate-pulse" />
            ) : (
              <VolumeX className="w-6 h-6 group-hover:scale-110 transition-transform" />
            )}
          </div>
        </button>
      </div>
    </>
  );
};
