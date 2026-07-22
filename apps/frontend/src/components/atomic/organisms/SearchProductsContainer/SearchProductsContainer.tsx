import { SortingBar } from '../../molecules/SortingBar/SortingBar';
import { ResultSearchProductsContainer } from '../ResultSearchProductsContainer/ResultSearchProductsContainer';
import { PaginationBar } from '../../molecules/PaginationBar/PaginationBar';
import { useState } from 'react';
interface SearchProductsContainerProps {
    title: string,

}
export function SearchProductsContainer({
    title
}: SearchProductsContainerProps) {
    const totalPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleClickNumber = (index: number) => {
        setCurrentPage(index)
    }

    const handleClickMovePage = (type: 'previous' | 'next') => {
        if (type === 'previous' && currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
        else if (type === 'next' && currentPage < totalPage) {
            setCurrentPage(prev => prev + 1)
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="text-lg font-semibold">
                {title}
            </div>
            <div className="border border-border-main" />
            <SortingBar />
            <div className="border border-border-main" />
            <ResultSearchProductsContainer />
            <div className='flex justify-center py-2'>
                <PaginationBar
                    totalPage={totalPage}
                    currentPage={currentPage}
                    onClickNumber={(index) => handleClickNumber(index)}
                    onClickMoveButton={(type) => handleClickMovePage(type)}
                />
            </div>
        </div>
    )
}