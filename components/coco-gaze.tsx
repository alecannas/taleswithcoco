'use client';

import { useEffect, useRef } from 'react';

export function CocoGaze() {
  const faceRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const face = faceRef.current;
    const hero = face?.closest('.hero');
    if (!face || !hero) return;

    function followPointer(event: PointerEvent) {
      if (event.pointerType === 'touch') return;
      const heroBounds = hero!.getBoundingClientRect();
      const inside = event.clientX >= heroBounds.left && event.clientX <= heroBounds.right && event.clientY >= heroBounds.top && event.clientY <= heroBounds.bottom;

      if (!inside) {
        resetFace();
        return;
      }

      const faceBounds = face!.getBoundingClientRect();
      const dx = event.clientX - (faceBounds.left + faceBounds.width / 2);
      const dy = event.clientY - (faceBounds.top + faceBounds.height / 2);
      const x = Math.max(-1, Math.min(1, dx / (heroBounds.width * 0.45)));
      const y = Math.max(-1, Math.min(1, dy / (heroBounds.height * 0.45)));
      const orbit = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        face!.classList.add('is-curious');
        face!.style.setProperty('--gaze-x', `${x * 11}px`);
        face!.style.setProperty('--gaze-y', `${y * 8}px`);
        face!.style.setProperty('--gaze-turn', `${orbit}deg`);
        face!.style.setProperty('--gaze-tilt-x', `${-y * 14}deg`);
        face!.style.setProperty('--gaze-tilt-y', `${x * 18}deg`);
      });
    }

    window.addEventListener('pointermove', followPointer, { passive: true });
    return () => {
      window.removeEventListener('pointermove', followPointer);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  function resetFace() {
    const face = faceRef.current;
    if (!face) return;
    face.classList.remove('is-curious');
    face.style.setProperty('--gaze-x', '0px');
    face.style.setProperty('--gaze-y', '0px');
    face.style.setProperty('--gaze-turn', '0deg');
    face.style.setProperty('--gaze-tilt-x', '0deg');
    face.style.setProperty('--gaze-tilt-y', '0deg');
  }

  function makeCocoPop() {
    const face = faceRef.current;
    if (!face) return;
    face.classList.remove('is-popping');
    requestAnimationFrame(() => face.classList.add('is-popping'));
  }

  return (
    <div
      className="coco-gaze"
      ref={faceRef}
      role="img"
      aria-label="A playful portrait of Coco that rotates as your pointer circles the hero"
      onPointerDown={makeCocoPop}
    >
      <span className="coco-gaze-spark coco-gaze-spark--one" aria-hidden="true">✦</span>
      <span className="coco-gaze-spark coco-gaze-spark--two" aria-hidden="true">✧</span>
      <span className="coco-gaze-bubble">
        <img src="/coco-face-logo.png" alt="" draggable="false" />
      </span>
      <span className="coco-gaze-note" aria-hidden="true">psst… over here!</span>
    </div>
  );
}
