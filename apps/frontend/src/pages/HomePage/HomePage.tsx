import { Image } from "@/components/atomic/atoms"
import { CategoryCard } from "@/components/atomic/organisms"

const bannerId = "banner_xzynir"

export function HomePage() {
    return (
        <div className="flex flex-col py-4 gap-4">
            <div className="w-full rounded-lg overflow-hidden">
                <Image
                    publicId={bannerId}
                />
            </div>
            <CategoryCard />
        </div>
    )
}