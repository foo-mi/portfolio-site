import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gundamChars = [
      'UC', 'MS', 'GM', 'ZZ',
      '◆', '◇', '□', '■', '▲', '▼',
      '0', '1',
    ];

    const fontSize = 14;
    let columns = 0;
    let drops: number[] = [];

    const colors = [
      'rgba(185, 203, 161, 1)',
      'rgba(107, 31, 47, 1)',
      'rgba(74, 15, 28, 1)',
      'rgba(126, 42, 62, 1)',
    ];

    const initDrops = () => {
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // CRITICAL: Fully clear the canvas
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      initDrops();
    };

    // INITIAL SETUP - clear canvas on mount
    resizeCanvas();
    
    window.addEventListener('resize', resizeCanvas);

const draw = () => {
  // MUCH STRONGER fade - characters disappear quickly (0.3 instead of 0.15)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = gundamChars[Math.floor(Math.random() * gundamChars.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    ctx.fillStyle = color;

    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(char, x, y);

    // Add glow effect for some characters
    if (Math.random() > 0.95) {
      ctx.shadowBlur = 10;
      ctx.shadowColor = color;
      ctx.fillText(char, x, y);
      ctx.shadowBlur = 0;
    }

    // Reset drop to top when it goes off screen
    if (y > canvas.height) {
      drops[i] = 0;
    }

    // Increment Y coordinate
    drops[i]++;

    // Occasionally skip for varied speed
    if (Math.random() > 0.95) {
      drops[i]++;
    }
  }
};

    const interval = setInterval(draw, 50);

    // CLEANUP on unmount (when navigating away)
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
      // Clear canvas on unmount
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#000',
      }}
    />
  );
};

export default AnimatedBackground;