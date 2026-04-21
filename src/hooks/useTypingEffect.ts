"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypingEffectOptions {
  /** Array of phrases to cycle through */
  phrases: string[];
  /** Milliseconds per character when typing (default: 50) */
  typeSpeed?: number;
  /** Milliseconds per character when erasing (default: 30) */
  eraseSpeed?: number;
  /** Milliseconds to hold the completed phrase (default: 4000) */
  holdDelay?: number;
  /** Milliseconds to pause before typing the next phrase (default: 500) */
  pauseDelay?: number;
}

type Phase = "typing" | "holding" | "erasing" | "pausing";

export function useTypingEffect({
  phrases,
  typeSpeed = 50,
  eraseSpeed = 30,
  holdDelay = 4000,
  pauseDelay = 500,
}: UseTypingEffectOptions) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  const currentPhrase = phrases[phraseIndex];

  const advancePhrase = useCallback(() => {
    setPhraseIndex((prev) => (prev + 1) % phrases.length);
  }, [phrases.length]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    switch (phase) {
      case "typing": {
        if (displayText.length < currentPhrase.length) {
          timer = setTimeout(() => {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          }, typeSpeed);
        } else {
          // Finished typing — hold
          setPhase("holding");
        }
        break;
      }

      case "holding": {
        timer = setTimeout(() => {
          setPhase("erasing");
        }, holdDelay);
        break;
      }

      case "erasing": {
        if (displayText.length > 0) {
          timer = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, eraseSpeed);
        } else {
          // Finished erasing — pause then advance
          setPhase("pausing");
        }
        break;
      }

      case "pausing": {
        timer = setTimeout(() => {
          advancePhrase();
          setPhase("typing");
        }, pauseDelay);
        break;
      }
    }

    return () => clearTimeout(timer);
  }, [
    phase,
    displayText,
    currentPhrase,
    typeSpeed,
    eraseSpeed,
    holdDelay,
    pauseDelay,
    advancePhrase,
  ]);

  return { displayText, isTyping: phase === "typing" };
}
