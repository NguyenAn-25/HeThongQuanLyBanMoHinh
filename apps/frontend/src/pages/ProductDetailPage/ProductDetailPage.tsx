import { useParams } from "react-router-dom";
import { ProductCard } from "@/components/atomic/molecules";
import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { useEffect } from "react";

const product = {
    productId: 1,
    publicId: "product_hatsune_miku_candy_nv4fer",
    text: "Hatsune Miku Candy",
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
        <div className="flex flex-col py-4 gap-4">
            <div className='w-12 h-12 bg-amber-600'>
                <ProductCard
                    {...product}
                />
            </div>
        </div>
    )
}