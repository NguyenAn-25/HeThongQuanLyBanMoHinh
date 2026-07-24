import { TotalOrderCard } from '@/components/atomic/organisms/TotalOrderCard/TotalOrderCard';
import { OrderAddressCard } from '../../components/atomic/organisms/OrderAddressCard/OrderAddressCard';
import { ProductsInOrderContainer } from '../../components/atomic/organisms/ProductsInOrderContainer/ProductsInOrderContainer';
import { useBreadcrumbStore } from '@/stores/breadcrum.store';
import { useEffect } from 'react';

const mockAddress = {
    address: "Nguyễn Thị Mỹ Huyền (+84) 999 999 999, 31/21, Phường Chánh Hưng, Thành phố Hồ Chí Minh",
    isDefault: true
}

export function OrderPage() {
    const { setBreadscrumbItems } = useBreadcrumbStore()
    useEffect(() => {
        setBreadscrumbItems([{ label: "Đơn hàng" }]);
    }, [setBreadscrumbItems]);
    return (
        <div className="flex flex-col gap-4">
            <OrderAddressCard
                {...mockAddress}
            />
            <ProductsInOrderContainer />
            <TotalOrderCard />
        </div>
    )
}