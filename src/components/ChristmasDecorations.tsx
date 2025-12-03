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
        
        // Hide sleigh after animation (7s)
        setTimeout(() => {
          setIsSleighVisible(false);
          scheduleNextSleigh();
        }, 7000);
      }, delay);
    };

    // Start first sleigh after a short delay
    timeoutId = setTimeout(() => {
      setSleighDirection('right');
      setIsSleighVisible(true);
      setTimeout(() => {
        setIsSleighVisible(false);
        scheduleNextSleigh();
      }, 7000);
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
            top: '10%',
            left: 0,
            animation: sleighDirection === 'right' 
              ? 'sleigh-fly 7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards'
              : 'sleigh-fly-reverse 7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
          }}
        >
          {/* Magic sparkle trail */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-yellow-300"
                style={{
                  width: `${4 + Math.random() * 6}px`,
                  height: `${4 + Math.random() * 6}px`,
                  right: `${i * 25 + Math.random() * 15}px`,
                  top: `${-20 + Math.random() * 40}px`,
                  opacity: 0,
                  animation: `sparkle ${0.6 + Math.random() * 0.4}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: '0 0 8px 2px rgba(255, 215, 0, 0.8)',
                }}
              />
            ))}
          </div>
          
          <svg 
            width="320" 
            height="120" 
            viewBox="0 0 320 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: sleighDirection === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
              filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.35))',
            }}
          >
            {/* Reindeer 1 (front - Rudolph) */}
            <g>
              {/* Body */}
              <ellipse cx="55" cy="65" rx="22" ry="14" fill="#8B4513"/>
              {/* Neck */}
              <ellipse cx="38" cy="58" rx="8" ry="10" fill="#8B4513"/>
              {/* Head */}
              <ellipse cx="28" cy="52" rx="12" ry="10" fill="#A0522D"/>
              {/* Snout */}
              <ellipse cx="18" cy="56" rx="6" ry="5" fill="#C4A484"/>
              {/* Antlers */}
              <path d="M25 42 L22 28 L18 34 M25 42 L28 30" stroke="#5D3A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M35 42 L38 28 L42 34 M35 42 L32 30" stroke="#5D3A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
              {/* Red glowing nose (Rudolph) */}
              <circle cx="12" cy="56" r="5" fill="#E53935">
                <animate attributeName="r" values="5;6;5" dur="0.8s" repeatCount="indefinite"/>
              </circle>
              <circle cx="12" cy="56" r="8" fill="#E53935" opacity="0.3">
                <animate attributeName="r" values="8;12;8" dur="0.8s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="0.8s" repeatCount="indefinite"/>
              </circle>
              {/* Eye */}
              <circle cx="24" cy="50" r="2" fill="#1a1a1a"/>
              <circle cx="23" cy="49" r="0.8" fill="white"/>
              {/* Ear */}
              <ellipse cx="38" cy="44" rx="4" ry="6" fill="#A0522D"/>
              {/* Front legs */}
              <path d="M42 77 Q40 90 38 100" stroke="#6B4423" strokeWidth="4" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M42 77 Q40 90 38 100;M42 77 Q44 88 46 100;M42 77 Q40 90 38 100" dur="0.25s" repeatCount="indefinite"/>
              </path>
              <path d="M52 77 Q54 90 56 100" stroke="#6B4423" strokeWidth="4" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M52 77 Q54 90 56 100;M52 77 Q50 88 48 100;M52 77 Q54 90 56 100" dur="0.25s" repeatCount="indefinite"/>
              </path>
              {/* Back legs */}
              <path d="M62 77 Q60 90 58 100" stroke="#6B4423" strokeWidth="4" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M62 77 Q60 90 58 100;M62 77 Q64 88 66 100;M62 77 Q60 90 58 100" dur="0.25s" repeatCount="indefinite" begin="0.125s"/>
              </path>
              <path d="M72 77 Q74 90 76 100" stroke="#6B4423" strokeWidth="4" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M72 77 Q74 90 76 100;M72 77 Q70 88 68 100;M72 77 Q74 90 76 100" dur="0.25s" repeatCount="indefinite" begin="0.125s"/>
              </path>
              {/* Tail */}
              <ellipse cx="76" cy="62" rx="4" ry="3" fill="#5D3A1A"/>
            </g>
            
            {/* Reindeer 2 (back) */}
            <g>
              {/* Body */}
              <ellipse cx="105" cy="68" rx="20" ry="12" fill="#7A3C0F"/>
              {/* Neck */}
              <ellipse cx="90" cy="62" rx="7" ry="9" fill="#7A3C0F"/>
              {/* Head */}
              <ellipse cx="82" cy="56" rx="10" ry="8" fill="#8B4513"/>
              {/* Snout */}
              <ellipse cx="74" cy="59" rx="5" ry="4" fill="#B8956B"/>
              {/* Antlers */}
              <path d="M80 48 L78 38 L75 42" stroke="#4A2F0F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M88 48 L90 38 L93 42" stroke="#4A2F0F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              {/* Nose */}
              <ellipse cx="70" cy="59" rx="3" ry="2.5" fill="#3D2914"/>
              {/* Eye */}
              <circle cx="80" cy="54" r="1.8" fill="#1a1a1a"/>
              <circle cx="79" cy="53" r="0.6" fill="white"/>
              {/* Front legs */}
              <path d="M92 78 Q90 88 88 98" stroke="#5D3A1A" strokeWidth="3.5" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M92 78 Q90 88 88 98;M92 78 Q94 86 96 98;M92 78 Q90 88 88 98" dur="0.25s" repeatCount="indefinite" begin="0.06s"/>
              </path>
              <path d="M102 78 Q104 88 106 98" stroke="#5D3A1A" strokeWidth="3.5" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M102 78 Q104 88 106 98;M102 78 Q100 86 98 98;M102 78 Q104 88 106 98" dur="0.25s" repeatCount="indefinite" begin="0.06s"/>
              </path>
              {/* Back legs */}
              <path d="M112 78 Q110 88 108 98" stroke="#5D3A1A" strokeWidth="3.5" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M112 78 Q110 88 108 98;M112 78 Q114 86 116 98;M112 78 Q110 88 108 98" dur="0.25s" repeatCount="indefinite" begin="0.18s"/>
              </path>
              <path d="M120 78 Q122 88 124 98" stroke="#5D3A1A" strokeWidth="3.5" fill="none" strokeLinecap="round">
                <animate attributeName="d" values="M120 78 Q122 88 124 98;M120 78 Q118 86 116 98;M120 78 Q122 88 124 98" dur="0.25s" repeatCount="indefinite" begin="0.18s"/>
              </path>
            </g>
            
            {/* Reins/Harness */}
            <path d="M12 58 Q35 52 75 60 Q100 56 130 65" stroke="#8B0000" strokeWidth="2" fill="none"/>
            <path d="M130 65 Q145 60 160 68" stroke="#8B0000" strokeWidth="2" fill="none"/>
            
            {/* Sleigh */}
            <g>
              {/* Sleigh body - main */}
              <path d="M145 50 C140 50 138 55 138 62 L138 78 C138 88 145 92 155 92 L235 92 C250 92 258 85 260 75 L265 58 C267 50 262 46 255 46 L155 46 C150 46 145 48 145 50 Z" fill="#B71C1C"/>
              {/* Sleigh body - highlight */}
              <path d="M148 52 C145 52 143 56 143 62 L143 75 C143 82 148 86 155 86 L230 86 C242 86 248 82 250 74 L254 60 C255 54 252 52 248 52 Z" fill="#C62828"/>
              {/* Gold trim top */}
              <path d="M145 52 L260 52" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
              {/* Gold trim middle */}
              <path d="M142 68 L258 68" stroke="#FFD700" strokeWidth="2"/>
              {/* Decorative swirl */}
              <path d="M150 72 Q155 78 165 72 Q175 66 185 72" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
              
              {/* Sleigh runner */}
              <path d="M130 94 C125 94 122 90 125 86 L130 82 C132 80 136 80 140 80 L265 80 C272 80 276 82 278 86 L282 94 C285 100 280 104 272 104 L140 104 C132 104 128 100 130 94 Z" fill="#3E2723"/>
              {/* Runner gold accent */}
              <path d="M135 98 L275 98" stroke="#FFD700" strokeWidth="1.5"/>
              {/* Runner curl front */}
              <path d="M130 94 Q120 94 118 86 Q116 78 125 76" stroke="#3E2723" strokeWidth="6" fill="none" strokeLinecap="round"/>
            </g>
            
            {/* Santa */}
            <g>
              {/* Body/Coat */}
              <ellipse cx="200" cy="52" rx="28" ry="22" fill="#C62828"/>
              {/* Coat fur trim */}
              <ellipse cx="200" cy="70" rx="26" ry="6" fill="#FAFAFA"/>
              {/* Belt */}
              <rect x="175" y="58" width="50" height="8" rx="2" fill="#1a1a1a"/>
              {/* Belt buckle */}
              <rect x="195" y="56" width="12" height="12" rx="2" fill="#FFD700"/>
              <rect x="198" y="59" width="6" height="6" rx="1" fill="#1a1a1a"/>
              
              {/* Head */}
              <circle cx="200" cy="28" r="16" fill="#FFDBAC"/>
              {/* Beard */}
              <ellipse cx="200" cy="38" rx="14" ry="12" fill="#FAFAFA"/>
              <ellipse cx="200" cy="46" rx="10" ry="6" fill="#FAFAFA"/>
              <path d="M186 38 Q200 52 214 38" fill="#FAFAFA"/>
              {/* Mustache */}
              <path d="M192 34 Q188 32 186 35" stroke="#FAFAFA" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M208 34 Q212 32 214 35" stroke="#FAFAFA" strokeWidth="3" fill="none" strokeLinecap="round"/>
              
              {/* Hat */}
              <path d="M184 22 C184 10 192 4 200 4 C208 4 216 10 216 22 Z" fill="#C62828"/>
              {/* Hat fur brim */}
              <ellipse cx="200" cy="24" rx="18" ry="5" fill="#FAFAFA"/>
              {/* Hat pompom */}
              <circle cx="220" cy="8" r="6" fill="#FAFAFA"/>
              {/* Hat tip drooping */}
              <path d="M216 18 Q225 12 220 8" stroke="#C62828" strokeWidth="8" fill="none" strokeLinecap="round"/>
              
              {/* Face */}
              <circle cx="193" cy="24" r="2.5" fill="#1a1a1a"/>
              <circle cx="207" cy="24" r="2.5" fill="#1a1a1a"/>
              <circle cx="192" cy="23" r="1" fill="white"/>
              <circle cx="206" cy="23" r="1" fill="white"/>
              {/* Rosy cheeks */}
              <circle cx="186" cy="30" r="4" fill="#FFCDD2" opacity="0.6"/>
              <circle cx="214" cy="30" r="4" fill="#FFCDD2" opacity="0.6"/>
              {/* Nose */}
              <ellipse cx="200" cy="30" rx="4" ry="3" fill="#E8A090"/>
              {/* Smile under mustache */}
              <path d="M195 38 Q200 42 205 38" stroke="#C4A484" strokeWidth="1" fill="none"/>
              
              {/* Arm waving */}
              <g>
                <ellipse cx="235" cy="42" rx="8" ry="12" fill="#C62828">
                  <animate attributeName="cy" values="42;38;42" dur="0.6s" repeatCount="indefinite"/>
                </ellipse>
                {/* Fur cuff */}
                <ellipse cx="238" cy="32" rx="6" ry="4" fill="#FAFAFA">
                  <animate attributeName="cy" values="32;28;32" dur="0.6s" repeatCount="indefinite"/>
                </ellipse>
                {/* Hand */}
                <circle cx="240" cy="26" r="7" fill="#FFDBAC">
                  <animate attributeName="cy" values="26;22;26" dur="0.6s" repeatCount="indefinite"/>
                </circle>
              </g>
            </g>
            
            {/* Gift sack */}
            <g>
              <ellipse cx="165" cy="58" rx="16" ry="20" fill="#2E7D32"/>
              <path d="M152 42 Q165 32 178 42" stroke="#C62828" strokeWidth="4" fill="none" strokeLinecap="round"/>
              {/* Sack tie */}
              <ellipse cx="165" cy="42" rx="6" ry="4" fill="#1B5E20"/>
              {/* Gift peeking out */}
              <rect x="158" y="46" width="8" height="8" rx="1" fill="#F44336"/>
              <path d="M158 50 L166 50 M162 46 L162 54" stroke="#FFD700" strokeWidth="1.5"/>
            </g>
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
