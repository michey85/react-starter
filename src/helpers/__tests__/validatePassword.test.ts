import { passwordValidationErrors } from '../../constants/validation';
import { validatePassword } from '../validatePassword';

describe('validatePassword', () => {
  it('should return {success: true, error: null} for a valid password', () => {
    const validPassword = 'MyPassword123!';

    expect(validatePassword(validPassword)).toEqual({
      success: true,
      error: null,
    });
  });
  it('should validate a password against 8 minimum characters and return error message', () => {
    const invalidPassword = 'MyPs67!';
    const expectedError = {
      success: false,
      error: passwordValidationErrors.length,
    };

    expect(validatePassword(invalidPassword)).toEqual(expectedError);
  });
  it('should validate a password against mixed case', () => {
    const invalidPassword = 'mypassword12!';
    const invalidPassword2 = 'MYPASSWORD1222!';
    const expectedError = {
      success: false,
      error: passwordValidationErrors.case,
    };

    expect(validatePassword(invalidPassword)).toEqual(expectedError);
    expect(validatePassword(invalidPassword2)).toEqual(expectedError);
  });
  it('should validate a password against digits and characters', () => {
    const invalidPassword = 'MyPassword!@';
    const invalidPassword2 = 'MyPassword#!';
    const expectedError = {
      success: false,
      error: passwordValidationErrors.number,
    };

    expect(validatePassword(invalidPassword)).toEqual(expectedError);
    expect(validatePassword(invalidPassword2)).toEqual(expectedError);
  });
  it('should validate a password against special character', () => {
    const invalidPassword = 'MyPassword123';
    const expectedError = {
      success: false,
      error: passwordValidationErrors.special,
    };

    expect(validatePassword(invalidPassword)).toEqual(expectedError);
  });
});
