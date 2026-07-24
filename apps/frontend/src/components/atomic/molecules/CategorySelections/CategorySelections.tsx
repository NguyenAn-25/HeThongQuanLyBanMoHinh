import { useState, useCallback } from 'react';
import { Button } from '../../atoms/Button/Button';
import { SelectionButton } from '../../atoms';
import { useClickOutside } from '@/hooks/UseClickOutside';

interface PropertySelection {
    id: number,
    name: string,
}

export interface CategorySet {
    categoryId: number
    categoryName: string
    selections: PropertySelection[]
    selectedProp: PropertySelection
}

interface CategorySelectionsProps {
    sets: CategorySet[],
    className?: string
}

interface CategorySetState {
    categoryId: number,
    selectedProp: PropertySelection
}

export function CategorySelections({
    sets,
    className
}: CategorySelectionsProps) {
    const categoryDefaultState = useCallback(() => (
        sets.map(set => ({
            categoryId: set.categoryId,
            selectedProp: set.selectedProp
        }))
    ), [sets]);

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(prev => !prev)
    }
    const dropdownRef = useClickOutside<HTMLDivElement>(() => {
        setIsOpen(false);
    });

    const [categoryState, setCategoryState] = useState<CategorySetState[]>(categoryDefaultState);

    const handleSelect = (categoryId: number, selectionProp: PropertySelection) => {
        const existSet = categoryState.find((set) => set.categoryId === categoryId)
        if (existSet) {
            const newSet = { ...existSet, selectedProp: selectionProp }
            const newState = categoryState.map(set => set.categoryId === categoryId ? newSet : set)
            setCategoryState(newState)
        }
    }

    const [displayCategory, setDisplayCategory] = useState<string[]>(
        sets.map(set => (set.selectedProp.name))
    );

    const handleClickCloseButton = () => {
        setIsOpen(false)
    }

    const handleClickSubmitButton = () => {
        setIsOpen(false)
        setDisplayCategory(categoryState.map(set => set.selectedProp.name))
    }

    return (
        <div ref={dropdownRef} className={`relative flex flex-col ${className}`}>
            <div className='text-text-muted'>
                <Button
                    text="Phân loại hàng:"
                    iconName={isOpen ? `ToggleDropDown` : 'DropDown'}
                    iconPosition={"right"}
                    iconSize='xs'
                    className='text-left'
                    onClick={() => handleClick()}
                />
                <div>
                    {displayCategory.join(", ")}
                </div>
            </div>
            {
                isOpen &&
                <div className='absolute top-full bg-white z-50 p-4 rounded-lg border border-border-main'>
                    <div className='flex flex-col gap-2'>
                        {
                            sets.map((set, index) => (
                                <div
                                    key={index}
                                    className='flex gap-2 items-center'
                                >
                                    <div className='text-nowrap'>
                                        {set.categoryName}:
                                    </div>
                                    {
                                        set.selections.map((selection) => {
                                            const existCategory = categoryState.find(item => item.categoryId === set.categoryId)
                                            const isCheck = existCategory?.selectedProp.id === selection.id
                                            return (
                                                <SelectionButton
                                                    key={selection.id}
                                                    text={selection.name}
                                                    className='text-nowrap'
                                                    onClick={() => handleSelect(set.categoryId, selection)}
                                                    isActive={isCheck}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            ))
                        }
                        <div className='flex justify-end gap-1'>
                            <Button
                                text="Trở Lại"
                                className='rounded-sm hover:bg-white-hover p-2'
                                onClick={() => handleClickCloseButton()}
                            />
                            <Button
                                text="Xác Nhận"
                                className='bg-primary text-white rounded-sm hover:bg-primary-hover p-2'
                                onClick={() => handleClickSubmitButton()}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}