export const DRAWER_TYPES = {
  INFORMATION: 'information',
  INPUT: 'input',
} as const;

export type DrawerType = (typeof DRAWER_TYPES)[keyof typeof DRAWER_TYPES];

export const INFORMATION_SUBTYPES = {
  PROGRESS: 'progress',
  PASSIVE: 'passive',
} as const;

export const INPUT_SUBTYPES = {
  DEFAULT: 'default',
  DESTRUCTIVE: 'destructive',
} as const;

export type InformationSubtype = (typeof INFORMATION_SUBTYPES)[keyof typeof INFORMATION_SUBTYPES];

export type InputSubtype = (typeof INPUT_SUBTYPES)[keyof typeof INPUT_SUBTYPES];

type DrawerConfig = {
  DISMISSIBLE: 'full' | 'partial';
};

type DrawerTypeConfig = {
  [subtype: string]: DrawerConfig;
};

export const DRAWER_CONFIGS: Record<DrawerType, DrawerTypeConfig> = {
  [DRAWER_TYPES.INFORMATION]: {
    [INFORMATION_SUBTYPES.PROGRESS]: {
      DISMISSIBLE: 'partial',
    },
    [INFORMATION_SUBTYPES.PASSIVE]: {
      DISMISSIBLE: 'full',
    },
  },
  [DRAWER_TYPES.INPUT]: {
    [INPUT_SUBTYPES.DEFAULT]: {
      DISMISSIBLE: 'partial',
    },
    [INPUT_SUBTYPES.DESTRUCTIVE]: {
      DISMISSIBLE: 'partial',
    },
  },
};

export type SubtypeForType<T extends DrawerType> = T extends typeof DRAWER_TYPES.INFORMATION
  ? InformationSubtype
  : T extends typeof DRAWER_TYPES.INPUT
  ? InputSubtype
  : never;

export const TERTIARY_CTA_TYPES = {
  DEFAULT: 'default',
  DESTRUCTIVE: 'destructive',
};
