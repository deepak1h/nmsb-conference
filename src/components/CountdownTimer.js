"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate = "2026-11-22T09:00:00" }) {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const calculateTime = () => {
      const diff = +new Date(targetDate) - +new Date();
      if (diff > 0) {
        setTimeLeft({
          days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
          hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
          minutes: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0"),
          seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-box">
      <div className="countdown-unit">
        <div className="countdown-val">{timeLeft.days}</div>
        <div className="countdown-lbl">Days</div>
      </div>
      <div className="countdown-unit">
        <div className="countdown-val">{timeLeft.hours}</div>
        <div className="countdown-lbl">Hours</div>
      </div>
      <div className="countdown-unit">
        <div className="countdown-val">{timeLeft.minutes}</div>
        <div className="countdown-lbl">Mins</div>
      </div>
      <div className="countdown-unit">
        <div className="countdown-val">{timeLeft.seconds}</div>
        <div className="countdown-lbl">Secs</div>
      </div>
    </div>
  );
}
