import { ComponentPropsWithoutRef } from 'react';
import { cva } from 'class-variance-authority';

import styles from './Button.module.css';

const buttonVariants = cva(styles.button, {
  variants: {
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
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
};

const Button = ({ label, size, variant, className, ...props }: ButtonProps) => {
  // const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button {...props} className={buttonVariants({ variant, size, className })}>
      {label}
    </button>
  );
};

export { Button };
