import { Button, Money } from '../../atoms';
import { CategorySelections, Counter, ProductImage, type CategorySet } from '../../molecules';
import { Table, type Column } from '../../molecules/Table/Table';
import { ProductsInCartMobi } from '../ProductsInCartMobi/ProductsInCartMobi';

export interface TableProductModel {
    id: string,
    publicId: string,
    name: string,
    category: CategorySet[],
    price: number,
    quantity: number,
    totalPrice: number
}

const mockCategory: CategorySet[] = [
    {
        categoryId: 1,
        categoryName: "Nguồn",
        selections: [
            {
                id: 1,
                name: "Trung"
            },
            {
                id: 2,
                name: "Nhật"
            },
        ],
        selectedProp: {
            id: 1,
            name: "Trung"
        }
    },
    {
        categoryId: 2,
        categoryName: "Scale",
        selections: [
            {
                id: 3,
                name: "1/6"
            },
            {
                id: 4,
                name: "1/2"
            },
        ],
        selectedProp: {
            id: 3,
            name: "1/6"
        }
    }
]

export const mockTableProducts: TableProductModel[] = [
    {
        id: '1',
        publicId: 'product_hatsune_miku_straw_berry_j6kbwz',
        name: 'Hatsune Miku phiên bản Hoa Anh Đào',
        category: mockCategory,
        price: 2000000,
        quantity: 1,
        totalPrice: 2000000
    },
    {
        id: '2',
        publicId: 'product_hatsune_miku_straw_berry_j6kbwz',
        name: 'Hatsune Miku phiên bản Hoa Anh Đào',
        category: mockCategory,
        price: 2000000,
        quantity: 2,
        totalPrice: 2000000
    },
];

export const columns: Column<TableProductModel>[] = [
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
                <CategorySelections
                    sets={item.category}
                />
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
        render: (item) => (
            <div className="flex justify-center">
                <Counter
                    defaultQuantity={item.quantity}
                />
            </div>
        ),
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
    {
        header: 'Thao tác',
        render: (_) => (
            <div className="flex justify-center">
                <Button
                    text="Xóa"
                    className="bg-light-red rounded-md p-2 text-white hover:bg-red-hover"
                />
            </div>
        ),
    },
];

export function ProductsInCartContainer() {
    return (
        <div className='bg-card-bg p-2 rounded-lg'>
            <Table
                columns={columns}
                data={mockTableProducts}
                keyExtractor={(item) => item.id}
                className='hidden lg:table'
            />
            <ProductsInCartMobi
                items={mockTableProducts}
                className='block lg:hidden'
            />
        </div>
    )
}