import { Icon } from "@/components/atomic/atoms"

export interface ButtonIconProps {
    iconPosition: "left" | "right",
    iconName: string,
    size?: keyof typeof SIZE_CLASSES
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    className?: string,
    buttonIconProps?: ButtonIconProps,
}

const SIZE_CLASSES = {
  small: 'w-5 h-5',
  medium: 'w-6 h-6',
  large: 'w-7 h-7',
};

export const Button = (
    {
        type = 'button',
        text = 'default',
        buttonIconProps,
        className = ''
    }: ButtonProps
) => {
    const iconSize = buttonIconProps?.size ?? "small";
    const directionClass = buttonIconProps?.iconPosition === 'left' ? 'flex-row-reverse' : 'flex-row';
    return (
        <button type={type} className={`cursor-pointer flex items-center ${directionClass} ${className}`}>
            <div>{text}</div>
            {buttonIconProps &&
                <div className={`${SIZE_CLASSES[iconSize]}`}>
                    <Icon name={buttonIconProps.iconName} />
                </div>
            }
        </button>
    )
}