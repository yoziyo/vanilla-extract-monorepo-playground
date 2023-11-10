import { recipe } from '@vanilla-extract/recipes';
import { KPDSVars } from '../theme.css';

const strokeVariants = [
  {
    variants: {
      variant: 'stroke',
      color: 'primary',
    },
    style: {
      background: KPDSVars.color.background.background1,
      borderColor: KPDSVars.color.main.primary,
    },
  },
];

export const variants = recipe({
  base: {
    fontWeight: 600,
    color: KPDSVars.color.text.inverse,
  },

  variants: {
    color: {
      primary: {
        background: KPDSVars.color.main.primary,
        '&:active': {
          background: KPDSVars.color.purple900,
        },
      },
      secondary: {
        background: KPDSVars.color.main.secondary,
        '&:active': {
          background: KPDSVars.color.black,
        },
      },
      tertiary: {
        background: KPDSVars.color.main.tertiary,
        '&:active': {
          background: KPDSVars.color.orange900,
        },
      },
      danger: {
        background: KPDSVars.color.main.danger,
        '&:active': {
          background: KPDSVars.color.red900,
        },
      },
    },
    size: {
      extraLarge: { padding: '12px 24px 12px 24px', borderRadius: '12px', fontSize: '18px' },
      large: { padding: '12px 16px', borderRadius: '10px', fontSize: '16px' },
      medium: { padding: '10px 16px', borderRadius: '8px', fontSize: '14px' },
      small: { padding: '6px 12px', borderRadius: '6px', fontSize: '14px' },
    },
    shape: {
      rounded: {},
      square: {},
    },
    variant: {
      fill: {},
      stroke: {},
      tender: {},
    },
  },

  compoundVariants: [
    // variant
    {
      variants: {
        variant: 'stroke',
        color: 'primary',
      },
      style: {
        background: KPDSVars.color.background.background1,
        border: `1px solid ${KPDSVars.color.main.primary}`,
        color: KPDSVars.color.main.primary,
        ':active': {
          background: KPDSVars.color.main.primaryContainer,
        },
      },
    },
    {
      variants: {
        variant: 'tender',
        color: 'primary',
      },
      style: {
        background: KPDSVars.color.main.primaryContainer,
        color: KPDSVars.color.main.primary,
        ':active': {
          background: KPDSVars.color.purple100,
        },
      },
    },
    {
      variants: {
        variant: 'stroke',
        color: 'secondary',
      },
      style: {
        background: KPDSVars.color.background.background1,
        border: `1px solid ${KPDSVars.color.line.line2}`,
        color: KPDSVars.color.text.primary,
        ':active': {
          background: KPDSVars.color.main.secondaryContainer,
        },
      },
    },
    {
      variants: {
        variant: 'tender',
        color: 'secondary',
      },
      style: {
        background: KPDSVars.color.background.background4,
        color: KPDSVars.color.text.primary,
        ':active': {
          background: KPDSVars.color.gray300,
        },
      },
    },
    {
      variants: {
        variant: 'stroke',
        color: 'tertiary',
      },
      style: {
        background: KPDSVars.color.background.background1,
        border: `1px solid ${KPDSVars.color.main.tertiary}`,
        color: KPDSVars.color.main.tertiary,
        ':active': {
          background: KPDSVars.color.main.tertiaryContainer,
        },
      },
    },
    {
      variants: {
        variant: 'tender',
        color: 'tertiary',
      },
      style: {
        background: KPDSVars.color.main.tertiaryContainer,
        color: KPDSVars.color.main.tertiary,
        ':active': {
          background: KPDSVars.color.orange100,
        },
      },
    },
    {
      variants: {
        variant: 'stroke',
        color: 'danger',
      },
      style: {
        background: KPDSVars.color.background.background1,
        border: `1px solid ${KPDSVars.color.main.danger}`,
        color: KPDSVars.color.main.tertiary,
        ':active': {
          background: KPDSVars.color.main.dangerContainer,
        },
      },
    },
    {
      variants: {
        variant: 'tender',
        color: 'danger',
      },
      style: {
        background: KPDSVars.color.main.dangerContainer,
        color: KPDSVars.color.main.danger,
        ':active': {
          background: KPDSVars.color.red100,
        },
      },
    },
    // shape
    {
      variants: {
        size: 'extraLarge',
        shape: 'square',
      },
      style: {
        borderRadius: '28px',
      },
    },
    {
      variants: {
        size: 'large',
        shape: 'square',
      },
      style: {
        borderRadius: '24px',
      },
    },
    {
      variants: {
        size: 'medium',
        shape: 'square',
      },
      style: {
        borderRadius: '20px',
      },
    },
    {
      variants: {
        size: 'small',
        shape: 'square',
      },
      style: {
        borderRadius: '16px',
      },
    },
  ],

  defaultVariants: {
    variant: 'fill',
    shape: 'rounded',
    color: 'primary',
    size: 'extraLarge',
  },
});
