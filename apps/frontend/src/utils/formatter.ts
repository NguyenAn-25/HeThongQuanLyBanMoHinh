interface MoneyFormatterProps {
    price: number | string
}

export function MoneyFormatter({ price }: MoneyFormatterProps): string {
    const numericValue = typeof price === 'string' ? parseFloat(price) : price;
    const formattedNumber = new Intl.NumberFormat('vi-VN', {
        maximumFractionDigits: 0,
    }).format(numericValue);

    return formattedNumber
}