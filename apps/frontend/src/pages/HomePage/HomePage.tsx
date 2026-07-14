import { Image } from "@/components/atomic/atoms"
import { CategoryCard, QuickCardContainer } from "@/components/atomic/organisms"

const bannerId = "banner_xzynir"
const quickCardIds = ["quick_card_instock_nz2wta", "quick_card_hot_product_pwtkl8", "quick_card_pre_order_dtdzb0"]

export function HomePage() {
    return (
        <div className="flex flex-col py-4 gap-4">
            <div className="w-full rounded-lg overflow-hidden">
                <Image
                    publicId={bannerId}
                />
            </div>
            <CategoryCard />
            <QuickCardContainer
                imgIds={quickCardIds}
                numberOfCard="3"
            />
        </div>
    )
}