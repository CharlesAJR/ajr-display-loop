interface RunningSantaProps {
  duration: number;
  isPaused: boolean;
}

export const RunningSanta = ({ duration, isPaused }: RunningSantaProps) => {
  return (
    <div 
      className="absolute z-10"
      style={{
        bottom: '8px',
        animation: isPaused ? 'none' : `santa-run ${duration}ms linear forwards`,
        left: '-80px',
      }}
    >
      <svg width="80" height="75" viewBox="0 0 80 75" className="drop-shadow-lg">
        {/* Gift sack on back */}
        <g transform="translate(5, 18)">
          {/* Sack body */}
          <ellipse cx="12" cy="22" rx="14" ry="18" fill="#2E8B57"/>
          {/* Sack top tie */}
          <path d="M2 8 Q12 0 22 8" stroke="#1B5E20" strokeWidth="3" fill="none"/>
          <circle cx="12" cy="6" r="4" fill="#8B0000"/>
          {/* Gifts peeking out */}
          <rect x="6" y="2" width="6" height="6" rx="1" fill="#FFD700" transform="rotate(-15, 9, 5)"/>
          <rect x="14" y="4" width="5" height="5" rx="1" fill="#DC143C" transform="rotate(10, 16, 6)"/>
          {/* Gift ribbons */}
          <line x1="9" y1="2" x2="9" y2="8" stroke="#DC143C" strokeWidth="1"/>
          <line x1="6" y1="5" x2="12" y2="5" stroke="#DC143C" strokeWidth="1"/>
          {/* Decorative dots on sack */}
          <circle cx="8" cy="18" r="2" fill="#FFD700" opacity="0.8"/>
          <circle cx="16" cy="24" r="1.5" fill="#DC143C" opacity="0.8"/>
          <circle cx="10" cy="30" r="1.8" fill="#4169E1" opacity="0.8"/>
        </g>
        
        {/* Santa running */}
        <g transform="translate(25, 12)">
          {/* Back leg */}
          <g>
            <line x1="25" y1="38" x2="15" y2="56" stroke="#2F2F2F" strokeWidth="5" strokeLinecap="round">
              <animate 
                attributeName="x2" 
                values="15;35;15" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </line>
            {/* Boot */}
            <ellipse cx="15" cy="58" rx="7" ry="4" fill="#2F2F2F">
              <animate 
                attributeName="cx" 
                values="15;35;15" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </ellipse>
            {/* Boot trim */}
            <ellipse cx="15" cy="55" rx="6" ry="2" fill="#FFFAFA">
              <animate 
                attributeName="cx" 
                values="15;35;15" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
          
          {/* Front leg */}
          <g>
            <line x1="25" y1="38" x2="35" y2="56" stroke="#2F2F2F" strokeWidth="5" strokeLinecap="round">
              <animate 
                attributeName="x2" 
                values="35;15;35" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </line>
            {/* Boot */}
            <ellipse cx="35" cy="58" rx="7" ry="4" fill="#2F2F2F">
              <animate 
                attributeName="cx" 
                values="35;15;35" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </ellipse>
            {/* Boot trim */}
            <ellipse cx="35" cy="55" rx="6" ry="2" fill="#FFFAFA">
              <animate 
                attributeName="cx" 
                values="35;15;35" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
          
          {/* Body */}
          <ellipse cx="25" cy="28" rx="16" ry="14" fill="#DC143C"/>
          
          {/* Body highlight */}
          <ellipse cx="22" cy="25" rx="8" ry="6" fill="#E8293D" opacity="0.5"/>
          
          {/* White trim bottom */}
          <ellipse cx="25" cy="40" rx="16" ry="5" fill="#FFFAFA"/>
          
          {/* Belt */}
          <rect x="9" y="29" width="32" height="6" fill="#2F2F2F"/>
          <rect x="20" y="27" width="10" height="10" rx="2" fill="#FFD700"/>
          <rect x="23" y="30" width="4" height="4" rx="1" fill="#B8860B"/>
          
          {/* Back arm holding sack strap */}
          <g>
            <line x1="12" y1="22" x2="0" y2="28" stroke="#DC143C" strokeWidth="7" strokeLinecap="round"/>
            {/* Glove */}
            <circle cx="0" cy="28" r="5" fill="#FFFAFA"/>
            {/* Strap */}
            <line x1="0" y1="28" x2="-12" y2="18" stroke="#8B4513" strokeWidth="3"/>
          </g>
          
          {/* Front arm (swinging) */}
          <g>
            <line x1="38" y1="22" x2="50" y2="18" stroke="#DC143C" strokeWidth="7" strokeLinecap="round">
              <animate 
                attributeName="x2" 
                values="50;42;50" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="y2" 
                values="18;35;18" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </line>
            {/* Glove */}
            <circle cx="50" cy="18" r="5" fill="#FFFAFA">
              <animate 
                attributeName="cx" 
                values="50;42;50" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values="18;35;18" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </circle>
          </g>
          
          {/* Head */}
          <circle cx="28" cy="6" r="12" fill="#FDBBB0"/>
          
          {/* Ear */}
          <ellipse cx="40" cy="6" rx="3" ry="4" fill="#FDBBB0"/>
          
          {/* Beard */}
          <path d="M16 10 Q18 28 28 30 Q38 28 40 10 Q34 16 28 16 Q22 16 16 10" fill="#FFFAFA"/>
          
          {/* Beard waves */}
          <path d="M20 20 Q24 23 28 20 Q32 23 36 20" stroke="#E8E8E8" strokeWidth="1" fill="none"/>
          
          {/* Mustache */}
          <path d="M20 10 Q24 14 28 10 Q32 14 36 10" fill="#FFFAFA"/>
          <path d="M18 10 Q20 12 22 10" fill="#FFFAFA"/>
          <path d="M34 10 Q36 12 38 10" fill="#FFFAFA"/>
          
          {/* Eyes */}
          <ellipse cx="22" cy="4" rx="2" ry="2.5" fill="#2F2F2F"/>
          <ellipse cx="34" cy="4" rx="2" ry="2.5" fill="#2F2F2F"/>
          {/* Eye sparkle */}
          <circle cx="21" cy="3" r="0.8" fill="#FFFFFF"/>
          <circle cx="33" cy="3" r="0.8" fill="#FFFFFF"/>
          
          {/* Eyebrows */}
          <path d="M19 0 Q22 -1 25 1" stroke="#FFFAFA" strokeWidth="1.5" fill="none"/>
          <path d="M31 1 Q34 -1 37 0" stroke="#FFFAFA" strokeWidth="1.5" fill="none"/>
          
          {/* Cheeks */}
          <circle cx="18" cy="10" r="3" fill="#FFB6C1" opacity="0.7"/>
          <circle cx="38" cy="10" r="3" fill="#FFB6C1" opacity="0.7"/>
          
          {/* Nose */}
          <ellipse cx="28" cy="8" rx="3.5" ry="3" fill="#E8A090"/>
          <ellipse cx="27" cy="7" rx="1.5" ry="1" fill="#F5C5B5" opacity="0.6"/>
          
          {/* Smile */}
          <path d="M24 14 Q28 18 32 14" stroke="#8B4513" strokeWidth="1.5" fill="none"/>
          
          {/* Hat */}
          <path d="M14 2 Q14 -14 28 -16 Q42 -14 42 2" fill="#DC143C"/>
          {/* Hat highlight */}
          <path d="M18 -2 Q20 -10 28 -12" stroke="#E8293D" strokeWidth="2" fill="none" opacity="0.5"/>
          {/* Hat trim */}
          <ellipse cx="28" cy="2" rx="16" ry="5" fill="#FFFAFA"/>
          
          {/* Pompom with bounce */}
          <circle cx="44" cy="-18" r="7" fill="#FFFAFA">
            <animate 
              attributeName="cy" 
              values="-18;-14;-18" 
              dur="0.25s" 
              repeatCount="indefinite"
            />
          </circle>
          {/* Pompom shadow */}
          <circle cx="44" cy="-18" r="5" fill="#E8E8E8" opacity="0.3">
            <animate 
              attributeName="cy" 
              values="-18;-14;-18" 
              dur="0.25s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};
