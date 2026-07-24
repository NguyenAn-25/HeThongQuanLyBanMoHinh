import { useBreadcrumbStore } from "@/stores/breadcrum.store";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SearchFiltersContainer } from '../../components/atomic/organisms/SearchFiltersContainer/SearchFiltersContainer';
import { SearchProductsContainer } from "@/components/atomic/organisms";
import { Button } from '../../components/atomic/atoms/Button/Button';
import { Overlay } from "@/components/atomic/atoms";

export function SearchPage() {
    const { setBreadscrumbItems } = useBreadcrumbStore();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const { name } = useParams();

    let title: string;
    if (name) {
        title = searchParams.get("displayName") || name;
    } else if (query) {
        title = `Kết quả tìm kiếm với từ khóa  "${query}"`;
    } else {
        title = ""
    }

    useEffect(() => {
        setBreadscrumbItems([{ label: title }]);
    }, [setBreadscrumbItems]);

    const [openFilter, setOpenFilter] = useState(false);

    const handleClickFilterButton = () => {
        setOpenFilter(prev => !prev)
    }

    return (
        title ?
            <div className="bg-card-bg grid grid-cols-12 p-4 gap-2 rounded-lg">
                <div className="hidden xl:flex xl:col-span-3">
                    <div className="hidden xl:flex xl:flex-col gap-4">
                        <SearchFiltersContainer />
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-9">
                    <SearchProductsContainer
                        title={title}
                    />
                </div>
                <div className="fixed flex right-0 top-0 bottom-0 z-70 xl:hidden">
                    <div className={`w-12 h-12 bg-light-red rounded-full text-sm font-light ${openFilter ? 'absolute -left-12 top-1/3' : 'fixed right-0 top-1/3'}`}>
                        <Button
                            text={openFilter ? '' : 'Lọc'}
                            iconPosition={"bottom"}
                            iconName={openFilter ? "Exit" : "FilterToggle"}
                            className={`absolute left-0 right-0 top-1 rounded-full bg-light-red text-white ${openFilter ? "left-1 right-1 top-3.5" : "left-0 right-0 top-1"}`}
                            onClick={() => handleClickFilterButton()}
                        />
                    </div>
                    <div className={`px-2 bg-card-bg ${openFilter ? 'flex xl:hidden w-xs overflow-auto' : 'hidden'}`}>
                        <SearchFiltersContainer />
                    </div>
                </div>
                <Overlay
                    className={`z-60 ${openFilter ? 'flex xl:hidden' : 'hidden'}`}
                />
            </div> :
            <div className="w-full flex justify-center">
                Vui lòng nhập nội dung tìm kiếm :v
            </div>
    )
}