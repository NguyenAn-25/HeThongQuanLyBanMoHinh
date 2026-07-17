import { Money } from '../../atoms';
import { Image } from '../../atoms/Image/Image';
import { Tag } from '../../atoms/Tag/Tag';
import { DiscountTag } from '../../atoms/DiscountTag/DiscountTag';
import { CalculateDiscountPercentage } from "@/utils/calculator"
import { Link } from 'react-router-dom';

const productTypeVariants = {
    preorder: {
        text: "PRE ORDER",
        color: "primary"
    },
    instock: {
        text: "IN STOCK",
        color: "secondary"
    }
} as const;

export interface ProductCardProps {
    id: number,
    productType?: keyof typeof productTypeVariants,
    publicId: string,
    text: string,
    price: number,
    salePrice?: number,
    className?: string
}

export function ProductCard({
    id,
    productType = "instock",
    publicId,
    text,
    price,
    salePrice,
    className
}: ProductCardProps) {
    const discountPercent = salePrice ? CalculateDiscountPercentage(price, salePrice) : null;

    const mainPrice = salePrice ?? price
    return (
        <Link
            to={`/products/${id}`}
            className={`w-full flex flex-col ${className}`}
        >
            <div className="w-full bg-primary p-0.5 overflow-hidden cursor-pointer">
                <div className="relative w-full rounded-lg border-2 border-gray-light overflow-hidden transition-transform hover:scale-105 duration-600">
                    <Image
                        publicId={publicId}
                        aspect='square'
                    />
                    <Tag
                        text={productTypeVariants[productType].text}
                        color={productTypeVariants[productType].color}
                        className='absolute top-2 right-2'
                    />
                    {
                        discountPercent &&
                        <DiscountTag
                            percent={discountPercent}
                            className='absolute bottom-2 right-2'
                        />
                    }
                </div>
            </div>
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