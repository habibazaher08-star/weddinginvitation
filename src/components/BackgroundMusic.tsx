import { useEffect, useRef } from "react";
import song from "../assets/song.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current?.play().catch(() => {
      // في حالة نادرة جدًا يرفض المتصفح، مفيش داعي نعمل حاجة زيادة
    });
  }, []);

  return <audio ref={audioRef} src={song} loop />;
}