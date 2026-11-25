import { createContext } from 'react';

export interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  play: () => Promise<void>;
  pause: () => void;
  currentTime: number;
  duration: number;
  progress: number;
  seek: (percentage: number) => void;
  volume: number;
  setVolume: (vol: number) => void;
  isAutoplayBlocked: boolean;
  songTitle: string;
  artistName: string;
}

export const AudioContext = createContext<AudioContextType | undefined>(undefined);
