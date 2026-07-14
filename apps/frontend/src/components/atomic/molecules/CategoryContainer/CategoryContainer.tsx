import { ImageButton } from "@/components/atomic/molecules"

interface CategryProps {
    text: string,
    publicId: string
}

interface CategoryContainerProps {
    listCategories: CategryProps[]
}

export function CategoryContainer({ listCategories }: CategoryContainerProps) {
    return (
        <div className="w-full flex gap-4 overflow-x-auto sm:grid sm:grid-cols-12 sm:justify-items-center sm:gap-y-8 py-4">
            {
                listCategories.map((category, index) => (
                    <ImageButton
                        publicId={category.publicId}
                        text={category.text}
                        imgSize="xl"
                        className="w-16 sm:col-span-4 lg:col-span-2 text-sm font-light text-center"
                        imgClassName= "rounded-2xl overflow-hidden"
                        textClassName= "line-clamp-2"
                    />
                ))
            }
        </div>
    )
}