import { useEffect } from "react";

export default function AutoScrollIntro({
  duration = 9000,
}: {
  duration?: number;
}) {
  useEffect(() => {
    // نمنع المتصفح من إنه يرجع لمكان السكرول القديم بعد الـ refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // نجبر الصفحة تبدأ من فوق فورًا، قبل أي حاجة تانية
    window.scrollTo(0, 0);

    let cancelled = false;
    let rafId: number;

    const cancelScroll = () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };

    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchstart", cancelScroll, { passive: true });
    window.addEventListener("keydown", cancelScroll);

    const startDelay = setTimeout(() => {
      if (cancelled) return;

      const start = 0; // دايمًا هتبدأ من فوق تمامًا
      const end = document.documentElement.scrollHeight - window.innerHeight;
      const startTime = performance.now();

      function step(currentTime: number) {
        if (cancelled) return;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + (end - start) * progress);

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        }
      }

      rafId = requestAnimationFrame(step);
    }, 500);

    return () => {
      clearTimeout(startDelay);
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("keydown", cancelScroll);
    };
  }, [duration]);

  return null;
}