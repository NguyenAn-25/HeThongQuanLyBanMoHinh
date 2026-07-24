import { CategorySelections, type CategorySet } from "../../molecules"
import { ProductImage } from '../../molecules/ProductImage/ProductImage';
import { Counter } from '../../molecules/Counter/Counter';
import { Money } from '../../atoms/Money/Money';
import type { TableProductModel } from "../ProductsInCartContainer/ProductsInCartContainer";
import { Button } from '../../atoms/Button/Button';

interface ProductsInCartMobiProps {
    items: TableProductModel[],
    className?: string
}

export function ProductsInCartMobi({
    items,
    className
}: ProductsInCartMobiProps) {
    return (
        <div className={`flex flex-col rounded-md p-4 gap-2 ${className}`}>
            {
                items.map((item) => {
                    return (
                        <div className="flex gap-2">
                            <div>
                                <ProductImage
                                    productId={item.id}
                                    publicId={item.publicId}
                                    frameSize="small"
                                />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <div className="overflow-hidden text-nowrap">{item.name}</div>
                                <div className="flex justify-between">
                                    <CategorySelections
                                        sets={item.category}
                                    />
                                    <Counter
                                        defaultQuantity={item.quantity}
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <Money
                                        price={item.price}
                                    />
                                    <Button
                                        text="Xóa"
                                        className="border border-light-red text-light-red px-2 py-1 rounded text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}