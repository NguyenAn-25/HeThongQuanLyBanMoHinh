// hai loại: 1 loại trượt, 1 loại đựng

import { useCallback, useEffect, useState } from "react"
import { ProductCard, type ProductCardProps } from "../ProductCard/ProductCard"
import useEmblaCarousel from "embla-carousel-react";
import { ScrollButton } from "../../atoms";

export interface ProductsSlideContainerProps {
    products: ProductCardProps[]
}


export function ProductsSlideContainer({ products }: ProductsSlideContainerProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        skipSnaps: false,
        duration: 40,
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api: any) => {
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className={`relative w-full px-2 py-4`}>
            {canScrollPrev && (
                <div className="w-10 absolute left-2 top-1/2 -translate-y-1/2 z-10">
                    <ScrollButton
                        className=""
                        onClick={scrollPrev}
                        direction="left"
                    ></ScrollButton>
                </div>
            )}

            <div ref={emblaRef} className="overflow-hidden w-full">
                <div className={`flex`}>
                    {products.map((product, index) => (
                        <div
                            className="shrink-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2"
                        >
                            <ProductCard
                                key={index}
                                {...product}
                            >
                            </ProductCard>
                        </div>
                    ))}
                </div>
            </div>

            {canScrollNext && (
                <div className='w-10 absolute right-2 top-1/2 -translate-y-1/2 z-10'>
                    <ScrollButton
                        onClick={scrollNext}
                    ></ScrollButton>
                </div>
            )}
        </div>
    )
}