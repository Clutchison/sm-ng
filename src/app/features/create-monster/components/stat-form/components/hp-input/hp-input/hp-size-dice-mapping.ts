const DICE = {
  D4: 4,
  D6: 6,
  D8: 8,
  D10: 10,
  D12: 12,
  D20: 20,
} as const;

const SIZE = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
  GARGANTUAN: 'gargantuan',
} as const;

type ObjectValues<T> = T[keyof T];

export type Die = ObjectValues<typeof DICE>;

export type Size = ObjectValues<typeof SIZE>;

export const SizeDiceMapping: { [key in Size]: Die } = {
  'tiny': 4,
  'small': 6,
  'medium': 8,
  'large': 10,
  'huge': 12,
  'gargantuan': 20
};
