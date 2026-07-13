import { CardFrame, CategoryContainer } from "@/components/atomic/molecules";

const mockImgIds = [
    "category-hatsune_miku_wa5h8n",
    "category_the_quintessential_quintuplets_ruqcmu",
    "category-hatsune_miku_wa5h8n",
    "category_the_quintessential_quintuplets_ruqcmu",
    "category-hatsune_miku_wa5h8n",
    "category_the_quintessential_quintuplets_ruqcmu",
    "category-hatsune_miku_wa5h8n",
    "category_the_quintessential_quintuplets_ruqcmu",
    "category-hatsune_miku_wa5h8n",
    "category_the_quintessential_quintuplets_ruqcmu",
    "category-hatsune_miku_wa5h8n",
    "category_the_quintessential_quintuplets_ruqcmu",
]

export function CategoryCard() {
    return (
        <CardFrame title="SERIES NỔI BẬT">
            <CategoryContainer
                imgIds={mockImgIds}
            />
        </CardFrame>
    )
}