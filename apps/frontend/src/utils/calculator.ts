
export function CalculateDiscountPercentage(originalPrice: number, discountedPrice: number): number {
  if (originalPrice <= 0) {
    return 0;
  }

  if (discountedPrice >= originalPrice) {
    return 0;
  }

  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;

  return Math.round(discountPercentage);
}