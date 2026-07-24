import { Button } from "@/components/atomic/atoms";

export interface ButtonSelectionL2 {
    text: string,
}

export interface ButtonSelectionL1 {
    text: string,
    childrens?: ButtonSelectionL2[]
}

interface ButtonTextListProps {
    text: string,
    selections: ButtonSelectionL1[],
    className?: string
}

export function ButtonTextList({
    text,
    selections,
    className = ''
}: ButtonTextListProps) {
    return (
        <div className="group/lvl1 relative cursor-pointer">
            <Button text={text} iconName="DropDown" iconPosition="right" className={`hover:text-secondary ${className}`} />
            <div className="top-full left-0 absolute hidden group-hover/lvl1:flex flex-col bg-card-bg w-max outline-1 outline-primary rounded-md z-100">
                {selections.map((selection, index) => {
                    return (
                        <div key={index} className="group/lvl2 relative cursor-pointer w-full">
                            <Button text={selection.text} iconName={selection.childrens && "RightList"} iconPosition={selection.childrens && "right"} className="px-3 hover:text-primary w-full rounded-md py-1 justify-between" />
                            {selection.childrens &&
                                <div>
                                    <div className="top-0 left-full absolute hidden group-hover/lvl2:flex z-100">
                                        <div className="h-full w-1"></div>
                                        <div className="flex flex-col bg-card-bg w-max outline-1 outline-primary rounded-md">
                                            {selection.childrens.map((child, index) => (
                                                <Button key={index} text={child.text} className="px-3 hover:text-primary w-full rounded-md py-1" />
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}