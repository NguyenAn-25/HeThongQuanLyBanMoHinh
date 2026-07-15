import { Button } from '@/components/atomic/atoms';
import { STORE_NAME } from '@/utils/constants';
import { SearchBar, ButtonTextList, type ButtonSelectionL1 } from '@/components/atomic/molecules';
import { HOTLINE } from '@/utils/constants'

interface MenuItem {
    text: string,
    selections?: ButtonSelectionL1[]
}

const Menu: MenuItem[] = [
    { text: "Trang chủ" },
    {
        text: "Mô hình / Figure",
        selections: [
            {
                text: "Mô hình PVC",
                childrens: [{ text: "GamePrize Figure" }, { text: "Scale Figure" }, { text: "Nendoroid" }, { text: "Pop Up Parade" }, { text: "Figma" }, { text: "NSFW" }]
            },
            {
                text: "Mô hình Resin"
            },
            {
                text: "Hàng đặt trước",
                childrens: [{ text: "Phát hành 2025" }, { text: "Phát hành 2026" }, { text: "Phát hành 2027" }]
            },
            {
                text: "Hãng sản xuất",
                childrens: [{ text: "Good Smile Company" }, { text: "Bandai" }, { text: "Taito" }]
            },
            {
                text: "Sản phẩm nổi bật"
            },
        ]
    },
    { text: "Sản phẩm khác" },
    { text: "Khuyến mãi" },
    { text: "Tin tức" },
    { text: "Liên hệ" },
    { text: "Khác" },
]

export function Header() {
    return (
        <div className="w-full bg-primary fixed lg:static z-10">
            <div className='w-full sm:w-130 md:w-176 lg:w-240 xl:w-280 2xl:w-336 flex gap-4 lg:grid lg:grid-cols-12 lg:gap-8 lg:pt-2 items-center mx-auto px-2'>
                {/* Logo */}
                <Button
                    text={STORE_NAME}
                    iconName='MainLogo'
                    iconSize='2xl'
                    className='text-nowrap text-xs lg:text-lg xl:text-xl 2xl:text-2xl w-28 lg:w-full font-bold col-span-2'
                />
                <div className="flex flex-col w-full col-span-10 gap-4">
                    <div className='flex w-full gap-8'>
                        {/* SearchBar */}
                        <SearchBar
                            variant={'borderless'}
                        />
                        {/* Util */}
                        <Button
                            text={`Hotline: \n ${HOTLINE}`}
                            iconName='Phone'
                            iconSize='md'
                            className='hidden lg:flex text-left gap-2 hover:text-secondary font-medium'
                        />
                        <div className='hidden lg:flex gap-2'>
                            <Button
                                text=''
                                iconName='User'
                                iconSize='sm'
                                className='hover:text-secondary'
                            />
                            <Button
                                text=''
                                iconName='Cart'
                                iconSize='sm'
                                className='hover:text-secondary'
                            />
                        </div>
                    </div>
                    {/* Menu */}
                    <div className='hidden lg:flex gap-4 font-medium'>
                        {Menu.map((item, index) => (
                            item.selections ?
                                <ButtonTextList
                                    key={index}
                                    text={item.text}
                                    selections={item.selections}
                                    className='px-2 py-3'
                                />
                                :
                                <Button
                                    key={index}
                                    text={item.text}
                                    className='px-2 py-3 hover:text-secondary'
                                />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}