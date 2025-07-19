// boundary conditions

export function calculateDiscount(price) {
  if (price < 0) {
    throw new Error('Price cannot be negative');
  }

  if (price > 1000) {
    return price * 0.2; // 20% discount for high prices
  }

  return price * 0.1; // 10% discount otherwise
}
