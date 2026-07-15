import { Image } from "@/components/atomic/atoms"
import { CategoriesCard, ProductsCard, QuickCardContainer } from "@/components/atomic/organisms"

const bannerId = "banner_xzynir"
const quickCardIds = ["quick_card_instock_nz2wta", "quick_card_hot_product_pwtkl8", "quick_card_pre_order_dtdzb0"]
const products = [
    {
        publicId: "product_hatsune_miku_phong_cach_duong_pho_eatwzu",
        text: "Hatsune Miku phong cách đường phố",
        price: 2000000,
        salePrice: 1000000,
    },
    {
        publicId: "product_hatsune_miku_phong_cach_duong_pho_eatwzu",
        text: "Hatsune Miku phong cách đường phố",
        price: 2000000,
        productType: "preorder"
    } as const,
    {
        publicId: "product_hatsune_miku_phong_cach_duong_pho_eatwzu",
        text: "Hatsune Miku phong cách đường phố",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_phong_cach_duong_pho_eatwzu",
        text: "Hatsune Miku phong cách đường phố",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_phong_cach_duong_pho_eatwzu",
        text: "Hatsune Miku phong cách đường phố",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_phong_cach_duong_pho_eatwzu",
        text: "Hatsune Miku phong cách đường phố",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_phong_cach_duong_pho_eatwzu",
        text: "Hatsune Miku phong cách đường phố",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_phong_cach_duong_pho_eatwzu",
        text: "Hatsune Miku phong cách đường phố",
        price: 2000000
    }
]

export function HomePage() {
    return (
        <div className="flex flex-col py-4 gap-4">
            <div className="w-full rounded-lg overflow-hidden">
                <Image
                    publicId={bannerId}
                />
            </div>
            <CategoriesCard />
            <QuickCardContainer
                imgIds={quickCardIds}
                numberOfCard="3"
            />
            <ProductsCard
                title={"MÔ HÌNH GIẢM GIÁ"}
                products={products}
            />
        </div>
    )
}