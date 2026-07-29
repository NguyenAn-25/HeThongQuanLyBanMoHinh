import { Money } from '../../atoms/Money/Money';
import type { TableProductOrderModel } from '../ProductsInOrderContainer/ProductsInOrderContainer';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atoms/Button/Button';
import { Tag } from '../../atoms';
import { ProductOrderDetailItem } from '../../molecules';

export interface CustomerOrdersItemProps {
    orderType?: "instock" | "preorder"
    items: TableProductOrderModel[],
    className?: string
}

const mockIdOrder = 1;

export function CustomerOrdersItem({
    orderType = "instock",
    items,
    className
}: CustomerOrdersItemProps) {

    const navigate = useNavigate()

    const handleClickOrderDetail = (orderId: number) => {
        navigate(`/orders/${orderId}`)
    }

    return (
        <div className={`bg-card-bg flex flex-col rounded-md px-4 pt-2 pb-6 gap-2 ${className}`}>
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 border-b-2 border-border-main py-4 px-2 justify-end items-center">
                    {
                        orderType === 'preorder' &&
                        <div>
                            {orderType &&
                                <Tag
                                    text='pre-order'
                                    color={'primary'}
                                    size={'semi'}
                                />
                            }
                        </div>
                    }
                    <div className='text-gray-hard'>
                        ĐÃ GIAO
                    </div>
                </div>

                <div className='pb-4 border-b-2 border-border-main'>
                    {
                        items.map((item) => {
                            return (
                                <ProductOrderDetailItem
                                    {...item}
                                />
                            )
                        })
                    }
                </div>
                <div className='flex flex-col items-end gap-4 pt-2'>
                    <div className='flex gap-2 items-center'>
                        <div className='text-gray-hard'>Tổng số tiền:</div>
                        <Money
                            price={items.reduce((total, item) => (
                                total + item.totalPrice
                            ), 0)}
                            className='text-xl font-bold text-primary'
                        />
                    </div>
                    <Button
                        text="Chi tiết đơn"
                        className='border border-primary rounded-lg font-medium text-xl px-8 py-2 bg-primary text-white hover:bg-primary-hover'
                        onClick={() => handleClickOrderDetail(mockIdOrder)}
                    />
                </div>
            </div>
        </div>
    )
}