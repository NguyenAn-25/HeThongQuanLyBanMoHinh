// hai loại: 1 loại trượt, 1 loại đựng

import { useCallback, useEffect, useState } from "react"
import { VideoCard, type VideoCardProps } from "../VideoCard/VideoCard"
import useEmblaCarousel from "embla-carousel-react";
import { ScrollButton } from "../../atoms";

export interface VideosSlideContainerProps {
    videos: VideoCardProps[]
}

export function VideosSlideContainer({ videos }: VideosSlideContainerProps) {
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
                    {videos.map((video, index) => (
                        <div
                            className="w-full md:w-1/2 lg:w-1/3 px-2"
                        >
                            <VideoCard
                                key={index}
                                {...video}
                            >
                            </VideoCard>
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