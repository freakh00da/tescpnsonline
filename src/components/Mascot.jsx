import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Mascot = () => {
  const [waving, setWaving] = useState(false);

  const waveAnimation = useSpring({
    transform: waving ? 'rotate(360deg)' : 'rotate(0deg)',
    from: { transform: 'rotate(0deg)' },
  });

  return (
    <div>
      <animated.div
        style={{
          ...waveAnimation,
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          position: 'relative',
        }}
        onMouseEnter={() => setWaving(true)}
        onMouseLeave={() => setWaving(false)}
      >
        {/* Karakter manusia kartun di sini */}
        <div
          style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src='/img/wa.webp' alt='' />
        </div>
      </animated.div>
    </div>
  );
};

export default Mascot;
