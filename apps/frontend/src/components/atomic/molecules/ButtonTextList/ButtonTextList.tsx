import { Button, type ButtonIconProps } from "@/components/atomic/atoms";

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
    const iconProps: ButtonIconProps = {
        iconName: "DropDown",
        iconPosition: 'right',
    }
    const childrenIconProps: ButtonIconProps = {
        iconName: "RightList",
        iconPosition: 'right',
    }
    return (
        <div className="group/lvl1 relative cursor-pointer">
            <Button text={text} buttonIconProps={iconProps} className={`hover:text-secondary ${className}`} />
            <div className="top-full left-0 absolute hidden group-hover/lvl1:flex flex-col bg-card-bg w-max outline-1 outline-primary rounded-md">
                {selections.map(selection => {
                    return (
                        <div className="group/lvl2 relative cursor-pointer w-full">
                            <Button text={selection.text} buttonIconProps={selection.childrens && childrenIconProps} className="px-3 hover:text-primary w-full rounded-md py-1 justify-between" />
                            {selection.childrens &&
                                <div>
                                    <div className="top-0 left-full absolute hidden group-hover/lvl2:flex">
                                        <div className="h-full w-1"></div>
                                        <div className="flex flex-col bg-card-bg w-max outline-1 outline-primary rounded-md">
                                            {selection.childrens.map(child => (
                                                <Button text={child.text} className="px-3 hover:text-primary w-full rounded-md py-1" />
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