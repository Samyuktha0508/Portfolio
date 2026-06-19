import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-3xl pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`
      }}
    />
  );
};

export default CursorGlow;