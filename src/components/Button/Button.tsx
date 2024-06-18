import { ComponentPropsWithoutRef } from 'react';

import { ButtonVariants, buttonVariants } from './button-variants';

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonVariants & {
    label: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
    accent?: 'left' | 'top';
  };

const Button = ({ label, size, variant, accent, className, ...props }: ButtonProps) => {
  // const className = `${styles.button} ${styles[variant]} ${styles[size]} ${styles[accent]} ${className}`;
  // const className = clsx(styles.button, styles[variant], styles[size], styles[accent], className);

  return (
    <button {...props} className={buttonVariants({ accent, variant, size, className })}>
      {label}
    </button>
  );
};

export { Button };
