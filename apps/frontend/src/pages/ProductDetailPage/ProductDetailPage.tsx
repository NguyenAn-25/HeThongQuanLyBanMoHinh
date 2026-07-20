import { useParams } from "react-router-dom";
import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { useEffect } from "react";
import { type ProductImageProps } from "@/components/atomic/molecules";
import { ProductDetailCard } from '../../components/atomic/organisms/ProductDetailCard/ProductDetailCard';
import { ProductDetailInfoCard } from '../../components/atomic/organisms/ProductDetailInfoCard/ProductDetailInfoCard';
import type { RichTextJSON } from "@/components/atomic/atoms";
import { ProductsSlideCard } from '../../components/atomic/organisms/ProductsSlideCard/ProductsSlideCard';

const product = {
    productId: 1,
    publicId: "product_mihari_mfodt5",
    text: "MÔ HÌNH Onii-chan wa Oshimai! - Oyama Mihari - 1/6 - Heisei Gyaru Ver. (Phat Company) FIGURE CHÍNH HÃNG",
    price: 2000000,
    salePrice: 1000000,
}

const products: ProductImageProps[] = [
    { productId: '1', publicId: "product_mihari_mfodt5" },
    { productId: '2', publicId: "product_mihari_detail1_u5xf8i" },
    { productId: '3', publicId: "product_mihari_detail2_taidol" },
    { productId: '4', publicId: "product_mihari_detail1_u5xf8i" },
    { productId: '5', publicId: "product_mihari_detail2_taidol" },
]

const JsonText: RichTextJSON = {
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
const instockProducts = [
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000,
        salePrice: 1000000,
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000,
        productType: "preorder"
    } as const,
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_candy_nv4fer",
        text: "Hatsune Miku Candy",
        price: 2000000
    }
].map((product, index) => ({
    productId: (index + 1).toString(),
    ...product,
}));

export function ProductDetailPage() {
    const { setBreadscrumbItems } = useBreadcrumbStore()
    useEffect(() => {
        setBreadscrumbItems([{ label: product.text }]);
    }, [setBreadscrumbItems]);

    const { id } = useParams();
    return (
        <div className="w-full rounded-lg flex flex-col py-4 gap-4">
            <ProductDetailCard
                text={product.text}
            />
            <ProductDetailInfoCard
                jsonData={JsonText}
            />
            <ProductsSlideCard
                title="SẢN PHẨM LIÊN QUAN"
                products={instockProducts}
            />
        </div>
    )
}