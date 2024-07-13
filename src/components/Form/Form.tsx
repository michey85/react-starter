import cn from 'clsx';
import style from './Form.module.css';
import { ComponentProps } from 'react';

type FormProps = {
  onSubmit: (data: Record<string, string>) => void;
  onSuccess?: (data: Record<string, string>) => void;
  onError?: (error: Error) => void;
  children: React.ReactNode;
  className?: string;
} & ComponentProps<'form'>;

const Form = ({ onSubmit, onSuccess, onError, children, className }: FormProps) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    try {
      await onSubmit(data);
      onSuccess && onSuccess(data);
    } catch (error: unknown) {
      if (error instanceof Error) onError && onError(error);
    }
  };

  return (
    <form className={cn(style.form, className)} onSubmit={handleSubmit} autoComplete="off">
      {children}
    </form>
  );
};

export { Form };
