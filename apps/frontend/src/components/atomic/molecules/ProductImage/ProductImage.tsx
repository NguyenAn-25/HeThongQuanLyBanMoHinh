import { DiscountTag, Image, Tag } from "../../atoms";
import { type ImageProps } from "../../atoms/Image/Image";

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

export interface ProductImageProps extends ImageProps {
    productType?: keyof typeof productTypeVariants,
    publicId: string,
    discountPercent?: number
}

export function ProductImage({
    productType = "instock",
    publicId,
    discountPercent,
    ...props
}: ProductImageProps) {
    return (
        <div className="w-full bg-primary p-0.5 overflow-hidden cursor-pointer">
            <div className="relative w-full rounded-lg border-2 border-gray-light overflow-hidden transition-transform hover:scale-105 duration-600">
                <Image
                    publicId={publicId}
                    aspect='square'
                    {...props}
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
    )
}