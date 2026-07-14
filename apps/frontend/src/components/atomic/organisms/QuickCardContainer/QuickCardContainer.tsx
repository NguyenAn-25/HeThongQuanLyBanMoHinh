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
        <div className={`w-full flex gap-4 overflow-x-auto lg:grid-cols-12`}>
            {
                imgIds.map((id, index) => (
                    <div className={`w-96 shrink-0 lg:shrink lg:w-full lg:${numberOfCardVariant[numberOfCard]}`}>
                        <QuickCard
                            publicId={id}
                        />
                    </div>
                ))
            }
        </div>
    )
}