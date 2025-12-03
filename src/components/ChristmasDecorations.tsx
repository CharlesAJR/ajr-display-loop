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
        
        // Hide sleigh after animation (6s)
        setTimeout(() => {
          setIsSleighVisible(false);
          scheduleNextSleigh();
        }, 6000);
      }, delay);
    };

    // Start first sleigh after a short delay
    timeoutId = setTimeout(() => {
      setSleighDirection('right');
      setIsSleighVisible(true);
      setTimeout(() => {
        setIsSleighVisible(false);
        scheduleNextSleigh();
      }, 6000);
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

      {/* Flying Sleigh with Reindeer - SVG Animation */}
      {showFlyingSleigh && isSleighVisible && (
        <div 
          className="fixed pointer-events-none z-[100]"
          style={{
            top: '12%',
            left: 0,
            animation: sleighDirection === 'right' 
              ? 'sleigh-fly 6s ease-in-out forwards'
              : 'sleigh-fly-reverse 6s ease-in-out forwards',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
          }}
        >
          <svg width="280" height="100" viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Reindeer 1 (front) */}
            <g className="reindeer" style={{ animation: 'reindeer-run 0.3s ease-in-out infinite' }}>
              {/* Body */}
              <ellipse cx="45" cy="55" rx="18" ry="12" fill="#8B4513"/>
              {/* Head */}
              <circle cx="28" cy="48" r="8" fill="#8B4513"/>
              {/* Antlers */}
              <path d="M22 40 L18 28 L14 32 M22 40 L20 30 L24 26" stroke="#5D3A1A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M34 40 L38 28 L42 32 M34 40 L36 30 L32 26" stroke="#5D3A1A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              {/* Red nose */}
              <circle cx="22" cy="50" r="3" fill="#E53935"/>
              {/* Legs */}
              <line x1="35" y1="65" x2="32" y2="80" stroke="#5D3A1A" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="y2" values="80;75;80" dur="0.3s" repeatCount="indefinite"/>
              </line>
              <line x1="55" y1="65" x2="58" y2="80" stroke="#5D3A1A" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="y2" values="75;80;75" dur="0.3s" repeatCount="indefinite"/>
              </line>
              {/* Eye */}
              <circle cx="26" cy="46" r="1.5" fill="#1a1a1a"/>
            </g>
            
            {/* Reindeer 2 (back) */}
            <g style={{ animation: 'reindeer-run 0.3s ease-in-out infinite 0.15s' }}>
              {/* Body */}
              <ellipse cx="85" cy="58" rx="16" ry="10" fill="#A0522D"/>
              {/* Head */}
              <circle cx="70" cy="52" r="7" fill="#A0522D"/>
              {/* Antlers */}
              <path d="M65 45 L62 35 L58 38 M65 45 L64 37 L67 34" stroke="#6B4423" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M75 45 L78 35 L82 38 M75 45 L76 37 L73 34" stroke="#6B4423" strokeWidth="2" fill="none" strokeLinecap="round"/>
              {/* Nose */}
              <circle cx="64" cy="54" r="2.5" fill="#8B4513"/>
              {/* Legs */}
              <line x1="76" y1="66" x2="74" y2="78" stroke="#6B4423" strokeWidth="2.5" strokeLinecap="round">
                <animate attributeName="y2" values="78;74;78" dur="0.3s" repeatCount="indefinite"/>
              </line>
              <line x1="94" y1="66" x2="96" y2="78" stroke="#6B4423" strokeWidth="2.5" strokeLinecap="round">
                <animate attributeName="y2" values="74;78;74" dur="0.3s" repeatCount="indefinite"/>
              </line>
              {/* Eye */}
              <circle cx="68" cy="50" r="1.2" fill="#1a1a1a"/>
            </g>
            
            {/* Reins */}
            <path d="M62 55 Q90 52 115 58" stroke="#8B0000" strokeWidth="1.5" fill="none"/>
            <path d="M22 52 Q45 48 70 52" stroke="#8B0000" strokeWidth="1.5" fill="none"/>
            
            {/* Sleigh */}
            <g>
              {/* Sleigh body */}
              <path d="M110 45 Q105 45 105 55 L105 70 Q105 78 115 80 L185 80 Q200 80 205 70 L210 55 Q212 45 205 45 Z" fill="#C41E3A"/>
              {/* Sleigh decoration */}
              <path d="M110 55 L205 55" stroke="#FFD700" strokeWidth="2"/>
              <path d="M115 65 L200 65" stroke="#FFD700" strokeWidth="1.5"/>
              {/* Sleigh runner */}
              <path d="M100 82 Q95 82 95 78 L95 75 Q95 72 100 72 L215 72 Q220 72 222 78 L225 85 Q227 90 220 90 L100 90 Q92 90 92 85 Z" fill="#2C1810"/>
              <path d="M98 85 L222 85" stroke="#FFD700" strokeWidth="1"/>
            </g>
            
            {/* Santa */}
            <g>
              {/* Body */}
              <ellipse cx="160" cy="42" rx="22" ry="18" fill="#C41E3A"/>
              {/* Belt */}
              <rect x="140" y="50" width="40" height="6" fill="#1a1a1a"/>
              <rect x="155" y="49" width="10" height="8" rx="1" fill="#FFD700"/>
              {/* Head */}
              <circle cx="160" cy="22" r="12" fill="#FFDBAC"/>
              {/* Beard */}
              <ellipse cx="160" cy="30" rx="10" ry="8" fill="white"/>
              <ellipse cx="160" cy="35" rx="8" ry="5" fill="white"/>
              {/* Hat */}
              <path d="M148 18 Q148 8 160 6 Q172 8 172 18 Z" fill="#C41E3A"/>
              <ellipse cx="160" cy="19" rx="14" ry="3" fill="white"/>
              <circle cx="175" cy="8" r="4" fill="white"/>
              {/* Face */}
              <circle cx="155" cy="20" r="1.5" fill="#1a1a1a"/>
              <circle cx="165" cy="20" r="1.5" fill="#1a1a1a"/>
              <ellipse cx="160" cy="24" rx="2" ry="1.5" fill="#E57373"/>
              {/* Cheeks */}
              <circle cx="152" cy="24" r="2" fill="#FFCDD2" opacity="0.7"/>
              <circle cx="168" cy="24" r="2" fill="#FFCDD2" opacity="0.7"/>
              {/* Arm waving */}
              <ellipse cx="185" cy="35" rx="6" ry="8" fill="#C41E3A">
                <animate attributeName="cy" values="35;32;35" dur="0.5s" repeatCount="indefinite"/>
              </ellipse>
              <circle cx="188" cy="28" r="5" fill="#FFDBAC">
                <animate attributeName="cy" values="28;25;28" dur="0.5s" repeatCount="indefinite"/>
              </circle>
            </g>
            
            {/* Gift bag */}
            <ellipse cx="130" cy="50" rx="12" ry="15" fill="#2E7D32"/>
            <path d="M122 38 Q130 32 138 38" stroke="#C41E3A" strokeWidth="3" fill="none"/>
          </svg>
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
