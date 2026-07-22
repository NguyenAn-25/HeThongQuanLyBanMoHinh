import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchFiltersContainer } from '../../components/atomic/organisms/SearchFiltersContainer/SearchFiltersContainer';

export function SearchPage() {
    const { setBreadscrumbItems } = useBreadcrumbStore();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    useEffect(() => {
        setBreadscrumbItems([{ label: `Kết quả tìm kiếm với từ khóa  "${query}"` }]);
    }, [setBreadscrumbItems]);

    return (
        <div className="bg-card-bg grid grid-cols-12 p-4 rounded-lg">
            <div className="col-span-3">
                <div className="flex flex-col gap-4">
                    <SearchFiltersContainer/>
                </div>
            </div>
        </div>
    )
}