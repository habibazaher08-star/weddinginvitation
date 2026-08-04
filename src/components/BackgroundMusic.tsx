import { useEffect, useRef } from "react";
import song from "../assets/song.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});

    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
       
        audioRef.current.pause();
      } else {
        
        audioRef.current.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <audio ref={audioRef} src={song} loop />;
}