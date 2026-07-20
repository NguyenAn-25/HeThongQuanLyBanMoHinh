import { useState } from 'react';
import { SelectionButton } from '../../atoms';
const titleWitdhVariants = {
    md: "w-32",
    lg: "w-48"
}

interface CategorySelectorProps {
    text: string,
    selections: string[],
    titleWidth?: keyof typeof titleWitdhVariants
}
export function CategorySelector({
    text,
    selections,
    titleWidth = 'md'
}: CategorySelectorProps) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
    }
    return (
        <div className="flex items-center">
            <div className={`text-base font-medium ${titleWitdhVariants[titleWidth]}`}>{text}</div>
            <div className="flex gap-2">
                {
                    selections.map((selection, index) => {
                        const isActive = index === selectedIndex;
                        return (
                            <SelectionButton
                                key={index}
                                text={selection}
                                isActive={isActive}
                                className='text-base font-light'
                                onClick={() => handleSelect(index)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}