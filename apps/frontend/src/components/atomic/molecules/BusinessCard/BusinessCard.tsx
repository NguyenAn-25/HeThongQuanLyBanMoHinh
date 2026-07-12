import { Business } from '@/utils/constants'
import { Icon, Image } from '@/components/atomic/atoms'
import BusinessMark from '@/assets/png/BusinessMark.png';
import React from 'react';

interface BusinessCardProps {
    className?: string
}

export function BusinessCard({ className }: BusinessCardProps) {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <div className='flex gap-8'>
                <div className='w-24'>
                    <Icon
                        name='MainLogo'
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='text-lg xl:text-xl font-medium'>HỘ KINH DOANH NA FIGURE</div>
                    <ul className='flex flex-col gap-1 text-sm xl:text-base font-light list-disc list-inside'>
                        <li>
                            {Business.info.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {/* Thêm thẻ <br /> sau mỗi dòng, trừ dòng cuối cùng */}
                                    {index < Business.info.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </li>
                        <li>MST: {Business.taxCode}</li>
                    </ul>
                </div>
            </div>
            <div className='w-58'>
                <Image
                    src={BusinessMark}
                />
            </div>
        </div>
    )
}