import { Money } from "../../atoms";
import { ProductImage, Table } from "../../molecules";
import type { Column } from "../../molecules/Table/Table";
import { ProductsInOrderMobi } from "../ProductsInOrderMobi/ProductsInOrderMobi";

export interface TableProductOrderModel {
    id: string,
    publicId: string,
    name: string,
    category: string[],
    price: number,
    quantity: number,
    totalPrice: number,
    preOrderPrice?: number
}

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

const columns: Column<TableProductOrderModel>[] = [
    {
        header: 'Sản phẩm',
        render: (item) => (
            <div className="flex gap-3 items-center" >
                <div className="w-24 shrink-0">
                    <ProductImage
                        productId={item.id}
                        publicId={item.publicId}
                        frameSize="small"
                        aspect="square"
                    />
                </div>
                <div className="overflow-hidden line-clamp-2">{item.name}</div>
                <div className="text-text-muted">
                    <div className="text-left">
                        Phân loại hàng:
                    </div>
                    <div className="">
                        {item.category.join(", ")}
                    </div>
                </div>
            </div>
        ),
    },
    {
        header: 'Đơn giá',
        accessorKey: 'price',
        render: (item) => (
            <div className="flex justify-center">
                <Money
                    price={item.price}
                />
            </div>
        ),
    },
    {
        header: 'Số lượng',
        accessorKey: 'quantity'
    },
    {
        header: 'Tổng tiền',
        render: (item) => (
            <div className="flex justify-center">
                <Money
                    price={item.totalPrice}
                />
            </div>
        ),
    },
];

export function ProductsInOrderContainer() {
    return (
        <div className='bg-card-bg p-2 rounded-lg'>
            <Table
                columns={columns}
                data={mockTableProducts}
                keyExtractor={(item) => item.id}
                className='hidden lg:table'
            />
            <ProductsInOrderMobi
                items={mockTableProducts}
                className='block lg:hidden'
            />
        </div>
    )
}