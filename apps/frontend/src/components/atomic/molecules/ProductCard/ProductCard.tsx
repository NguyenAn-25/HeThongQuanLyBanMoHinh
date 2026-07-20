import { Money } from '../../atoms';
import { CalculateDiscountPercentage } from "@/utils/calculator"
import { Link } from 'react-router-dom';
import { ProductImage, type ProductImageProps } from '../ProductImage/ProductImage';



export interface ProductCardProps extends ProductImageProps {
    text: string,
    price: number,
    salePrice?: number,
    className?: string
}

export function ProductCard({
    productId,
    text,
    price,
    salePrice,
    className,
    ...props
}: ProductCardProps) {
    const discountPercent = salePrice ? CalculateDiscountPercentage(price, salePrice) : undefined;

    const mainPrice = salePrice ?? price
    return (
        <Link
            to={`/products/${productId}`}
            className={`w-full flex flex-col ${className}`}
        >
            <ProductImage
                discountPercent={discountPercent}
                productHover="zoom"
                aspect='square'
                productId={productId}
                {...props}
            />
            <div
                className='truncate text-lg font-medium hover:text-primary cursor-pointer transition-all duration-300'
                title={text}
            >
                {text}
            </div>
            <div className='flex gap-1 items-baseline'>
                <Money
                    price={mainPrice}
                    className='text-sm text-secondary font-bold'
                />
                {salePrice &&
                    <Money
                        price={price}
                        className='text-sm text-text-muted font-normal'
                        type='discount'
                    />}
            </div>
        </Link>
    )
}