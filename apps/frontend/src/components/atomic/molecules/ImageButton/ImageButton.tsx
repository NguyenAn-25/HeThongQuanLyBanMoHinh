import { Image } from '@/components/atomic/atoms';

const imgSizeVariants = {
    xs: 'w-5',
    sm: 'w-7',
    md: 'w-10',
    lg: 'w-12',
    xl: 'w-16',
    '2xl': 'w-24',
    '3xl': 'w-32',
};

interface ImageButtonProps {
    publicId: string,
    text: string,
    imgSize?: keyof typeof imgSizeVariants
    className?: string
    imgClassName?: string;
}

export function ImageButton({
    publicId,
    text,
    imgSize = "xs",
    className,
    imgClassName
}: ImageButtonProps) {
    return (
        <div className={`flex flex-col gap-1 hover:text-primary items-center ${className}`}>
            <div className={imgSizeVariants[imgSize]}>
                <Image
                    publicId={publicId}
                    className={imgClassName}
                />
            </div>
            <div className=''>{text}</div>
        </div>
    )
}