import { Button } from '@/components/atomic/atoms';
import { STORE_NAME } from '@/utils/constants';
import { SearchBar, ButtonTextList, type ButtonSelectionL1 } from '@/components/atomic/molecules';
import { HOTLINE } from '@/utils/constants'
import { useNavigate } from 'react-router-dom';

type MenuItemNames = "home" | "figure" | "other_product" | "promotion" | "news" | "contact" | "other";

interface MenuItem {
    text: string,
    key: MenuItemNames,
    selections?: ButtonSelectionL1[]
}

const Menu: MenuItem[] = [
    {
        text: "Trang chủ",
        key: 'home'
    },
    {
        text: "Mô hình / Figure",
        key: 'figure',
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
    {
        text: "Sản phẩm khác",
        key: "other_product",
    },
    {
        text: "Khuyến mãi",
        key: "promotion",
    },
    {
        text: "Tin tức",
        key: "news",
    },
    {
        text: "Liên hệ",
        key: "contact",
    },
    {
        text: "Khác",
        key: "other",
    },
]

export function Header() {
    const navigate = useNavigate();
    const handleClickLogo = () => {
        navigate('/')
    }

    const handleClickMenuItem = (key: MenuItemNames) => {
        switch (key) {
            case 'home':
                navigate('/')
                break;
            default:
                break;
        }
    }
    return (
        <div className="w-full bg-primary fixed lg:static z-50">
            <div className='w-full sm:w-130 md:w-176 lg:w-240 xl:w-280 2xl:w-336 flex gap-4 lg:grid lg:grid-cols-12 lg:gap-8 lg:pt-2 items-center mx-auto px-2'>
                {/* Logo */}
                <Button
                    text={STORE_NAME}
                    iconName='MainLogo'
                    iconSize='2xl'
                    className='text-nowrap text-xs lg:text-lg xl:text-xl 2xl:text-2xl w-28 lg:w-full font-bold col-span-2'
                    onClick={() => handleClickLogo()}
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
                            className='hidden lg:flex text-left gap-2 hover:text-secondary font-medium text-white'
                        />
                        <div className='hidden lg:flex gap-2'>
                            <Button
                                text=''
                                iconName='User'
                                iconSize='sm'
                                className='hover:text-secondary text-white'
                            />
                            <Button
                                text=''
                                iconName='Cart'
                                iconSize='sm'
                                className='hover:text-secondary text-white'
                            />
                        </div>
                    </div>
                    {/* Menu */}
                    <div className='hidden lg:flex gap-4 font-medium'>
                        {Menu.map((item) => {
                            return (
                                item.selections ?
                                    <ButtonTextList
                                        key={item.key}
                                        text={item.text}
                                        selections={item.selections}
                                        className='px-2 py-3 text-white'
                                    />
                                    :
                                    <Button
                                        key={item.key}
                                        text={item.text}
                                        className='px-2 py-3 hover:text-secondary text-white'
                                        onClick = {() => handleClickMenuItem(item.key)}
                                    />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}