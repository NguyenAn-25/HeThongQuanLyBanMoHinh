import { SupportInfo } from "@/utils/constants"
import { Image } from '../../atoms/Image/Image';

export function SupportBox() {
    return (
        <div className="flex p-5 gap-4 text-lg font-medium rounded-lg bg-light-orange">
            <div className="w-12">
                <Image
                    publicId={SupportInfo.publicId}
                />
            </div>
            <div className="flex flex-col">
                <div className="text-dark-yellow">
                    Hỗ trợ mua hàng
                </div>
                <div className="text-base-orange text-xl font-semibold">
                    {SupportInfo.phoneNum}
                </div>
            </div>
        </div>
    )
}