import { useBreadcrumbStore } from '@/stores/breadcrum.store';
import { ProductsInCartContainer } from '../../components/atomic/organisms/ProductsInCartContainer/ProductsInCartContainer';
import { useEffect } from 'react';
import { TotalCartContainer } from '@/components/atomic/organisms';
import { ProductsSlideCard } from '../../components/atomic/organisms/ProductsSlideCard/ProductsSlideCard';
const mockTotal = {
    totalProductQuantity: 3,
    totalPrice: 20000000
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
export function CartPage() {
    const { setBreadscrumbItems } = useBreadcrumbStore()
    useEffect(() => {
        setBreadscrumbItems([{ label: "Giỏ hàng" }]);
    }, [setBreadscrumbItems]);
    return (
        <div className="flex flex-col py-4 gap-4">
            <ProductsInCartContainer />
            <TotalCartContainer
                {...mockTotal}
            />
            <ProductsSlideCard
                title="CÓ THỂ BẠN CŨNG THÍCH"
                products={instockProducts}
            />
        </div>
    )
}