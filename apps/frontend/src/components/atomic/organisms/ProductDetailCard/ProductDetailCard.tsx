import { ProductImage, type ProductImageProps } from "../../molecules"

interface ProductDetailCardProps extends ProductImageProps {
    text: string
}
export function ProductDetailCard({ text, ...props }: ProductDetailCardProps) {
    return (
        <div className='w-full grid grid-cols-12'>
            <div className="w-full flex flex-col col-span-10">
                <div className="text-2xl font-semibold">
                    {text}
                </div>
                <div className="w-full grid grid-cols-12">
                    <div className="col-span-6">
                        <ProductImage
                            frameSize='large'
                            aspect='square'
                            objectFit='contain'
                            {...props}
                        />
                    </div>
                    <div className="col-span-6">skdhf</div>
                </div>
            </div>
            <div className="bg-amber-300">

            </div>
        </div>
    )
}
