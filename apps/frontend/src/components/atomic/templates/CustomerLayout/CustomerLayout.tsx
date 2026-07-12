import { Header, MenuBar } from '@/components/atomic/organisms';
import { Outlet } from 'react-router-dom';
export function CustomerLayout() {
    return (
        <div className="h-max w-full">
            <Header />
            <main className='w-full sm:w-130 md:w-176 lg:w-240 xl:w-280 2xl:w-336 mx-auto bg-amber-700 h-300'>
                <Outlet />
            </main>
            <MenuBar className='fixed bottom-0 z-50 lg:hidden'/>
        </div>
    )
}