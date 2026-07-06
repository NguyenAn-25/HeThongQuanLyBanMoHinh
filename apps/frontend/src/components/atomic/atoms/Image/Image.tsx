import type React from "react";
import { useEffect, useState } from "react";

// kiểu tỷ lệ khung hình thông dụng
const ASPECT_RATIOS = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: 'aspect=auto'
};

// Kiểu fit ảnh
const OBJECT_FITS = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill'
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
    aspect?: keyof typeof ASPECT_RATIOS;
    objectFit?: keyof typeof OBJECT_FITS;
}

export const Image = (
    {
        src,
        alt = 'Image',
        fallbackSrc = '/img/Default.png', // cài đặt sau
        aspect = 'auto',
        objectFit = 'cover',
        className = '',
        loading = 'lazy',
        ...props
    }: ImageProps
) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>(src);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        setImgSrc(src);
        setIsError(false);
    }, [src]);

    const handleError = () => {
        if (!isError) {
            setIsError(true);
            setImgSrc(fallbackSrc);
        }
    };

    return (
        <div className={`w-full h-full overflow-hidden ${ASPECT_RATIOS[aspect]}`}>
            <img
                src={imgSrc}
                alt={alt}
                onError={handleError}
                className={`w-full h-full transition-all duration-300 ${OBJECT_FITS[objectFit]} ${className}`}
                loading={loading}
                {...props}
            />
        </div>
    );
}