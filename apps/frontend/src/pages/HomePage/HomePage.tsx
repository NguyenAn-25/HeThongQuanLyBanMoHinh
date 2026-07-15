import { Image } from "@/components/atomic/atoms"
import { CategoriesCard, CategoryGroupsCard, ProductsCard, ProductsSlideCard, QuickCardContainer } from "@/components/atomic/organisms"

const bannerId = "banner_xzynir"
const quickCardIds = ["quick_card_instock_nz2wta", "quick_card_hot_product_pwtkl8", "quick_card_pre_order_dtdzb0"]
const quickCard2Ids = ["quick_card_faq_crhxd0", "quick_card_tutorial_pktnnd", "quick_card_service_diabr3", "quick_card_research_jc3kpv"]

const saleProducts = [
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
]

const preorderProducts = [
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        salePrice: 1000000,
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000,
        productType: "preorder"
    } as const,
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
        price: 2000000
    },
    {
        publicId: "product_hatsune_miku_cat_mxnky7",
        text: "Hatsune Miku Cat",
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
            <ProductsSlideCard
                title={"MÔ HÌNH GIẢM GIÁ"}
                products={saleProducts}
            />
            <CategoryGroupsCard />
            <ProductsCard
                title="MÔ HÌNH ĐÃ PHÁT HÀNH"
                products={instockProducts}
            />
            <QuickCardContainer
                imgIds={quickCard2Ids}
                numberOfCard="4"
            />
            <ProductsCard
                title="MÔ HÌNH ĐẶT TRƯỚC"
                products={preorderProducts}
            />
        </div>
    )
}