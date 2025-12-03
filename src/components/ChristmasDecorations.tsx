import { useMemo, useState, useEffect } from "react";

interface ChristmasDecorationsProps {
  showSnowflakes?: boolean;
  showGarland?: boolean;
  showSanta?: boolean;
}

export const ChristmasDecorations = ({ 
  showSnowflakes = true, 
  showGarland = true,
  showSanta = true,
}: ChristmasDecorationsProps) => {
  const [santaVisible, setSantaVisible] = useState(false);
  const [santaDirection, setSantaDirection] = useState<'right' | 'left'>('right');

  // Santa appears periodically
  useEffect(() => {
    if (!showSanta) return;
    
    const showSantaAnimation = () => {
      const direction = Math.random() > 0.5 ? 'right' : 'left';
      setSantaDirection(direction);
      setSantaVisible(true);
      
      // Hide after animation completes (12s)
      setTimeout(() => {
        setSantaVisible(false);
      }, 12000);
    };

    // First appearance after 8 seconds
    const initialTimeout = setTimeout(showSantaAnimation, 8000);
    
    // Then appear randomly every 30-50 seconds
    const interval = setInterval(() => {
      if (!santaVisible) {
        showSantaAnimation();
      }
    }, 30000 + Math.random() * 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [showSanta, santaVisible]);
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

      {/* Beautiful Santa Flying Animation */}
      {showSanta && santaVisible && (
        <div 
          className="fixed pointer-events-none z-[60]"
          style={{
            top: '15%',
            left: 0,
            animation: santaDirection === 'right' 
              ? 'santa-fly-right 12s linear forwards'
              : 'santa-fly-left 12s linear forwards',
          }}
        >
          <svg width="280" height="140" viewBox="0 0 280 140" className="drop-shadow-2xl">
            {/* Sparkle trail */}
            <g className="animate-pulse">
              {[...Array(8)].map((_, i) => (
                <circle
                  key={i}
                  cx={-20 - i * 25}
                  cy={70 + Math.sin(i) * 15}
                  r={3 - i * 0.3}
                  fill="hsl(45, 100%, 70%)"
                  opacity={0.8 - i * 0.1}
                />
              ))}
            </g>
            
            {/* Reindeer 1 (front) */}
            <g transform="translate(20, 50)">
              {/* Body */}
              <ellipse cx="25" cy="25" rx="20" ry="12" fill="#8B4513"/>
              {/* Head */}
              <circle cx="50" cy="20" r="10" fill="#A0522D"/>
              {/* Nose */}
              <circle cx="58" cy="20" r="4" fill="#DC143C">
                <animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite"/>
              </circle>
              {/* Antlers */}
              <path d="M45 8 L42 -5 L38 -2 M42 -5 L45 -8" stroke="#654321" strokeWidth="2" fill="none"/>
              <path d="M52 8 L55 -5 L59 -2 M55 -5 L52 -8" stroke="#654321" strokeWidth="2" fill="none"/>
              {/* Legs with animation */}
              <g>
                <line x1="15" y1="35" x2="12" y2="50" stroke="#654321" strokeWidth="3">
                  <animate attributeName="x2" values="12;18;12" dur="0.3s" repeatCount="indefinite"/>
                </line>
                <line x1="35" y1="35" x2="38" y2="50" stroke="#654321" strokeWidth="3">
                  <animate attributeName="x2" values="38;32;38" dur="0.3s" repeatCount="indefinite"/>
                </line>
              </g>
              {/* Harness */}
              <path d="M5 25 L45 25" stroke="#FFD700" strokeWidth="2"/>
            </g>

            {/* Reindeer 2 (back) */}
            <g transform="translate(-25, 55)">
              {/* Body */}
              <ellipse cx="25" cy="25" rx="18" ry="10" fill="#8B4513" opacity="0.9"/>
              {/* Head */}
              <circle cx="48" cy="22" r="8" fill="#A0522D"/>
              {/* Antlers */}
              <path d="M44 12 L42 2 L39 4" stroke="#654321" strokeWidth="2" fill="none"/>
              <path d="M50 12 L52 2 L55 4" stroke="#654321" strokeWidth="2" fill="none"/>
              {/* Legs */}
              <g>
                <line x1="15" y1="33" x2="18" y2="45" stroke="#654321" strokeWidth="2">
                  <animate attributeName="x2" values="18;12;18" dur="0.3s" repeatCount="indefinite"/>
                </line>
                <line x1="32" y1="33" x2="29" y2="45" stroke="#654321" strokeWidth="2">
                  <animate attributeName="x2" values="29;35;29" dur="0.3s" repeatCount="indefinite"/>
                </line>
              </g>
              {/* Harness */}
              <path d="M5 25 L43 25" stroke="#FFD700" strokeWidth="2"/>
            </g>

            {/* Reins */}
            <path d="M70 70 Q90 50 95 75" stroke="#8B0000" strokeWidth="2" fill="none"/>
            <path d="M25 80 Q50 60 70 70" stroke="#8B0000" strokeWidth="2" fill="none"/>

            {/* Sleigh */}
            <g transform="translate(90, 55)">
              {/* Sleigh body */}
              <path 
                d="M0 30 Q-10 30 -5 50 L140 50 Q150 50 145 30 L140 20 Q130 10 100 10 L30 10 Q10 10 0 30 Z" 
                fill="#8B0000"
                stroke="#5C0000"
                strokeWidth="2"
              />
              {/* Sleigh interior */}
              <path 
                d="M5 25 Q0 15 30 15 L100 15 Q125 15 120 25 L115 35 L10 35 Z" 
                fill="#A52A2A"
              />
              {/* Gold trim */}
              <path d="M-5 50 L145 50" stroke="#FFD700" strokeWidth="3"/>
              <path d="M5 30 L135 30" stroke="#FFD700" strokeWidth="1.5"/>
              {/* Runner */}
              <path d="M-15 55 Q-20 55 -15 60 L155 60 Q165 60 160 55" 
                stroke="#FFD700" strokeWidth="3" fill="none"/>
            </g>

            {/* Gift sack */}
            <g transform="translate(200, 45)">
              <ellipse cx="20" cy="25" rx="18" ry="22" fill="#2E8B57"/>
              <path d="M5 10 Q20 0 35 10" stroke="#1B5E20" strokeWidth="3" fill="none"/>
              <circle cx="12" cy="20" r="4" fill="#FFD700"/>
              <circle cx="28" cy="28" r="3" fill="#DC143C"/>
              <circle cx="18" cy="35" r="3.5" fill="#4169E1"/>
            </g>

            {/* Santa */}
            <g transform="translate(130, 20)">
              {/* Body */}
              <ellipse cx="30" cy="50" rx="22" ry="25" fill="#DC143C"/>
              {/* White trim bottom */}
              <ellipse cx="30" cy="72" rx="22" ry="6" fill="#FFFAFA"/>
              {/* Belt */}
              <rect x="8" y="52" width="44" height="8" fill="#2F2F2F"/>
              <rect x="24" y="50" width="12" height="12" rx="2" fill="#FFD700"/>
              
              {/* Head */}
              <circle cx="30" cy="18" r="14" fill="#FDBBB0"/>
              {/* Beard */}
              <path d="M16 22 Q18 45 30 48 Q42 45 44 22 Q38 28 30 28 Q22 28 16 22" fill="#FFFAFA"/>
              {/* Mustache */}
              <path d="M20 22 Q25 26 30 22 Q35 26 40 22" fill="#FFFAFA"/>
              {/* Eyes */}
              <circle cx="24" cy="14" r="2" fill="#2F2F2F"/>
              <circle cx="36" cy="14" r="2" fill="#2F2F2F"/>
              {/* Cheeks */}
              <circle cx="20" cy="20" r="3" fill="#FFB6C1" opacity="0.6"/>
              <circle cx="40" cy="20" r="3" fill="#FFB6C1" opacity="0.6"/>
              {/* Nose */}
              <circle cx="30" cy="18" r="3" fill="#E8A090"/>
              {/* Smile */}
              <path d="M25 24 Q30 28 35 24" stroke="#8B4513" strokeWidth="1.5" fill="none"/>
              
              {/* Hat */}
              <path d="M14 12 Q14 -5 30 -8 Q46 -5 46 12" fill="#DC143C"/>
              <ellipse cx="30" cy="12" rx="18" ry="5" fill="#FFFAFA"/>
              <circle cx="45" cy="-10" r="6" fill="#FFFAFA"/>
              
              {/* Waving arm */}
              <g>
                <path d="M50 40 Q65 25 60 10" stroke="#DC143C" strokeWidth="10" fill="none" strokeLinecap="round">
                  <animate attributeName="d" 
                    values="M50 40 Q65 25 60 10;M50 40 Q65 20 55 5;M50 40 Q65 25 60 10" 
                    dur="0.8s" repeatCount="indefinite"/>
                </path>
                {/* Glove */}
                <circle cx="60" cy="8" r="6" fill="#FFFAFA">
                  <animate attributeName="cy" values="8;3;8" dur="0.8s" repeatCount="indefinite"/>
                  <animate attributeName="cx" values="60;55;60" dur="0.8s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* Other arm holding reins */}
              <path d="M10 45 Q-5 55 5 65" stroke="#DC143C" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <circle cx="5" cy="67" r="5" fill="#FFFAFA"/>
            </g>
          </svg>
        </div>
      )}
    </>
  );
};
