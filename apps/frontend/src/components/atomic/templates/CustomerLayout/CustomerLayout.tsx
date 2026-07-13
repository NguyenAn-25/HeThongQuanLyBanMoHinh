import { Footer, Header, MenuBar } from '@/components/atomic/organisms';
import { Outlet } from 'react-router-dom';
export function CustomerLayout() {
    return (
        <div className="h-max w-full">
            <Header />
            <main className='w-full px-2 pt-14 sm:px-0 lg:pt-0 sm:w-130 md:w-176 lg:w-240 xl:w-280 2xl:w-336 mx-auto'>
                <Outlet />
            </main>
            <MenuBar className='fixed bottom-0 z-50 lg:hidden'/>
            <Footer/>
        </div>
    )
}