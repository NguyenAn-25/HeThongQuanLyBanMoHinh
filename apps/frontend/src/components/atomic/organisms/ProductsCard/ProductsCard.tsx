import { CardFrame } from "../../molecules";
import { ProductsSlideContainer, type ProductsSlideContainerProps } from '../../molecules/ProductsSlideContainer/ProductsSlideContainer';

interface ProductsCardProps extends ProductsSlideContainerProps {
    title: string
}

export function ProductsCard({
    title,
    ...props
}: ProductsCardProps) {
    return (
        <CardFrame
            title={title}
        >
            <ProductsSlideContainer
                {...props}
            />
        </CardFrame>
    )
}