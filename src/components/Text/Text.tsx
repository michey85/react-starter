import cn from 'clsx';

import style from './Text.module.css';

type TextProps = {
  children: React.ReactNode;
  className?: string;
  isError?: boolean;
  isSuccess?: boolean;
};

const Text = ({ children, className, isError, isSuccess }: TextProps) => {
  return (
    <p
      className={cn(style.text, className, {
        [style.error]: isError,
        [style.success]: isSuccess,
      })}
    >
      {children}
    </p>
  );
};

export { Text };
