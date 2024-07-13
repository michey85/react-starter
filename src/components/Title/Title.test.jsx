import { render, screen } from '@testing-library/react';

import { Title } from './Title';

const text = 'Hello world!';

describe('Title', () => {
  it('should render title with children', () => {
    render(<Title>{text}</Title>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render title with the correct tag', () => {
    const { container } = render(<Title level={2}>{text}</Title>);

    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('should render title with the correct className', () => {
    render(<Title className="test1">{text}</Title>);

    const element = screen.getByText(text);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('test1');
    expect(element).toHaveClass('title');
  });
});
