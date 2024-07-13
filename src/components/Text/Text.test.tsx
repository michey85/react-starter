import { render } from '@testing-library/react';

import { Text } from './Text';

describe('Text', () => {
  it('should render provided children', () => {
    const text = 'Hello World';

    const { getByText } = render(<Text>{text}</Text>);

    expect(getByText(text)).toBeInTheDocument();
  });

  it('should render with the correct class name', () => {
    const text = 'Hello World';

    const { getByText } = render(<Text className="test">{text}</Text>);

    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveClass('test');
    expect(getByText(text)).toHaveClass('text');
  });

  it('should render with the error class name', () => {
    const text = 'Hello World';

    const { getByText } = render(<Text isError>{text}</Text>);

    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveClass('text');
    expect(getByText(text)).toHaveClass('error');
  });

  it('should render with the success class name', () => {
    const text = 'Hello World';

    const { getByText } = render(<Text isSuccess>{text}</Text>);

    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveClass('text');
    expect(getByText(text)).toHaveClass('success');
  });

  it('should render with the correct class name and error class name', () => {
    const text = 'Hello World';

    const { getByText } = render(
      <Text className="test" isError>
        {text}
      </Text>,
    );

    expect(getByText(text)).toBeInTheDocument();
    expect(getByText(text)).toHaveClass('text');
    expect(getByText(text)).toHaveClass('test');
    expect(getByText(text)).toHaveClass('error');
  });
});
