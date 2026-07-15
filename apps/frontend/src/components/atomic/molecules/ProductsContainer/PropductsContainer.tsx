import { ProductCard, type ProductCardProps } from '../ProductCard/ProductCard';

export interface ProductsContainerProps {
    products: ProductCardProps[]
    className?: string
}

export function ProductsContainer({
    products,
    className
}: ProductsContainerProps) {
    return (
        <div className={`grid grid-cols-12 gap-4 p-4 ${className}`}>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    className='col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2'
                    {...product}
                />
            ))}
        </div>
    )
}