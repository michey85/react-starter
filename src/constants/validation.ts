export const passwordValidationErrors = {
  length: 'Password must be at least 8 characters long',
  case: 'Password must contain both upper and lower case letters',
  number: 'Password must contain at least one number',
  special: 'Password must contain at least one special character',
} as const;
