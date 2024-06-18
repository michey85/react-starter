import { cva, type VariantProps } from 'class-variance-authority';

import styles from './Button.module.css';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(styles.button, {
  variants: {
    accent: {
      left: styles.leftAccent,
      top: styles.topAccent,
    },
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      danger: styles.danger,
      warning: styles.warning,
      success: styles.success,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  compoundVariants: [
    {
      size: 'small',
      variant: 'primary',
      className: styles.arrow,
    },
  ],
  defaultVariants: {
    accent: null,
    size: 'medium',
    variant: 'primary',
  },
});
