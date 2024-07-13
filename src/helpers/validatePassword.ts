import { passwordValidationErrors } from '../constants/validation';

export function validatePassword(password: string) {
  if (password.length < 8) {
    return {
      success: false,
      error: passwordValidationErrors.length,
    };
  }

  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
    return {
      success: false,
      error: passwordValidationErrors.case,
    };
  }

  if (!/[0-9]/.test(password)) {
    return {
      success: false,
      error: passwordValidationErrors.number,
    };
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    return {
      success: false,
      error: passwordValidationErrors.special,
    };
  }

  return {
    success: true,
    error: null,
  };
}
