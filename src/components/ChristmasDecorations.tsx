import { useMemo } from "react";

interface ChristmasDecorationsProps {
  showSnowflakes?: boolean;
  showGarland?: boolean;
}

export const ChristmasDecorations = ({ 
  showSnowflakes = true, 
  showGarland = true,
}: ChristmasDecorationsProps) => {
  // Generate static snowflakes with random positions
  const snowflakes = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: 5 + (i * 5) + (Math.random() * 3 - 1.5), // Spread across screen
      top: 10 + Math.random() * 70, // Random vertical position
      size: 18 + Math.random() * 20,
      opacity: 0.5 + Math.random() * 0.4,
      rotation: Math.random() * 30 - 15, // Slight random rotation
    }));
  }, []);

  // Garland lights configuration (static)
  const lights = useMemo(() => {
    const colors = [
      "hsl(var(--christmas-red))",
      "hsl(var(--christmas-green))",
      "hsl(var(--christmas-gold))",
      "hsl(45, 100%, 85%)", // warm white
    ];
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <>
      {/* Static Snowflakes */}
      {showSnowflakes && (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="absolute"
              style={{
                left: `${flake.left}%`,
                top: `${flake.top}%`,
                fontSize: `${flake.size}px`,
                opacity: flake.opacity,
                transform: `rotate(${flake.rotation}deg)`,
                color: "hsl(210, 100%, 85%)",
                textShadow: "0 0 10px hsl(210, 100%, 90%), 0 0 20px rgba(255,255,255,0.8)",
                filter: "drop-shadow(0 0 4px hsl(210, 100%, 95%))",
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

      {/* Static String Lights Garland */}
      {showGarland && (
        <div className="fixed top-0 left-0 right-0 pointer-events-none z-[55]">
          {/* Wire/string */}
          <svg
            className="absolute top-0 left-0 w-full h-14"
            viewBox="0 0 100 14"
            preserveAspectRatio="none"
          >
            <path
              d="M0,4 Q2.5,10 5,4 T10,4 T15,4 T20,4 T25,4 T30,4 T35,4 T40,4 T45,4 T50,4 T55,4 T60,4 T65,4 T70,4 T75,4 T80,4 T85,4 T90,4 T95,4 T100,4"
              fill="none"
              stroke="hsl(140, 40%, 25%)"
              strokeWidth="0.3"
            />
          </svg>
          
          {/* Static Light bulbs */}
          <div className="absolute top-5 left-0 right-0 flex justify-around px-4">
            {lights.map((light) => (
              <div key={light.id} className="relative">
                {/* Bulb glow */}
                <div
                  className="absolute -inset-2 rounded-full blur-md"
                  style={{
                    backgroundColor: light.color,
                    opacity: 0.35,
                  }}
                />
                {/* Bulb */}
                <div
                  className="relative w-2.5 h-3.5 rounded-full"
                  style={{
                    backgroundColor: light.color,
                    boxShadow: `0 0 6px ${light.color}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
