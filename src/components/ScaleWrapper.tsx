import { useEffect, useRef, useState, type ReactNode } from "react";

const DESIGN_WIDTH = 430; // العرض اللي التصميم اتعمل عليه بالظبط

export default function ScaleWrapper({ children }: { children: ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      const newScale = Math.min(vw / DESIGN_WIDTH, 1);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (!innerRef.current) return;

    const observer = new ResizeObserver(() => {
      if (innerRef.current) {
        setHeight(innerRef.current.scrollHeight * scale);
      }
    });

    observer.observe(innerRef.current);
    return () => observer.disconnect();
  }, [scale]);

  return (
    <div className="w-full flex justify-center bg-white">
      <div
        style={{
          width: DESIGN_WIDTH * scale,
          height: height,
          position: "relative",
        }}
      >
        <div
          ref={innerRef}
          style={{
            width: DESIGN_WIDTH,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}