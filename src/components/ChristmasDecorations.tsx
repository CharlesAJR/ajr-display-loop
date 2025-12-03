import { useMemo, useState, useEffect } from "react";

interface ChristmasDecorationsProps {
  showSnowflakes?: boolean;
  showGarland?: boolean;
  showFlyingSleigh?: boolean;
}

export const ChristmasDecorations = ({ 
  showSnowflakes = true, 
  showGarland = true,
  showFlyingSleigh = true
}: ChristmasDecorationsProps) => {
  const [isSleighVisible, setIsSleighVisible] = useState(false);
  const [sleighDirection, setSleighDirection] = useState<'left' | 'right'>('right');

  // Flying sleigh effect - random interval between 20-40 seconds
  useEffect(() => {
    if (!showFlyingSleigh) return;

    let timeoutId: NodeJS.Timeout;

    const scheduleNextSleigh = () => {
      // Random delay between 20 and 40 seconds
      const delay = 20000 + Math.random() * 20000;
      
      timeoutId = setTimeout(() => {
        setSleighDirection(Math.random() > 0.5 ? 'right' : 'left');
        setIsSleighVisible(true);
        
        // Hide sleigh after animation (5s)
        setTimeout(() => {
          setIsSleighVisible(false);
          scheduleNextSleigh();
        }, 5000);
      }, delay);
    };

    // Start first sleigh after a short delay
    timeoutId = setTimeout(() => {
      setSleighDirection('right');
      setIsSleighVisible(true);
      setTimeout(() => {
        setIsSleighVisible(false);
        scheduleNextSleigh();
      }, 5000);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [showFlyingSleigh]);

  // Generate random snowflakes
  const snowflakes = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: -Math.random() * 15, // Negative delay so some start mid-animation
      duration: 12 + Math.random() * 10,
      size: 16 + Math.random() * 24,
      opacity: 0.7 + Math.random() * 0.3,
    }));
  }, []);

  // Garland lights configuration
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
      delay: i * 0.12,
    }));
  }, []);

  return (
    <>
      {/* Snowflakes - separate fixed container (behind content) */}
      {showSnowflakes && (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="absolute"
              style={{
                left: `${flake.left}%`,
                top: "-40px",
                fontSize: `${flake.size}px`,
                opacity: flake.opacity,
                animation: `snowfall ${flake.duration}s linear infinite`,
                animationDelay: `${flake.delay}s`,
                color: "hsl(210, 100%, 85%)", // Brighter ice blue
                textShadow: "0 0 10px hsl(210, 100%, 90%), 0 0 20px rgba(255,255,255,0.8)",
                filter: "drop-shadow(0 0 4px hsl(210, 100%, 95%))",
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

      {/* Flying Sleigh with Reindeer */}
      {showFlyingSleigh && isSleighVisible && (
        <div 
          className="fixed pointer-events-none z-[100]"
          style={{
            top: '15%',
            left: 0,
            fontSize: '3.5rem',
            animation: sleighDirection === 'right' 
              ? 'sleigh-fly 5s ease-in-out forwards'
              : 'sleigh-fly-reverse 5s ease-in-out forwards',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
          }}
        >
          <span style={{ letterSpacing: '-0.15em' }}>
            🦌🦌🛷🎅
          </span>
        </div>
      )}

      {/* String Lights Garland - separate fixed container */}
      {showGarland && (
        <div className="fixed top-0 left-0 right-0 pointer-events-none z-[55]">
          {/* Wire/string - simple curved line */}
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
          
          {/* Light bulbs */}
          <div className="absolute top-5 left-0 right-0 flex justify-around px-4">
            {lights.map((light) => (
              <div
                key={light.id}
                className="relative"
                style={{
                  animation: `twinkle 1.5s ease-in-out infinite`,
                  animationDelay: `${light.delay}s`,
                }}
              >
                {/* Bulb glow */}
                <div
                  className="absolute -inset-3 rounded-full blur-lg"
                  style={{
                    backgroundColor: light.color,
                    opacity: 0.6,
                  }}
                />
                {/* Bulb */}
                <div
                  className="relative w-3 h-4 rounded-full"
                  style={{
                    backgroundColor: light.color,
                    boxShadow: `0 0 8px ${light.color}, 0 0 16px ${light.color}`,
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
