import { render, screen /* fireEvent */ } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './Input';

const testPlaceholder = 'test placeholder';

describe('Input', () => {
  it('should render the input', () => {
    render(<Input placeholder={testPlaceholder} />);

    expect(screen.getByPlaceholderText(testPlaceholder)).toBeInTheDocument();
  });

  it('should render the input with the correct type', () => {
    render(<Input placeholder={testPlaceholder} type="checkbox" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render the input with the correct class names', () => {
    const { container } = render(
      <Input
        placeholder={testPlaceholder}
        inputClassName="inputTest"
        containerClassName="containerTest"
      />,
    );

    const containerEl = container.querySelector('.formControl.containerTest');

    expect(containerEl).toBeInTheDocument();

    const element = screen.getByPlaceholderText(testPlaceholder);

    expect(element).toHaveClass('input');
    expect(element).toHaveClass('inputTest');
  });

  it('should render the input without a label', () => {
    render(<Input placeholder={testPlaceholder} />);

    expect(screen.queryByTestId('input-label')).not.toBeInTheDocument();
  });

  it('should render the input with the correct label', () => {
    const labelText = 'I am a label';

    render(<Input placeholder={testPlaceholder} label={labelText} />);

    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });

  it('should render the input with the correct value', () => {
    render(
      <Input placeholder={testPlaceholder} value="123" onChange={jest.fn()} />,
    );

    expect(screen.getByDisplayValue('123')).toBeInTheDocument();
  });

  it('should invoke the onChange callback', async () => {
    const onChange = jest.fn();

    render(
      <Input placeholder={testPlaceholder} value="123" onChange={onChange} />,
    );

    const element = screen.getByPlaceholderText(testPlaceholder);

    // fireEvent.change(element, { target: { value: '12345' } });
    await userEvent.type(element, '45');

    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
