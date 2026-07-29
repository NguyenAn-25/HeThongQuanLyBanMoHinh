import { CustomerOrdersSearchBar } from "@/components/atomic/organisms";
import type { TableProductOrderModel } from "@/components/atomic/organisms/ProductsInOrderContainer/ProductsInOrderContainer";
import { CustomerOrdersContainer } from '../../components/atomic/organisms/CustomerOrdersContainer/CustomerOrdersContainer';
import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { useEffect } from "react";

const mockTableProducts1: TableProductOrderModel[] = [
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

const mockTableProducts2: TableProductOrderModel[] = [
    {
        id: '1',
        publicId: 'product_hatsune_miku_straw_berry_j6kbwz',
        name: 'Hatsune Miku phiên bản Hoa Anh Đào',
        category: ["Trung", "1/6"],
        price: 2000000,
        quantity: 1,
        totalPrice: 2000000,
        preOrderPrice: 500000
    }
];

const mockCustomerOrdersContainer = [
    {
        items: mockTableProducts1,
    },
    {
        items: mockTableProducts2,
        orderType: "preorder"
    } as const,
]

export function CustomerOrdersPage() {
    const { setBreadscrumbItems } = useBreadcrumbStore()
    useEffect(() => {
        setBreadscrumbItems([{ label: "Đơn hàng đã đặt" }]);
    }, [setBreadscrumbItems])
    return (
        <div className="flex flex-col gap-4">
            <CustomerOrdersSearchBar />
            <CustomerOrdersContainer
                items={mockCustomerOrdersContainer}
            />
        </div>
    )
}