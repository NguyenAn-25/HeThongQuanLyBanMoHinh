import { ImageButton } from "@/components/atomic/molecules"
import { useNavigate } from "react-router-dom"

interface CategoryProps {
    text: string,
    path: string,
    publicId: string
}

interface CategoriesContainerProps {
    listCategories: CategoryProps[]
}

export function CategoriesContainer({ listCategories }: CategoriesContainerProps) {
    const navigate = useNavigate();
    const handleClickCategory = (path: string, displayName: string) => {
        navigate(`category/${path}?displayName=${encodeURIComponent(displayName)}`)
    }
    return (
        <div className="w-full flex gap-4 overflow-x-auto sm:grid sm:grid-cols-12 sm:justify-items-center sm:gap-y-8 py-4">
            {
                listCategories.map((category) => (
                    <ImageButton
                        key={category.path}
                        publicId={category.publicId}
                        text={category.text}
                        imgSize="xl"
                        className="w-16 sm:col-span-4 lg:col-span-2 text-sm font-light text-center"
                        imgClassName= "rounded-2xl overflow-hidden"
                        textClassName= "line-clamp-2"
                        onClick={() => handleClickCategory(category.path, category.text)}
                    />
                ))
            }
        </div>
    )
}