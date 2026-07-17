import { Image } from "@/components/atomic/atoms"
import { CategoriesCard, CategoryGroupsCard, ProductsCard, ProductsSlideCard, QuickCardContainer, VideosCard } from "@/components/atomic/organisms"
import { BrandsCard } from "@/components/atomic/organisms/BrandsCard/BrandsCard"

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
].map((product, index) => ({
    id: index + 1,
    ...product,
}));

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
    id: index + 1,
    ...product,
}));

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
].map((product, index) => ({
    id: index + 1,
    ...product,
}));

const videos = [
    {
        publicId: "video_jujutsu_by13m7",
        text: "MÔ HÌNH GOJO X SUKUNA LUMINASTA (SEGA) - M FIGURE"
    },
        {
        publicId: "video_nier_automata_iz3tif",
        text: "MÔ HÌNH 2B - ICHIBAN KUJI NIER:AUTOMATA VER1.1A - A PRIZE - M FIGURE"
    },
        {
        publicId: "video_hatsune_miku_gvvhl9",
        text: "MÔ HÌNH HATSUNE MIKU - COREFUL - LOLITA VER. (TAITO) - M FIGURE"
    },
            {
        publicId: "video_chloe_von_einzbern_cunswi",
        text: "UNBOXING MÔ HÌNH CHLOE VON EINZBERN - KLANGFEST VER. - M FIGURE"
    },
]

const brands = ["brand_bandai_k5at3d", "brand_taito_urgpai", "brand_furyu_q7em1r", "brand_sega_zszhwr"]

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
            <VideosCard
                title="VIDEO - REVIEW SẢN PHẨM"
                videos={videos}
            />
            <BrandsCard
                title="THƯƠNG HIỆU NỔI TIẾNG"
                brands={brands}
            />
        </div>
    )
}