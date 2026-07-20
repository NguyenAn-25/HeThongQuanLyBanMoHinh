import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

interface SelectionButtonProps {
    text: string
    isActive?: boolean
    className?: string
    onClick: () => void
}

export function SelectionButton({ text, isActive = false, className, onClick}: SelectionButtonProps) {
    return (
        <div className={`relative ${className}`} onClick={onClick}>
            <Button
                text={text}
                className={`border border-border-main rounded-lg py-3 px-3 ${isActive && "border-primary"}`}
            />
            <div className={`absolute bottom-0 right-0 ${!isActive && "hidden"}`}>
                <div className="border-b-16 border-l-16 border-b-primary border-l-transparent">
                </div>
                <div className='w-3 h-3 z-50 text-white absolute bottom-0 right-0'>
                    <Icon
                        name="Tick"
                    />
                </div>
            </div>
        </div>
    )
}