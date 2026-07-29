import { useNavigate } from 'react-router-dom';
import { Button, Money } from '../../atoms';
import { ProductOrderDetailItem } from '../../molecules/ProductOrderDetailItem/ProductOrderDetailItem';
import type { TableProductOrderModel } from '../ProductsInOrderContainer/ProductsInOrderContainer';

interface CustomerOrderDetailContainerProps {
    items: TableProductOrderModel[]
}

export function CustomerOrderDetailContainer({
    items
}: CustomerOrderDetailContainerProps) {
    const navigate = useNavigate();

    const handleClickButtonBack = () => {
        navigate(-1)
    }
    return (
        <div className="bg-card-bg p-4 rounded-lg flex flex-col gap-2">
            <div className="flex lg:hidden justify-between pb-2 border-b-2 border-border-main">
                <Button
                    iconName="ArrowHeadLeft"
                    text="TRỞ LẠI"
                    className="text-gray-hard hover:text-primary"
                    onClick={() => handleClickButtonBack()}
                />
                <div className='text-lg font-medium text-primary'>
                    ĐÃ GIAO
                </div>
            </div>
            <div className="flex flex-col gap-1 pb-2 border-b-2 border-border-main">
                <div className="font-medium">Địa Chỉ Nhận Hàng</div>
                <div className='text-gray-hard'>Nguyễn Thị Mỹ Huyền (+84) 999 999 999, 31/21, Phường Chánh Hưng, Thành phố Hồ Chí Minh</div>
            </div>
            <div className='flex flex-col gap-2 pb-4 border-b-2 border-border-main'>
                {
                    items.map((product) => (
                        <ProductOrderDetailItem
                            {...product}
                        />
                    ))
                }
            </div>
            <div className='flex justify-end'>
                <table className="shrink-0 w-max">
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 text-gray-hard">Tổng tiền hàng</td>
                            <td className="text-right">
                                <Money
                                    price={1000000}
                                />
                            </td>

                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-gray-hard">Tổng tiền phí vận chuyển</td>
                            <td className="text-right">
                                <Money
                                    price={1000000}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-gray-hard">Tổng số tiền</td>
                            <td className="text-right">
                                <Money
                                    price={1000000}
                                    className="text-xl font-bold text-primary"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-gray-hard">Phương thức thanh toán</td>
                            <td className="text-right">
                                <div>
                                    Thanh toán khi nhận hàng
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}