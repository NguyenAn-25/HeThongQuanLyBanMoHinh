import { CustomerOrderDetailContainer, ProcessOrderDetailBar } from "@/components/atomic/organisms";
import type { TableProductOrderModel } from "@/components/atomic/organisms/ProductsInOrderContainer/ProductsInOrderContainer";
import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { useEffect } from "react";

const mockTableProducts: TableProductOrderModel[] = [
    {
        id: '1',
        publicId: 'product_hatsune_miku_straw_berry_j6kbwz',
        name: 'Hatsune Miku phiên bản Hoa Anh Đào',
        category: ["Trung", "1/6"],
        price: 2000000,
        quantity: 1,
        totalPrice: 2000000
    },
    {
        id: '2',
        publicId: 'product_hatsune_miku_straw_berry_j6kbwz',
        name: 'Hatsune Miku phiên bản Hoa Anh Đào',
        category: ["Trung", "1/6"],
        price: 2000000,
        quantity: 2,
        totalPrice: 2000000
    },
];

const mockPathOrders = {
    label: "Đơn hàng đã đặt",
    path: "/orders"
}

export function CustomerOrderDetailPage() {
    const { setBreadscrumbItems } = useBreadcrumbStore()
    useEffect(() => {
        setBreadscrumbItems([
            {
                ...mockPathOrders,
            },
            {label: `Chi tiết đơn hàng` }
        ]);
    }, [setBreadscrumbItems])
    return (
        <div className="flex flex-col gap-4">
            <ProcessOrderDetailBar
                orderType="PreOrderTransfer"
                className="hidden lg:flex"
                ativatedNodeId='Success'
            />
            <CustomerOrderDetailContainer
                items={mockTableProducts}
            />
        </div>
    )
}