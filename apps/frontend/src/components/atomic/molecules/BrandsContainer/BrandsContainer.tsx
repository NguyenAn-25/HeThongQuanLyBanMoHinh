import { Image } from "../../atoms"
import { ImageCycler } from "../ImageCycler/ImageCycler"

export interface BrandsContainerProps {
    brands: string[],
    className?: string
}

export function BrandsContainer({
    brands,
    className
}: BrandsContainerProps) {
    return (
        <div className={`grid grid-cols-12 grid-rows-3 md:grid-rows-2 p-4 gap-4 ${className}`}>
            <ImageCycler
                imgIds={brands}
                className="row-span-1 col-span-12 md:row-span-2 md:col-span-6 lg:col-span-4"
            />
            {brands.map((brand, index) => (
                <div className="col-span-6 md:col-span-3 lg:col-span-2 cursor-pointer transition-transform hover:scale-105 duration-600">
                    <Image
                        key={index}
                        publicId={brand}
                        objectFit="contain"
                    />
                </div>
            ))}
        </div>
    )
}