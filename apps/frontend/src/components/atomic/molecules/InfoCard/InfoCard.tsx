import { STORE_ADDRESS, EMAIL, HOTLINE } from '@/utils/constants'

interface InfoCardProps {
    className?: string
}

export function InfoCard({ className }: InfoCardProps) {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <div className='text-lg xl:text-xl font-medium'>Thông tin liên hệ</div>
            <div className='flex flex-col gap-1 text-sm xl:text-base font-light'>
                <p><strong className="font-medium">Địa chỉ:</strong> {STORE_ADDRESS}</p>
                <p><strong className="font-medium">Email:</strong> {EMAIL}</p>
                <p><strong className="font-medium">Hotline:</strong> {HOTLINE}</p>
            </div>
        </div>
    )
}