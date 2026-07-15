import { Image } from '../../atoms/Image/Image';
import { Icon } from '../../atoms/Icon/Icon';

export interface VideoCardProps {
    publicId: string,
    text: string,
    className?: string
}

export function VideoCard({
    publicId,
    text,
    className
}: VideoCardProps) {
    return (
        <div className={`w-full flex flex-col ${className}`}>
            <div className="group relative w-full cursor-pointer">

                {/* 2. Lớp phủ transparent che mờ xung quanh */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out" />

                {/* 3. Hình chữ nhật thu nhỏ lại và hiện rõ dần */}
                <div className="absolute inset-6 border border-card-bg
                        opacity-0 scale-125 transform
                        group-hover:opacity-100 group-hover:scale-100 
                        transition-all duration-500 ease-out
                        flex justify-center items-center
                        " >
                    <div className='w-20 border-2 border-text-main rounded-full overflow-hidden bg-primary p-1'>
                        <Icon
                            name='MainLogo'
                        />
                    </div>
                </div>

                <Image
                    aspect='video'
                    publicId={publicId}
                />
            </div>
            <div
                className='truncate text-lg font-medium hover:text-primary cursor-pointer transition-all duration-300'
                title={text}
            >
                {text}
            </div>
        </div>
    )
}