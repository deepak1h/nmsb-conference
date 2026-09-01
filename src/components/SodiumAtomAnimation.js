"use client";
import { useEffect, useRef } from "react";

export default function SodiumAtomAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    const width = (canvas.width = 1400);
    const height = (canvas.height = 1400);
    const centerX = width / 2;
    const centerY = height / 2;

    let angle = 0;

    // Massive Concentric Circular Orbits (Sodium Atom: 2, 8, 1 electrons)
    const orbits = [
      { radius: 240, speed: 0.01, numElectrons: 2, color: "rgba(180, 215, 255, 0.85)", dash: [] },
      { radius: 440, speed: -0.006, numElectrons: 8, color: "rgba(160, 200, 245, 0.8)", dash: [10, 10] },
      { radius: 620, speed: 0.004, numElectrons: 1, color: "rgba(220, 240, 255, 0.95)", dash: [] },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angle += 0.006;

      // Soft Massive Ambient Radial Glow
      const ambientGlow = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 660);
      ambientGlow.addColorStop(0, "rgba(200, 225, 255, 0.12)");
      ambientGlow.addColorStop(0.5, "rgba(160, 200, 250, 0.03)");
      ambientGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 660, 0, Math.PI * 2);
      ctx.fill();

      // Render Massive Concentric Circular Orbits & Electrons
      orbits.forEach((orbit) => {
        // Draw Circular Orbit Path
        ctx.beginPath();
        ctx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
        ctx.lineWidth = 2.2;
        if (orbit.dash.length > 0) ctx.setLineDash(orbit.dash);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw Orbiting Electrons
        for (let e = 0; e < orbit.numElectrons; e++) {
          const eAngle = angle * (orbit.speed * 40) + (e * (Math.PI * 2)) / orbit.numElectrons;
          const ex = centerX + orbit.radius * Math.cos(eAngle);
          const ey = centerY + orbit.radius * Math.sin(eAngle);

          // Soft Electron Glow Aura
          ctx.beginPath();
          ctx.arc(ex, ey, 11, 0, Math.PI * 2);
          ctx.fillStyle = orbit.color;
          ctx.shadowColor = "rgba(180, 215, 255, 0.5)";
          ctx.shadowBlur = 15;
          ctx.fill();

          // Electron Core Dot
          ctx.beginPath();
          ctx.arc(ex, ey, 5, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowBlur = 0;
          ctx.fill();
        }
      });

      // Central Nucleus (Na+)
      ctx.save();
      ctx.translate(centerX, centerY);

      // Frosted Glass Badge Core
      ctx.beginPath();
      ctx.arc(0, 0, 50, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "rgba(200, 225, 255, 0.25)";
      ctx.shadowBlur = 25;
      ctx.fill();
      ctx.stroke();

      // Symbol Na+
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.font = "900 28px var(--font-outfit), sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Na⁺", 0, 1);

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div style={{
      position: "relative",
      width: "1400px",
      height: "1400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none"
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          filter: "drop-shadow(0 0 25px rgba(200, 225, 255, 0.2))"
        }}
      />
    </div>
  );
}
