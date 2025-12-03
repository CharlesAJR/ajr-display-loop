import { useMemo } from "react";

interface ChristmasDecorationsProps {
  showSnowflakes?: boolean;
  showGarland?: boolean;
}

export const ChristmasDecorations = ({ 
  showSnowflakes = true, 
  showGarland = true 
}: ChristmasDecorationsProps) => {
  // Generate random snowflakes
  const snowflakes = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 6,
      size: 8 + Math.random() * 16,
      opacity: 0.4 + Math.random() * 0.4,
    }));
  }, []);

  // Garland lights configuration
  const lights = useMemo(() => {
    const colors = [
      "hsl(var(--christmas-red))",
      "hsl(var(--christmas-green))",
      "hsl(var(--christmas-gold))",
      "hsl(45, 100%, 70%)", // warm white
    ];
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      delay: i * 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Snowflakes */}
      {showSnowflakes && (
        <div className="absolute inset-0">
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="absolute text-white/80"
              style={{
                left: `${flake.left}%`,
                top: "-20px",
                fontSize: `${flake.size}px`,
                opacity: flake.opacity,
                animation: `snowfall ${flake.duration}s linear infinite`,
                animationDelay: `${flake.delay}s`,
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

      {/* String Lights Garland */}
      {showGarland && (
        <div className="absolute top-0 left-0 right-0 h-16">
          {/* Wire/string */}
          <svg
            className="absolute top-2 left-0 w-full h-12"
            viewBox="0 0 1920 48"
            preserveAspectRatio="none"
          >
            <path
              d="M0,24 Q48,8 96,24 T192,24 T288,24 T384,24 T480,24 T576,24 T672,24 T768,24 T864,24 T960,24 T1056,24 T1152,24 T1248,24 T1344,24 T1440,24 T1536,24 T1632,24 T1728,24 T1824,24 T1920,24"
              fill="none"
              stroke="hsl(var(--christmas-green))"
              strokeWidth="3"
              className="animate-sway"
              style={{ transformOrigin: "center" }}
            />
          </svg>
          
          {/* Light bulbs */}
          <div className="absolute top-6 left-0 right-0 flex justify-around px-8">
            {lights.map((light) => (
              <div
                key={light.id}
                className="relative"
                style={{
                  animation: `twinkle 2s ease-in-out infinite`,
                  animationDelay: `${light.delay}s`,
                }}
              >
                {/* Bulb glow */}
                <div
                  className="absolute -inset-2 rounded-full blur-md"
                  style={{
                    backgroundColor: light.color,
                    opacity: 0.5,
                  }}
                />
                {/* Bulb */}
                <div
                  className="relative w-4 h-5 rounded-full"
                  style={{
                    backgroundColor: light.color,
                    boxShadow: `0 0 10px ${light.color}, 0 0 20px ${light.color}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
