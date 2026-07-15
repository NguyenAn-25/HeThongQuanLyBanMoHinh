import { CardFrame, type VideosSlideContainerProps } from "../../molecules";
import { VideosSlideContainer } from "../../molecules"; 

interface VideosCardProps extends VideosSlideContainerProps {
    title: string
}

export function VideosCard({
    title,
    ...props
}: VideosCardProps) {
    return (
        <CardFrame
            title={title}
        >
            <VideosSlideContainer
                {...props}
            />
        </CardFrame>
    )
}