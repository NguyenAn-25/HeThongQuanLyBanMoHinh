import { useState } from "react"
import { Button } from "../../atoms"

interface DropDownMenuItem {
    key: string,
    name: string
}

interface DropDownMenuProps {
    items: DropDownMenuItem[]
    className?: string,
    onClickItem: (key: string) => void
}

export function DropDownMenu({
    items,
    className,
    onClickItem
}: DropDownMenuProps) {
    return (
        <div className={`bg-white flex flex-col border border-primary p-1 rounded-md ${className}`}>
            {items.map((item) => (
                <Button
                    key={item.key}
                    text={item.name}
                    className="text-nowrap py-1 px-3 hover:text-primary"
                    onClick={() => onClickItem(item.key)}
                />
            ))}
        </div>
    )
}