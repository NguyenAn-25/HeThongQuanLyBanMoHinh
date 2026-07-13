import { ImageButton } from "@/components/atomic/molecules"

interface CategoryContainerProps {
    imgIds: string[]
}

export function CategoryContainer({ imgIds }: CategoryContainerProps) {
    return (
        <div className="w-full flex gap-4 overflow-x-auto sm:grid sm:grid-cols-12 sm:justify-items-center sm:gap-y-8 py-4">
            {
                imgIds.map((id, index) => (
                    <ImageButton
                        publicId={id}
                        text="Hatsune Miku"
                        imgSize="xl"
                        className="w-16 sm:col-span-4 lg:col-span-2 text-sm font-light text-center"
                        imgClassName= "rounded-2xl overflow-hidden"
                    />
                ))
            }
        </div>
    )
}