"use client";

export default function MarqueeText({ textList = ["SODIUM-ION BATTERY SCIENCE", "IIT BOMBAY", "22-24 NOVEMBER 2026", "REGISTRATION OPEN"] }) {
  const items = [...textList, ...textList, ...textList, ...textList];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.map((item, index) => (
          <span key={index} className="marquee-item">
            <span>{item}</span>
            <span style={{ color: "var(--agora-blue)", opacity: 0.8 }}>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
