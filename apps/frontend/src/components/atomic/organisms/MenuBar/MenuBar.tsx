import { Button } from '@/components/atomic/atoms';

const MenuButtons = [
    { text: "Trang chủ", iconName: "Home" },
    { text: "Danh mục", iconName: "List" },
    { text: "Liên hệ", iconName: "Phone" },
    { text: "Tài khoản", iconName: "User" },
    { text: "Giỏ hàng", iconName: "Cart" },
]

interface MenuBarProps {
    className?: string
}

export function MenuBar({ className }: MenuBarProps) {
    return (
        <div className={`w-full py-2 px-6 bg-card-bg flex justify-between ${className} rounded-t-xl`}>
            {MenuButtons.map((menuButton, index) => (
                <Button 
                    text={menuButton.text}
                    iconName={menuButton.iconName}
                    iconPosition={'top'}
                    className='text-xs hover:text-primary'
                />
            ))}
        </div>
    )
}