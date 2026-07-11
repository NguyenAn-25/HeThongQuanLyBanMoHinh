import { Icon } from "@/components/atomic/atoms"

export interface ButtonIconProps {
    iconPosition: "left" | "right",
    iconName: string,
    size?: keyof typeof SIZE_CLASSES,
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    className?: string,
    buttonIconProps?: ButtonIconProps,
}

const SIZE_CLASSES = {
    xs: 'w-5',
    sm: 'w-7',
    md: 'w-10',
    lg: 'w-12',
    xl: 'w-15',
    '2xl': 'w-24',
    '3xl': 'w-30',
};

export const Button = (
    {
        type = 'button',
        text = 'default',
        buttonIconProps,
        className = '',
        ...props
    }: ButtonProps
) => {
    const iconSize = buttonIconProps?.size ?? "xs";
    const directionClass = buttonIconProps?.iconPosition === 'left' ? 'flex-row-reverse' : 'flex-row';
    return (
        <button type={type} className={`cursor-pointer flex items-center ${directionClass} ${className}`} {...props}>
            <div>{text}</div>
            {buttonIconProps &&
                <div className={`${SIZE_CLASSES[iconSize]}`}>
                    <Icon name={buttonIconProps.iconName}/>
                </div>
            }
        </button>
    )
}