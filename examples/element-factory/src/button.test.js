import { screen, fireEvent } from '@testing-library/dom';
import { createButton } from './button.js';

describe('createButton', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('creates a button with the text "Click Me"', () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button', {
      name: 'Click Me',
    });

    expect(button).toBeInTheDocument();
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button', {
      name: 'Click Me',
    });

    fireEvent.click(button);

    expect(button).toHaveTextContent('Clicked!');
  });
});
