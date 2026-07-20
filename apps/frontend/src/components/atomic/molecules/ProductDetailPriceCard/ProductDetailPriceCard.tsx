import { Money } from "../../atoms"

interface ProductDetailPriceCardProps {
    price: number,
    discountPrice?: number
}
export function ProductDetailPriceCard({
    price,
    discountPrice
}: ProductDetailPriceCardProps) {
    return (
        <div className="flex w-full bg-bg-light p-4 rounded-lg">
            {
                !discountPrice ?
                    <Money
                        price={price}
                        className="text-3xl text-primary font-bold"
                    />
                    :
                    <div className="flex items-baseline gap-2">
                        <Money
                            price={discountPrice}
                            className="text-3xl text-primary font-bold"
                        />
                        <Money
                            price={price}
                            className="text-base text-text-muted font-semibold"
                            type="discount"
                        />
                    </div>
            }
        </div>
    )
}