import { Image } from '@/components/atomic/atoms';

interface QuickCardProps {
    publicId: string
    className?: string
}

export function QuickCard({ publicId, className }: QuickCardProps) {
    return (
        <div className={`relative group w-full rounded-lg overflow-hidden cursor-pointer ${className}`}>
            <div className="absolute inset-x-0 -top-40 h-20 bg-linear-to-b from-white/20 to-transparent blur-sm transition-all duration-700 ease-out group-hover:top-full"></div>
            <Image
                publicId={publicId}
            />
        </div>
    )
}