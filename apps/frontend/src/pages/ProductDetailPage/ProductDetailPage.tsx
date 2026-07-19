import { useParams } from "react-router-dom";
import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { useEffect } from "react";
import { ProductDetailCard } from '../../components/atomic/organisms/ProductDetailCard/ProductDetailCard';

const product = {
    productId: 1,
    publicId: "product_mihari_mfodt5",
    text: "MÔ HÌNH Onii-chan wa Oshimai! - Oyama Mihari - 1/6 - Heisei Gyaru Ver. (Phat Company) FIGURE CHÍNH HÃNG",
    price: 2000000,
    salePrice: 1000000,
}


export function ProductDetailPage() {
    const { setBreadscrumbItems } = useBreadcrumbStore()
    useEffect(() => {
        setBreadscrumbItems([{ label: product.text }]);
    }, [setBreadscrumbItems]);

    const { id } = useParams();
    return (
        <div className="w-full bg-card-bg rounded-lg flex flex-col p-4 gap-4">
            <ProductDetailCard
                {...product}
            />
        </div>
    )
}