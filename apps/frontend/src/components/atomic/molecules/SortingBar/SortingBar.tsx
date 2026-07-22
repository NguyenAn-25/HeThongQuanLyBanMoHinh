import { useState } from 'react';
import { RadioBox } from '../../atoms/RadioBox/RadioBox';

const SortSelections = [
    {
        ratioId: 1,
        text: "A → Z"
    },
    {
        ratioId: 2,
        text: "Z → A"
    },
    {
        ratioId: 3,
        text: "Giá tăng dần"
    },
    {
        ratioId: 4,
        text: "Giá giảm dần"
    },
    {
        ratioId: 5,
        text: "Hàng mới nhất"
    },
]

export function SortingBar() {
    const [selectedId, setSelectedId] = useState<number>(0)
    const handleCheck = (id: number) => {
        setSelectedId(id)
    }
    return (
        <div className="flex gap-2 items-center">
            <div className="font-semibold text-nowrap">
                Sắp xếp:
            </div>
            <div className="flex gap-2 overflow-auto py-2">
                {
                    SortSelections.map((selection) => {
                        const isChecked = selection.ratioId === selectedId
                        return(
                            <RadioBox
                                radioId={selection.ratioId}
                                text={selection.text}
                                className='text-nowrap'
                                checked={isChecked}
                                onCheck={(id) => handleCheck(id)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}