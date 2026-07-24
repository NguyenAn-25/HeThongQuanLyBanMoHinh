import { ProductImage } from '../../molecules/ProductImage/ProductImage';
import { Money } from '../../atoms/Money/Money';
import type { TableProductOrderModel } from "../ProductsInOrderContainer/ProductsInOrderContainer";
import { Button } from '../../atoms/Button/Button';

interface ProductsInOrderMobiProps {
    items: TableProductOrderModel[],
    className?: string
}

export function ProductsInOrderMobi({
    items,
    className
}: ProductsInOrderMobiProps) {
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
                                    <div>
                                        {item.category.join(", ")}
                                    </div>
                                    <div>
                                        x{item.quantity}
                                    </div>
                                </div>
                                <Money
                                    price={item.price}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}