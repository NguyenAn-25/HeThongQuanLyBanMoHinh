import { Icon } from "../Icon/Icon"

const directionVariants = {
    right: "",
    left: "rotate-180"
}

interface ScrollButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    direction?: keyof typeof directionVariants,
    className?: string
}

export function ScrollButton({
    direction = "right",
    className,
    ...props
}: ScrollButtonProps) {
    return (
        <button
            className={`w-full aspect-1/2 rounded-l-full bg-card-bg/50 cursor-pointer ${directionVariants[direction]} ${className}`}
            {...props}
        >
            <Icon
                name="ArrowHeadRight"
            />
        </button>
    )
}