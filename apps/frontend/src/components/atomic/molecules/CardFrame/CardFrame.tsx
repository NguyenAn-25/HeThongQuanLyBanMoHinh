interface CardFrameProps {
    title: string
    children: React.ReactNode
    className?: string
}

export function CardFrame({
    title,
    children,
    className
}: CardFrameProps
) {
    return (
        <div className={`flex flex-col rounded-lg bg-card-bg ${className}`}>
            <div className="text-xl font-medium p-4">{title}</div>
            {children}
        </div>
    )
}