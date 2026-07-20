import { useEffect, useState } from 'react';
import { ProductImage, type ProductImageProps } from '../ProductImage/ProductImage';

interface ProductDetailSetImages {
    productImages: ProductImageProps[]
}

// thuộc tính phục vụ cho fade-in fade-out
interface DisplayImage extends ProductImageProps {
    main: boolean
}

export function ProductDetailSetImages({
    productImages
}: ProductDetailSetImages) {
    const defaultMainImageIndex = 0
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [displayMainImages, setDisplayMainImages] = useState<DisplayImage[]>([{ main: true, ...productImages[defaultMainImageIndex] }]);

    useEffect(() => {
        if (activeIndex === null) return; // render lần đầu
        const nextImage = productImages[activeIndex];
        console.log(activeIndex, nextImage)
        const currentActive = displayMainImages.find(img => img.main);
        if (nextImage.productId === currentActive?.productId) {
            return
        }; // nhấn thumbnail đang là main

        const newBatch: DisplayImage[] = [];
        if (currentActive) {
            console.log("current không bị null")
            newBatch.push({ ...currentActive, main: false });
        }
        newBatch.push({ ...nextImage, main: true });

        setDisplayMainImages(newBatch);
        console.log(newBatch);
    }, [activeIndex]);

    const handleClickThumbnail = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <div className='w-full flex flex-col gap-2'>
            <div className="w-full relative aspect-square">
                {displayMainImages.map((image) => (
                    <div
                        key={image.productId}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${image.main ? 'opacity-100 z-0' : 'opacity-0 z-10'}`}
                    >
                        <ProductImage
                            frameSize='large'
                            aspect='square'
                            objectFit='contain'
                            {...image}
                        />

                    </div>
                ))}
            </div>

            <div className="flex justify-between">
                {
                    productImages.map((product, index) => (
                        <div
                            className='w-20'
                            key={index}
                            onClick={() => handleClickThumbnail(index)}
                        >
                            <ProductImage
                                frameSize='small'
                                aspect='square'
                                {...product}
                            />
                        </div>
                    ))
                }
            </div>
        </div>

    )
}