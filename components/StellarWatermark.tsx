"use client";

export default function StellarWatermark() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        opacity: 0.12,
        zIndex: -1,
        pointerEvents: "none",
        transition: "opacity 0.3s"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.25";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "0.12";
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))"
        }}
      >
        ⭐
      </div>
    </div>
  );
}
