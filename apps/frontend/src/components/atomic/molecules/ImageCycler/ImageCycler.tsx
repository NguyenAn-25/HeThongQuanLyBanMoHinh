import { useState, useEffect } from 'react';
import { Image } from '../../atoms';

interface ImageCyclerProps {
    imgIds: string[]
    className?: string
}

export function ImageCycler({ imgIds, className }: ImageCyclerProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imgIds.length);
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
            <div className={`relative w-full ${className}`}>
                {imgIds.map((id, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <Image
                            key={index}
                            publicId={id}
                            objectFit='contain'
                            className={`
                                absolute inset-0 w-full h-full object-cover
                                transition-opacity duration-1000 ease-in-out
                                ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                            `}
                        />
                    );
                })}
            </div>
    );
}