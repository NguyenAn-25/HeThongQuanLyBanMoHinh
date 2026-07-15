import { CardFrame } from "../../molecules";
import { ProductsSlideContainer, type ProductsSlideContainerProps } from '../../molecules/ProductsSlideContainer/ProductsSlideContainer';

interface ProductsSlideCardProps extends ProductsSlideContainerProps {
    title: string
}

export function ProductsSlideCard({
    title,
    ...props
}: ProductsSlideCardProps) {
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