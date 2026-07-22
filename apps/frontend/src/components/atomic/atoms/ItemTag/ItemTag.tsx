import { Button } from '../Button/Button';

interface ItemTag {
    text: string,
    onClick?: () => void
}

export function ItemTag({text, onClick}: ItemTag) {
    return (
        <div onClick={onClick} className='flex items-center gap-2 py-1 px-2 rounded-full bg-primary cursor-pointer hover:bg-gray-light'>
            <div className='rounded-full bg-app-bg'>
                <Button
                    text=""
                    iconName="Exit"
                    className='text-text-muted'
                />
            </div>
            <div className='text-white'>{text}</div>
        </div>
    )
}