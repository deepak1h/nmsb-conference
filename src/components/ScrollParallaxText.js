"use client";
import { useState, useEffect, useRef } from "react";

export default function ScrollParallaxText() {
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);

  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const pos1 = useRef(0);
  const pos2 = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity.current = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      // Base continuous automatic drifting speed (pixels per frame)
      const baseSpeed = 1.2;
      
      // Scroll boost / direction modifier
      const scrollBoost = scrollVelocity.current * 0.4;

      // Update positions
      pos1.current = (pos1.current + baseSpeed + scrollBoost) % 2000;
      pos2.current = (pos2.current - baseSpeed - scrollBoost) % 2000;

      // Decay scroll velocity smoothly
      scrollVelocity.current *= 0.92;

      setOffset1(pos1.current);
      setOffset2(pos2.current);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const textRow1 = "SODIUM-ION BATTERY REVOLUTION • IIT BOMBAY • NMSB-2 2026 • ";
  const textRow2 = "ADVANCING SUSTAINABLE ENERGY • COMMERCIAL CELL SCALING • ";

  return (
    <div style={{
      padding: "60px 0",
      backgroundColor: "var(--agora-dark-bg)",
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      position: "relative",
      userSelect: "none"
    }}>
      {/* Top Text Row: Continuous Movement + Left-to-Right Scroll Velocity */}
      <div style={{
        display: "flex",
        whiteSpace: "nowrap",
        transform: `translate3d(${-2000 + (offset1 % 2000)}px, 0, 0)`,
        fontSize: "clamp(3rem, 7vw, 6.5rem)",
        fontWeight: "900",
        color: "transparent",
        WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
        textTransform: "uppercase",
        letterSpacing: "4px",
        willChange: "transform"
      }}>
        <span>{textRow1.repeat(8)}</span>
      </div>

      {/* Bottom Text Row: Continuous Movement + Right-to-Left Scroll Velocity */}
      <div style={{
        display: "flex",
        whiteSpace: "nowrap",
        transform: `translate3d(${offset2 % 2000}px, 0, 0)`,
        fontSize: "clamp(3rem, 7vw, 6.5rem)",
        fontWeight: "900",
        color: "var(--agora-blue)",
        opacity: 0.85,
        textTransform: "uppercase",
        letterSpacing: "4px",
        marginTop: "-15px",
        willChange: "transform"
      }}>
        <span>{textRow2.repeat(8)}</span>
      </div>
    </div>
  );
}
