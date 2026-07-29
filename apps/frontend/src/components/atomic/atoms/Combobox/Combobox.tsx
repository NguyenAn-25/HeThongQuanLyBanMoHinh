import { useState } from "react";
import { Button } from "../Button/Button"
import { useClickOutside } from "@/hooks/UseClickOutside";

export interface ComboboxItem {
    id: number,
    text: string
}

interface ComboboxProps {
    items: ComboboxItem[]
    selectedItem?: ComboboxItem
    className?: string
    onSelect: (item: ComboboxItem) => void
}

export function Combobox({
    items,
    selectedItem = items[0],
    className,
    onSelect
}: ComboboxProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useClickOutside<HTMLDivElement>(() => {
        setIsOpen(false);
    });

    const handleClickBox = () => {
        setIsOpen(prev => !prev);
    }

    const handleSelect = (item: ComboboxItem) => {
        setIsOpen(prev => !prev);
        onSelect(item);
    }

    return (
        <div ref={dropdownRef} className={`w-full h-full relative ${className}`}>
            <Button
                text={selectedItem.text}
                iconName={isOpen ? `ToggleDropDown` : 'DropDown'}
                iconPosition={"right"}
                className="w-full h-full p-1 bg-white border-2 border-border-main rounded-sm flex cursor-pointer justify-between text-nowrap focus-within:border-primary "
                onClick={() => handleClickBox()}
            />
            {
                isOpen && (
                    <div className="absolute top-full left-0 right-0 flex flex-col bg-white overflow-auto">
                        {
                            items.map((item) => (
                                <Button
                                    text={item.text}
                                    key={item.id}
                                    className="p-1 hover:bg-white-hover text-nowrap"
                                    onClick={() => handleSelect(item)}
                                >
                                    {item.text}
                                </Button>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}