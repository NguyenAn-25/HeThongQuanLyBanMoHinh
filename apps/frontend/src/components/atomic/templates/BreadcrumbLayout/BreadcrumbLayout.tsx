import { Outlet } from 'react-router-dom';
import { Breadcrumb } from '../../molecules';
export function BreadcrumbLayout() {
    return (
        <div className="h-max w-full flex flex-col gap-4 p-4">
            <Breadcrumb />
            <Outlet />
        </div>
    )
}