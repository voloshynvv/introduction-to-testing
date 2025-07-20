import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import { Counter } from './counter';

describe('Counter ', () => {
  const renderCounter = () => {
    render(<Counter />);

    const counter = screen.getByTestId('counter-count');
    const counterUnit = screen.getByTestId('counter-unit');
    const resetButton = screen.getByRole('button', { name: 'Reset' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    return {
      counter,
      counterUnit,
      resetButton,
      decrementButton,
      incrementButton,
    };
  };

  it('renders with an initial count of 0', () => {
    const { counter } = renderCounter();

    expect(counter).toHaveTextContent(0);
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const { decrementButton, resetButton } = renderCounter();

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is not equal to 1', () => {
    const { counterUnit } = renderCounter();

    expect(counterUnit).toHaveTextContent(/^days$/);
  });

  it('displays "day" when the counter is 1', async () => {
    const { counterUnit, incrementButton } = renderCounter();

    await userEvent.click(incrementButton);

    expect(counterUnit).toHaveTextContent(/^day$/);
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const { counter, incrementButton } = renderCounter();

    await userEvent.click(incrementButton);

    expect(counter).toHaveTextContent(1);
  });

  it('decrements the count when "Decrement" button is clicked', async () => {
    const { counter, decrementButton, incrementButton } = renderCounter();

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(counter).toHaveTextContent(0);
  });

  it('does not allow decrementing below 0', async () => {
    const { counter, decrementButton } = renderCounter();

    await userEvent.click(decrementButton);
    await userEvent.click(decrementButton);

    expect(counter).toHaveTextContent(0);
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    const { counter, incrementButton, resetButton } = renderCounter();

    await userEvent.click(incrementButton);
    await userEvent.click(resetButton);

    expect(counter).toHaveTextContent(0);
  });

  it('updates the document title based on the count', async () => {
    const { incrementButton } = renderCounter();

    await userEvent.click(incrementButton);
    expect(document.title).toEqual(expect.stringContaining('1 day'));

    await userEvent.click(incrementButton);
    expect(document.title).toEqual(expect.stringContaining('2 days'));
  });
});
