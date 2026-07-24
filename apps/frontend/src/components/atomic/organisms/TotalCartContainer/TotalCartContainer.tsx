import { Money } from '../../atoms/Money/Money';
import { Button } from '../../atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
interface TotalCartContainerProps {
    totalProductQuantity: number,
    totalPrice: number
}

export function TotalCartContainer({
    totalProductQuantity,
    totalPrice
}: TotalCartContainerProps) {
    const navigate = useNavigate();

    const handleClickBuyButton = () => {
        navigate('/order')
    }
    return (
        <div className="w-full bg-card-bg p-4 flex items-center gap-4 rounded-lg">
            <div className='flex-1 flex gap-1 flex-wrap text-sm lg:justify-end lg:text-base'>
                <div className='text-nowrap'>
                    Tổng cộng
                </div>
                <div className='text-nowrap'>
                    {`(${totalProductQuantity} sản phẩm):`}
                </div>
            </div>
            <Money
                price={totalPrice}
                className='text-xl font-bold text-primary'
            />
            <Button
                text="MUA HÀNG"
                className='rounded-lg bg-primary text-white hover:bg-primary-hover py-2 px-2 text-sm lg:py-3 lg:px-16 font-semibold lg:text-base'
                onClick={() => handleClickBuyButton()}
            />
        </div>
    )
}