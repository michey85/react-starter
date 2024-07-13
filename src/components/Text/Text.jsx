import cn from 'clsx';

import style from './Text.module.css';

const Text = ({ children, className, isError, isSuccess }) => {
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
