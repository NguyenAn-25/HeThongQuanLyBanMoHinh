import React, { useState } from "react";
import { Icon } from "../Icon/Icon";

const shapeVariants = {
    square: "",
    circle: "rounded-full"
}

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text?: string,
    shape?: keyof typeof shapeVariants,
    className?: string,
    onCheck?: (id: number) => void,
    checkBoxId?: number
}

export function CheckBox({
    text="",
    shape = "square",
    className,
    checked = false,
    checkBoxId = 0,
    onCheck
}: CheckBoxProps) {

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        onCheck && onCheck(checkBoxId);
    }

    return (
        <label className={`group flex gap-2 items-center cursor-pointer ${className}`}>
            {/* Ẩn checkbox gốc */}
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => handleCheck(e)}
                className="sr-only"
            />

            <div
                className={`w-6 h-6 border flex items-center justify-center p-1
                    ${checked
                        ? 'bg-primary border-primary'
                        : 'border-border-main bg-white'
                    } ${shapeVariants[shape]}`}
            >
                <Icon
                    className={`group-hover:flex ${checked ? 'flex text-white' : 'hidden text-gray-light'}`}
                    name="Tick"
                />
            </div>
            <div>{text}</div>
        </label>
    )
}