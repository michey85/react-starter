import { useState } from 'react';
import { validatePassword } from '../helpers/validatePassword';
import { wait } from '../helpers/wait';

const useCreateUser = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async ({ password }: Record<string, string>) => {
    const { success, error } = validatePassword(password);

    if (!success) {
      throw new Error(error as Error['message']);
    }

    await wait(1000);
  };

  const onSuccess = ({ name, password }: Record<string, string>) => {
    setErrorMessage('');
    setSuccessMessage(`User ${name} created with password ${password}`);
  };

  const onError = (error: Error) => {
    setErrorMessage(error.message);
  };

  return { successMessage, errorMessage, onSubmit, onSuccess, onError };
};

export { useCreateUser };
