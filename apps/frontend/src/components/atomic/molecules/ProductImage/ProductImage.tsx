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

const productHoverVariants = {
    static: "",
    zoom: "transition-transform hover:scale-105 duration-600"
}

const frameSizeVariants = {
    small: {
        padding: "",
        imgShape: "",
        tagSize: null,
    },
    normal: {
        padding: "p-0.5",
        imgShape: "border-2 rounded-lg",
        tagSize: "small"
    },
    large: {
        padding: "p-1.5",
        imgShape: "border-3 rounded-xl",
        tagSize: "medium"
    }
} as const;

export interface ProductImageProps extends ImageProps {
    productType?: keyof typeof productTypeVariants,
    productHover?: keyof typeof productHoverVariants,
    frameSize?: keyof typeof frameSizeVariants,
    publicId: string,
    discountPercent?: number
}

export function ProductImage({
    productType = "instock",
    productHover = "static",
    frameSize = "normal",
    publicId,
    discountPercent,
    ...props
}: ProductImageProps) {
    return (
        <div className={`w-full bg-primary overflow-hidden cursor-pointer ${frameSizeVariants[frameSize].padding}`}>
            <div className={`bg-card-bg relative w-full border-gray-light overflow-hidden ${productHoverVariants[productHover]} ${frameSizeVariants[frameSize].imgShape}`}>
                <Image
                    publicId={publicId}
                    {...props}
                />
                {
                    frameSizeVariants[frameSize].tagSize &&
                    <Tag
                        text={productTypeVariants[productType].text}
                        color={productTypeVariants[productType].color}
                        size={frameSizeVariants[frameSize].tagSize}
                        className='absolute top-2 right-2'
                    />
                }
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