import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const tagVariants = cva(
    "flex items-center justify-center rounded-full border-white ring text-white text-nowrap",
    {
        variants: {
            size: {
                small: "w-16 py-0.25 text-[0.5rem] font-bold border-2",
                medium: "w-36 py-1 text-base font-bold border-4",
            },
            color: {
                primary: "bg-primary ring-primary",
                secondary: "bg-secondary ring-secondary",
            }
        },
        defaultVariants: {
            size: "small",
            color: "primary"
        }
    }
);

interface TagProps extends VariantProps<typeof tagVariants> {
    text: string,
    className?: string
}

export function Tag({
    text,
    className,
    size,
    color
}: TagProps) {
    return (
        <div className={cn(tagVariants({ size, color }), className)}>
            {text}
        </div>
    )
}