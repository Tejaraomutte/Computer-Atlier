import { useState } from "react";

export default function useSimulation(total = 5) {
  const [step, setStep] = useState(0);
  const next = () => setStep((value) => Math.min(value + 1, total - 1));
  const previous = () => setStep((value) => Math.max(value - 1, 0));
  const reset = () => setStep(0);
  return { step, next, previous, reset, isFirst: step === 0, isLast: step === total - 1 };
}
