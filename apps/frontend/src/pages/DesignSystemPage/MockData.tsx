import { Button, Image, Money, type RichTextJSON } from "@/components/atomic/atoms";
import { CategorySelections, Counter, ProductImage, type ButtonSelectionL1, type CategorySet } from "@/components/atomic/molecules";
import type { Column } from "@/components/atomic/molecules/Table/Table";
import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { useEffect } from "react";

export const buttonSelections: ButtonSelectionL1[] = [
    {
        text: "Mô hình PVC",
        childrens: [
            { text: "Mô hình nổi bật" },
            { text: "Mô hình có sẵn" },
            { text: "Mô hình pre-order" },
        ]
    },
    {
        text: "Mô hình Resin",
        childrens: [
            { text: "Mô hình nổi bật" },
            { text: "Mô hình có sẵn" },
            { text: "Mô hình pre-order" },
        ]
    },
    { text: "Sản phẩm nổi bật" }
]

export const productId2 = "product_mihari_mfodt5";
export const productId = "product_hatsune_miku_phong_cach_duong_pho_eatwzu";
export const price = 3000000;
export const salePrice = 2000000;

export const categoryGroupIds = ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"];

export const productDetails = [
    { productId: '1', publicId: "product_mihari_mfodt5" },
    { productId: '2', publicId: "product_mihari_detail1_u5xf8i" },
    { productId: '3', publicId: "product_mihari_detail2_taidol" },
    { productId: '4', publicId: "product_mihari_detail1_u5xf8i" },
    { productId: '5', publicId: "product_mihari_detail2_taidol" },
]

export const productDetailCategory = {
    status: "In Stock",
    brand: "BANDAI",
    type: "Scale Figure"
}

export const JsonText: RichTextJSON = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": `🔥 LƯU Ý : Sản phẩm này cần INBOX SHOP ĐỂ ĐƯỢC TƯ VẤN  trước khi QUYẾT ĐỊNH đặt hàng !!!
🔥 Xin vui lòng liên hệ shop nếu có bất kì câu hỏi nào!!!
    ------

🍒 Tên Sản Phẩm: Onii - chan wa Oshimai! - Oyama Mihari - 1 / 6 - Heisei Gyaru Ver. (Phat Company)
🍒 Hãng:Phat Company
🍒 Chất Liệu: PVC, ABS
🍒 Kích Thước: 250mm
🍒 Ngày Phát Hành: T7 / 2027

------

NA FIGURE - MÔ HÌNH ANIME CHÍNH HÃNG NHẬT BẢN
#figure #mo_hinh #mo_hinh_nhan_vat #mo_hinh_anime #anime_figure #figure #mo_hinh_chinh_hang #mo_hinh_figure #figure_chinh_hang #mo_hinh_tinh #nendoroid #gameprize #scalefigure

--- `
                }
            ]
        },
        {
            "type": "image",
            "attrs": {
                "src": "https://res.cloudinary.com/saxphmdc/image/upload/v1784396052/product_mihari_detail2_taidol.webp",
            }
        },
        {
            "type": "image",
            "attrs": {
                "src": "https://res.cloudinary.com/saxphmdc/image/upload/v1784396052/product_mihari_detail1_u5xf8i.webp",
            }
        },
        {
            "type": "image",
            "attrs": {
                "src": "https://res.cloudinary.com/saxphmdc/image/upload/v1784329584/product_mihari_mfodt5.png",
            }
        }
    ]
}

interface TableProductModel {
    id: string,
    publicId: string,
    name: string,
    category: string,
    price: number,
    quantity: number,
    totalPrice: number
}

export const mockTableProducts: TableProductModel[] = [
    {
        id: '1',
        publicId: 'product_hatsune_miku_straw_berry_j6kbwz',
        name: 'Hatsune Miku phiên bản Hoa Anh Đào',
        category: 'Scale Figure',
        price: 2000000,
        quantity: 1,
        totalPrice: 2000000
    },
    {
        id: '2',
        publicId: 'product_hatsune_miku_straw_berry_j6kbwz',
        name: 'Hatsune Miku phiên bản Hoa Anh Đào',
        category: 'Scale Figure',
        price: 2000000,
        quantity: 2,
        totalPrice: 2000000
    },
];

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

export const columns: Column<TableProductModel>[] = [
    {
        header: 'Sản phẩm',
        render: (item) => (
            <div className="flex gap-3 items-center" >
                <div className="w-12 shrink-0">
                    <ProductImage
                        productId={item.id}
                        publicId={item.publicId}
                        frameSize="small"
                        aspect="square"
                    />
                </div>
                <div className="overflow-hidden line-clamp-2">{item.name}</div>
                <CategorySelections
                    sets={mockCategory}
                />
            </div>
        ),
    },
    {
        header: 'Giá tiền',
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

export const variantSelections = [
    {
        categoryId: 1,
        categoryName: "Xuất xứ",
        selections: [
            { id: 1, name: "Trung" },
            { id: 2, name: "Nhật" }
        ],
        selectedProp: { id: 1, name: "Trung" }
    },
    {
        categoryId: 2,
        categoryName: "Scale",
        selections: [
            { id: 1, name: "1/6" },
            { id: 2, name: "1/2" }
        ],
        selectedProp: { id: 1, name: "1/6" }
    }
]

