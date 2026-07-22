interface RadioBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string,
    radioId: number,
    onCheck?: (id: number) => void,
    className?: string
}

export function RadioBox({
    text,
    checked,
    radioId,
    onCheck,
    className,
    ...props
}: RadioBoxProps) {

    const handleCheck = () => {
        onCheck && onCheck(radioId);
    }

    return (
        <label className={`group flex gap-2 items-center cursor-pointer ${className}`}>
            {/* Ẩn checkbox gốc */}
            <input
                type="radio"
                checked={checked}
                onChange={() => handleCheck()}
                className="sr-only"
                {...props}
            />

            <div
                className={`w-4 aspect-square border flex items-center justify-center p-0.5 rounded-full bg-white
                    ${checked
                        ? 'border-primary'
                        : 'border-border-main'
                    }`}
            >
                {
                    checked &&
                    <div className={`w-full aspect-square bg-primary rounded-full`}>
                    </div>
                }
            </div>
            <div>{text}</div>
        </label>
    )
}