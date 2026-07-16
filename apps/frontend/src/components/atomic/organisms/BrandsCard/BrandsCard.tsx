import { BrandsContainer, CardFrame, type BrandsContainerProps } from "../../molecules";

interface BrandsCardProps extends BrandsContainerProps {
    title: string
}

export function BrandsCard({
    title,
    ...props
}: BrandsCardProps) {
    return (
        <CardFrame
            title={title}
        >
            <BrandsContainer
                {...props}
            />
        </CardFrame>
    )
}