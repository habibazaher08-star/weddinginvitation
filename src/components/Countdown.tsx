import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-09-07T19:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="py-40 px-6 text-center">
      <h2
        className="text-3xl mb-16 italiana-regular"
        style={{ paddingTop: "180px" }}
      >
        Countdown To Our Wedding
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        <div className="w-20 h-20 rounded-full border border-[#D4AF37] bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
          <span className="text-xl font-bold">{timeLeft.days}</span>
          <span className="text-xs tracking-wider">Days</span>
        </div>

        <div className="w-20 h-20 rounded-full border border-[#D4AF37] bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
          <span className="text-xl font-bold">{timeLeft.hours}</span>
          <span className="text-xs tracking-wider">Hours</span>
        </div>

        <div className="w-20 h-20 rounded-full border border-[#D4AF37] bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
          <span className="text-xl font-bold">{timeLeft.minutes}</span>
          <span className="text-xs tracking-wider">Minutes</span>
        </div>

        <div className="w-20 h-20 rounded-full border border-[#D4AF37] bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
          <span className="text-xl font-bold">{timeLeft.seconds}</span>
          <span className="text-xs tracking-wider">Seconds</span>
        </div>
      </div>
    </section>
  );
}