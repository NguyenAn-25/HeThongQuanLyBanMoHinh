import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { Link } from "react-router-dom";

export interface BreadcrumbItems {
    label: string;
    path?: string
}

export interface BreadcrumbProps {
    items: BreadcrumbItems[]
}

export function Breadcrumb() {
    const { breadScrumItems } = useBreadcrumbStore()

    const defaultItem: BreadcrumbItems = {
        label: "Trang chủ",
        path: "/"
    }

    const newItems = [defaultItem, ...breadScrumItems]

    return (
        <div className="w-full flex bg-card-bg p-4 rounded-lg font-light">
            {
                newItems.map((item, index) => {
                    const isLast = index === newItems.length - 1;
                    return (
                        item.path ?
                            <Link
                                to={item.path}
                                key={index}
                            >
                                <div className="flex">
                                    <div className="hover:text-primary">
                                        {typeof item.label === 'object' ? JSON.stringify(item.label) : item.label}
                                    </div>
                                    {!isLast && <span className="mx-2">/</span>}
                                </div>
                            </Link>
                            :
                            <div key={index} >
                                {typeof item.label === 'object' ? JSON.stringify(item.label) : item.label} {!isLast && <span className="mx-2">/</span>}
                            </div>
                    )
                })
            }
        </div>
    )
}