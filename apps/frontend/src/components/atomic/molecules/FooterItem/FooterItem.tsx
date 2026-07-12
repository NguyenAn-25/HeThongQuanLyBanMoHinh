import { Button } from '@/components/atomic/atoms'
interface FooterItemProps {
    title: string,
    links: string[],
    className?: string
}

export function FooterItem({
    title,
    links,
    className
}: FooterItemProps) {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <div className='text-lg xl:text-xl font-medium'>{title}</div>
            <div className='flex flex-col gap-1'>
                {links.map((link, index) => (
                    <Button
                        text={link}
                        className='hover:text-primary text-sm xl:text-base font-light'
                    />
                ))}
            </div>

        </div>
    )
}