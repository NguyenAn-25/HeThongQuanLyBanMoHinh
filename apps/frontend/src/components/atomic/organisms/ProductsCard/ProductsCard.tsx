import { CardFrame, type ProductsContainerProps } from "../../molecules";
import { ProductsContainer } from "../../molecules"; 

interface ProductsCardProps extends ProductsContainerProps {
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
            <ProductsContainer
                {...props}
            />
        </CardFrame>
    )
}