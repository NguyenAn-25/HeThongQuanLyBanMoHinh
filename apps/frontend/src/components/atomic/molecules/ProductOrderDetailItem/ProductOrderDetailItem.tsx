import { useNavigate } from "react-router-dom";
import { Money } from "../../atoms";
import type { TableProductOrderModel } from "../../organisms/ProductsInOrderContainer/ProductsInOrderContainer";
import { ProductImage } from "../ProductImage/ProductImage";

export function ProductOrderDetailItem({
    id,
    publicId,
    name,
    category,
    quantity,
    price,
    preOrderPrice
}: TableProductOrderModel) {
    const navigate = useNavigate();
    const handleClickProduct = () => {
        navigate('/products/1')
    }
    return (
        <div className="flex gap-4 py-2 items-center">
            <div className="shrink-0 w-32">
                <ProductImage
                    productId={id}
                    publicId={publicId}
                    frameSize="small"
                    onClick={() => handleClickProduct()}
                />
            </div>
            <div className="flex-1 flex flex-col gap-1">
                <div
                    className="w-fit overflow-hidden line-clamp-2 font-medium cursor-pointer hover:text-primary"
                    onClick={() => handleClickProduct()}
                >{name}</div>
                <div className="flex">
                    Phân loại {category.join(', ')}
                </div>
                <div>
                    x{quantity}
                </div>
            </div>
            <div className="flex flex-col items-end">
                <Money
                    price={price}
                />
                {
                    (preOrderPrice) &&
                    <div className='flex gap-2'>
                        <div className='text-nowrap'>Giá đặt cọc: </div>
                        <Money
                            price={preOrderPrice}
                        />
                    </div>
                }
            </div>
        </div>
    )
}