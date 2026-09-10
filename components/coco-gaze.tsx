'use client';

import { useEffect, useRef } from 'react';

export function CocoGaze() {
  const faceRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  }, []);

  function followPointer(event: React.PointerEvent<HTMLDivElement>) {
    const face = faceRef.current;
    if (!face || event.pointerType === 'touch') return;
    const bounds = face.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      face.style.setProperty('--gaze-x', `${x * 14}px`);
      face.style.setProperty('--gaze-y', `${y * 10}px`);
      face.style.setProperty('--gaze-turn', `${x * 9}deg`);
    });
  }

  function resetFace() {
    const face = faceRef.current;
    if (!face) return;
    face.classList.remove('is-curious');
    face.style.setProperty('--gaze-x', '0px');
    face.style.setProperty('--gaze-y', '0px');
    face.style.setProperty('--gaze-turn', '0deg');
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
      aria-label="A playful portrait of Coco that follows your pointer"
      onPointerEnter={() => faceRef.current?.classList.add('is-curious')}
      onPointerMove={followPointer}
      onPointerLeave={resetFace}
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
