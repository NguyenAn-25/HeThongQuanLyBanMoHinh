import { QuickCard } from "@/components/atomic/molecules"

const numberOfCardVariant = {
    '3': 'col-span-4',
    '4': 'col-span-3'
}

interface QuickCardContainerProps {
    numberOfCard?: keyof typeof numberOfCardVariant
    imgIds: string[]
}

export function QuickCardContainer({
    numberOfCard = '3',
    imgIds
}: QuickCardContainerProps) {
    return (
        <div className={`w-full flex gap-4 ${numberOfCardVariant[numberOfCard]}`}>
            {
                imgIds.map((id, index) => (
                    <QuickCard
                        publicId={id}
                    />
                ))
            }
        </div>
    )
}