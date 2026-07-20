import { useParams } from "react-router-dom";
import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { useEffect } from "react";
import { type ProductImageProps } from "@/components/atomic/molecules";
import { ProductDetailCard } from '../../components/atomic/organisms/ProductDetailCard/ProductDetailCard';

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
        </div>
    )
}