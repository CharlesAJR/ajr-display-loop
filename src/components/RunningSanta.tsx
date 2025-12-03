interface RunningSantaProps {
  duration: number;
  isPaused: boolean;
}

export const RunningSanta = ({ duration, isPaused }: RunningSantaProps) => {
  return (
    <div 
      className="absolute bottom-1 z-10"
      style={{
        animation: isPaused ? 'none' : `santa-run ${duration}ms linear forwards`,
        left: '-60px',
      }}
    >
      <svg width="60" height="50" viewBox="0 0 60 50" className="drop-shadow-lg">
        {/* Santa running */}
        <g>
          {/* Back leg */}
          <g>
            <line x1="30" y1="32" x2="22" y2="46" stroke="#2F2F2F" strokeWidth="4" strokeLinecap="round">
              <animate 
                attributeName="x2" 
                values="22;38;22" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </line>
            {/* Boot */}
            <ellipse cx="22" cy="47" rx="5" ry="3" fill="#2F2F2F">
              <animate 
                attributeName="cx" 
                values="22;38;22" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
          
          {/* Front leg */}
          <g>
            <line x1="30" y1="32" x2="38" y2="46" stroke="#2F2F2F" strokeWidth="4" strokeLinecap="round">
              <animate 
                attributeName="x2" 
                values="38;22;38" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </line>
            {/* Boot */}
            <ellipse cx="38" cy="47" rx="5" ry="3" fill="#2F2F2F">
              <animate 
                attributeName="cx" 
                values="38;22;38" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </ellipse>
          </g>
          
          {/* Body */}
          <ellipse cx="30" cy="26" rx="14" ry="12" fill="#DC143C"/>
          
          {/* White trim */}
          <ellipse cx="30" cy="35" rx="14" ry="4" fill="#FFFAFA"/>
          
          {/* Belt */}
          <rect x="16" y="26" width="28" height="5" fill="#2F2F2F"/>
          <rect x="26" y="25" width="8" height="7" rx="1" fill="#FFD700"/>
          
          {/* Back arm (swinging) */}
          <g>
            <line x1="20" y1="20" x2="10" y2="30" stroke="#DC143C" strokeWidth="6" strokeLinecap="round">
              <animate 
                attributeName="x2" 
                values="10;18;10" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="y2" 
                values="30;18;30" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </line>
            {/* Glove */}
            <circle cx="10" cy="30" r="4" fill="#FFFAFA">
              <animate 
                attributeName="cx" 
                values="10;18;10" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values="30;18;30" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </circle>
          </g>
          
          {/* Front arm (swinging opposite) */}
          <g>
            <line x1="40" y1="20" x2="50" y2="18" stroke="#DC143C" strokeWidth="6" strokeLinecap="round">
              <animate 
                attributeName="x2" 
                values="50;42;50" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="y2" 
                values="18;30;18" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </line>
            {/* Glove */}
            <circle cx="50" cy="18" r="4" fill="#FFFAFA">
              <animate 
                attributeName="cx" 
                values="50;42;50" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="cy" 
                values="18;30;18" 
                dur="0.25s" 
                repeatCount="indefinite"
              />
            </circle>
          </g>
          
          {/* Head */}
          <circle cx="30" cy="8" r="10" fill="#FDBBB0"/>
          
          {/* Beard */}
          <path d="M22 10 Q24 22 30 24 Q36 22 38 10 Q34 14 30 14 Q26 14 22 10" fill="#FFFAFA"/>
          
          {/* Mustache */}
          <path d="M24 10 Q27 13 30 10 Q33 13 36 10" fill="#FFFAFA"/>
          
          {/* Eyes */}
          <circle cx="26" cy="6" r="1.5" fill="#2F2F2F"/>
          <circle cx="34" cy="6" r="1.5" fill="#2F2F2F"/>
          
          {/* Cheeks */}
          <circle cx="23" cy="10" r="2" fill="#FFB6C1" opacity="0.6"/>
          <circle cx="37" cy="10" r="2" fill="#FFB6C1" opacity="0.6"/>
          
          {/* Nose */}
          <circle cx="30" cy="9" r="2.5" fill="#E8A090"/>
          
          {/* Hat */}
          <path d="M20 4 Q20 -8 30 -10 Q40 -8 40 4" fill="#DC143C"/>
          <ellipse cx="30" cy="4" rx="12" ry="3.5" fill="#FFFAFA"/>
          
          {/* Pompom with bounce */}
          <circle cx="42" cy="-12" r="5" fill="#FFFAFA">
            <animate 
              attributeName="cy" 
              values="-12;-8;-12" 
              dur="0.25s" 
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};
