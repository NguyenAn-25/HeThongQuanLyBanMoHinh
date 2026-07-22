import { CheckBox } from "../../atoms"

export interface Selection {
    checkBoxId: number
    text: string
}

export interface SearchFilter {
    title: string,
    categoryId: number,
    selections: Selection[],
    listSelected: number[],
    onChange: (categoryId: number, checkBoxId: number) => void
}

export function SearchFilter({
    title,
    categoryId,
    selections,
    listSelected = [],
    onChange,

}: SearchFilter) {

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="text-lg font-semibold">
                {title}
            </div>
            <div className="h-44 pr-2 overflow-auto flex flex-col">
                {selections.map((selection) => {
                    const isChecked = listSelected.some(item => item === selection.checkBoxId)
                    return (
                        <div className="shrink-0 h-1/5">
                            <CheckBox
                                key={selection.checkBoxId}
                                checkBoxId={selection.checkBoxId}
                                text={selection.text}
                                checked={isChecked}
                                onCheck={() => onChange(categoryId, selection.checkBoxId)}
                                shape="circle"
                                className="hover:text-primary"
                            />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}