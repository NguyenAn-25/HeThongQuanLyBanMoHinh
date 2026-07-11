import { Header } from '../../organisms/Header/Header';
import { Outlet } from 'react-router-dom';
export function CustomerLayout() {
    return (
        <div className="h-max w-full">
            <Header />
            <main className='w-full sm:w-130 md:w-176 lg:w-240 xl:w-280 2xl:w-336 mx-auto bg-amber-950'>
                <Outlet />
            </main>
        </div>
    )
}