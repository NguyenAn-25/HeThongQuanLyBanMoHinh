import { Icon } from "@/components/atomic/atoms"
import { cva, type VariantProps } from "class-variance-authority";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

//thiết kế variant cho size + vị trí của icon
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
const buttonVariants = cva(
    "cursor-pointer flex items-center",
    {
        variants: {
            iconPosition: {
                left: "flex-row",
                right: "flex-row-reverse",
                top: "flex-col",
                bottom: "flex-col-reverse"
            }
        },
        defaultVariants: {
            iconPosition: "left"
        }
    }
);

const iconSizeVariants = {
    xs: 'w-5',
    sm: 'w-7',
    md: 'w-10',
    lg: 'w-12',
    xl: 'w-15',
    '2xl': 'w-24',
    '3xl': 'w-30',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    text?: string,
    className?: string,
    iconName?: string,
    iconSize?: keyof typeof iconSizeVariants;
}

export const Button = (
    {
        type = 'button',
        text = 'default',
        iconName,
        iconPosition,
        iconSize = 'xs',
        className = '',
        ...props
    }: ButtonProps
) => {
    return (
        <button type={type} className={cn(buttonVariants({ iconPosition }), className)} {...props}>
            {iconName &&
                <div className={iconSizeVariants[iconSize]}>
                    <Icon name={iconName} />
                </div>
            }
            <div>{text}</div>
        </button>
    )
}