import { Icon } from "@/components/atomic/atoms"

export interface ButtonIconProps {
    iconPosition: "left" | "right",
    iconName: string,
    size?: number
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    fgColor?: string,
    bgColor?: string
    hoverbgColor?: string,
    hoverfgColor?: string,
    className?: string,
    buttonIconProps?: ButtonIconProps,
}

export const Button = (
    {
        type = 'button',
        text = 'default',
        buttonIconProps,
        fgColor = 'text-main',
        bgColor = '',
        className = ''
    }: ButtonProps
) => {
    const iconSize = buttonIconProps?.size ?? 5
    const directionClass = buttonIconProps?.iconPosition === 'left' ? 'flex-row-reverse' : 'flex-row';
    return (
        <button type={type} className={`cursor-pointer flex items-center ${directionClass} bg-${bgColor} fg-${fgColor} ${className}`}>
            <div>{text}</div>
            {buttonIconProps &&
                <div className={`size-${iconSize}`}>
                    <Icon name={buttonIconProps.iconName} />
                </div>
            }
        </button>
    )
}