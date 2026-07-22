import { useEffect, useMemo, useState } from "react"
import { ItemTag } from '../../atoms/ItemTag/ItemTag';
import { Button } from '../../atoms/Button/Button';

interface SearchListSelectedProps {
    items: SetSelected[]
    onChange: (categoryIndex: number, checkBoxId: number) => void
}

interface SetSelectedItem {
    checkBoxId: number,
    text: string
}

interface SetSelected {
    categoryIndex: number,
    checkedItems: SetSelectedItem[],
}

export function SearchListSelected({
    items,
    onChange
}: SearchListSelectedProps) {

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between">
                <div>LỌC THEO</div>
                <Button
                    text="Xóa tất cả"
                    className="hover:text-light-red"
                />
            </div>
            <div className="flex flex-col gap-2">
                {
                    items.map(set => (
                        <div className="flex gap-1 flex-wrap">
                            {
                                set.checkedItems.map((item) => (
                                    <ItemTag
                                        text={item.text}
                                        onClick ={() => onChange(set.categoryIndex, item.checkBoxId)}
                                    />
                                ))
                            }

                        </div>
                    ))
                }
            </div>
        </div>
    )
}