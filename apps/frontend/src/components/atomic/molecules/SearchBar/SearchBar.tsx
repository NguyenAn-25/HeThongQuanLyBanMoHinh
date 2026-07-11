import { cva, type VariantProps } from "class-variance-authority";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { TextBox, Icon } from "@/components/atomic/atoms";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
const searchBarVariants = cva(
    "flex w-full focus-within:border-primary bg-card-bg rounded px-2 items-center",
    {
        variants: {
            variant: {
                normal: "border-2 border-border-main",
                borderless: ""
            }
        },
        defaultVariants: {
            variant: "normal"
        }
    }
);

interface SearchBarProps extends VariantProps<typeof searchBarVariants> {
    placeholder?: string,
    className?: string
}

export function SearchBar({
    variant,
    placeholder,
    className
}: SearchBarProps) {
    return <div className={cn(searchBarVariants({ variant }), className)}>
        <TextBox
            placeholder={placeholder}
            variant={"borderless"}
        />
        <div className="size-10 cursor-pointer">
            <Icon
                name="Search"
            />
        </div>

    </div>
}