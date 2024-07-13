import { ComponentProps, useId } from 'react';
import cn from 'clsx';

import style from './Input.module.css';

type InputProps = {
  type?: 'text' | 'password' | 'email' | 'checkbox' | 'submit';
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
} & ComponentProps<'input'>;

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  label,
  containerClassName,
  inputClassName,
}: InputProps) => {
  const id = useId();

  return (
    <div className={cn(style.formControl, containerClassName)}>
      {label && (
        <label className={style.label} htmlFor={id} data-testid="input-label">
          {label}
        </label>
      )}

      <input
        id={id}
        className={cn(style.input, inputClassName)}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export { Input };
