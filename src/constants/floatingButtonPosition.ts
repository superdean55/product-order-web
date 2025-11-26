export const FLOATING_POSITION = {
  TOP_RIGHT: 'top-2 right-2', 
  TOP_LEFT: 'top-2 left-2',
  BOTTOM_RIGHT: 'bottom-2 right-2',
  BOTTOM_LEFT: 'bottom-2 left-2',
} as const; 

export type FloatingPositionKey = keyof typeof FLOATING_POSITION;
export type FloatingPositionValue = typeof FLOATING_POSITION[FloatingPositionKey];