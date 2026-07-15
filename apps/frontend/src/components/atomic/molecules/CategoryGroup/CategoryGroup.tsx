import { Image } from '../../atoms/Image/Image';

export interface CategoryGroupProps {
    title: string,
    quantity: number,
    imgIds: string[],
    className?: string
}

export function CategoryGroup({
    title,
    quantity,
    imgIds,
    className
}: CategoryGroupProps) {
    return (
        <div className={`flex flex-col items-center gap-1 py-4 px-8 bg-card-bg cursor-pointer ${className}`}>
            <div className="text-lg font-medium hover:text-primary">{title}</div>
            <div className="text-sm font-normal text-text-muted">{`( ${quantity} Sản phẩm )`}</div>
            <div className="w-full flex gap-1 justify-between py-2">
                {
                    imgIds.map((id, index) => (
                        <div className='w-16 rounded-xl overflow-hidden'>
                            <Image
                                key={index}
                                publicId={id}
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}