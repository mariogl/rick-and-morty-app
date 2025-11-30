export const characterStatus = ["Alive", "Dead", "unknown"] as const;

export type Status = (typeof characterStatus)[number];
