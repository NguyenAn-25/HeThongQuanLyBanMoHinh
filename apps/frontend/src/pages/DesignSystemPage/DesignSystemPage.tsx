import { Image } from "@/components/atomic/atoms";
import { Icon } from "@/components/atomic/atoms/Icon/Icon";

export function DesignSystemPage() {
    return (
        <div className="w-xs h-xs">
            <Image
                src='/img/Default.png'
            />
            <Icon
                name="MainLogo"
            />
        </div>
    )
}