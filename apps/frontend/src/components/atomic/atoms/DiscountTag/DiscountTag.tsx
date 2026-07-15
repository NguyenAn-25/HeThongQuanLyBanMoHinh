interface DiscountTagProps {
    percent: string | number,
    className?: string
}

export function DiscountTag({
    percent,
    className
}: DiscountTagProps) {
    return (
        <div className={`flex justify-center py-1 w-12 bg-secondary rounded-md font-bold text-xs text-white ${className}`}>
            -{percent}%
        </div>
    )
}