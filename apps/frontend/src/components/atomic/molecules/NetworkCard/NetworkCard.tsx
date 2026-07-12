import { LINKS } from "@/utils/constants"
import { Button } from "@/components/atomic/atoms"
interface NetworkCard {
    className?: string
}

export function NetworkCard({ className }: NetworkCard) {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <div className='text-lg xl:text-xl font-medium'>Kết nối với chúng tôi</div>
            <div className="flex gap-2">
                {LINKS.map((item, index) => (
                    <Button
                        text=""
                        iconName={item.name}
                        iconSize="md"
                    />
                ))}
            </div>
        </div>
    )
}