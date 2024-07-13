import cn from 'clsx';
import style from './Form.module.css';

const Form = ({ onSubmit, onSuccess, onError, children, className }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await onSubmit(data);
      onSuccess && onSuccess(data);
    } catch (error) {
      onError && onError(error);
    }
  };

  return (
    <form
      className={cn(style.form, className)}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {children}
    </form>
  );
};

export { Form };
