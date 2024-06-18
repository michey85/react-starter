import { ComponentPropsWithoutRef } from 'react';

import { type ButtonVariants, buttonVariants } from './button-variants';

type ButtonProps = ComponentPropsWithoutRef<'button'> & ButtonVariants;

const Button = ({ children, size, variant, accent, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonVariants({ accent, variant, size, className })}>
      {children}
    </button>
  );
};

export { Button };
