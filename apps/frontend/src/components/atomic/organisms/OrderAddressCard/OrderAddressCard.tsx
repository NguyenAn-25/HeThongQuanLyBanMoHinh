import { Icon } from '../../atoms/Icon/Icon';
import { Button } from '../../atoms/Button/Button';

interface OrderAddressCardProps {
    address: string,
    isDefault?: boolean
}

export function OrderAddressCard({
    address,
    isDefault = false
}: OrderAddressCardProps) {
    return (
        <div className="bg-card-bg p-4 rounded-lg flex flex-col gap-2">
            <div className="flex gap-2">
                <div className='w-6 text-primary'>
                    <Icon
                        name='Address'
                    />
                </div>
                <div>
                    Địa chỉ nhận hàng
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div title={address} className='line-clamp-2'>
                    {address}
                </div>
                {
                    isDefault && (
                        <div className=' border border-secondary text-secondary text-nowrap text-xs p-1'>
                            Mặc định
                        </div>
                    )
                }
                <Button
                    text="THAY ĐỔI"
                    className='p-2 bg-white rounded-sm text-primary text-nowrap font-semibold hover:bg-white-hover'
                />
            </div>
        </div>
    )
}