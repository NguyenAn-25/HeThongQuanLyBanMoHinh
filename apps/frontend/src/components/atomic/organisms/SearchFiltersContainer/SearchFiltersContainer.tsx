import { useMemo, useState } from 'react';
import { SearchListSelected } from '../../molecules';
import { SearchFilter } from '../../molecules/SearchFilter/SearchFilter';

const filtersMock = [
    {
        title: "Thương hiệu",
        categoryId: 1,
        selections: [
            { checkBoxId: 1, text: "konami arcade games" },
            { checkBoxId: 2, text: "BANDAI" },
            { checkBoxId: 3, text: "Good Smile" },
            { checkBoxId: 4, text: "TAITO" },
            { checkBoxId: 5, text: "Fukuya" },
            { checkBoxId: 6, text: "Furyu" },
            { checkBoxId: 7, text: "SEGA" },
        ]
    },
    {
        title: "Lọc giá",
        categoryId: 2,
        selections: [
            { checkBoxId: 8, text: "Giá dưới 500.000đ" },
            { checkBoxId: 9, text: "500.000đ - 1.000.000đ" },
            { checkBoxId: 10, text: "1.000.000đ - 2.00.00000đ" },
            { checkBoxId: 11, text: "2.00.00000đ - 5.000.000đ" },
            { checkBoxId: 12, text: "5.000.000đ - 10.000.000đ" },
            { checkBoxId: 13, text: "Giá trên 10.000.000đ" },
        ]
    },
    {
        title: "Loại",
        categoryId: 3,
        selections: [
            { checkBoxId: 14, text: "Action/Doll" },
            { checkBoxId: 15, text: "PLUSH" },
            { checkBoxId: 16, text: "Nendoroid" },
            { checkBoxId: 17, text: "Deformation Figure" },
            { checkBoxId: 18, text: "lucky kuji" },
            { checkBoxId: 19, text: "Figure Chibi" },
            { checkBoxId: 20, text: "Lookup" },
            { checkBoxId: 21, text: "Scale Figure" },
            { checkBoxId: 22, text: "Goods" },
            { checkBoxId: 23, text: "Ichiban Kuji Figure" },
            { checkBoxId: 24, text: "Figure" },
            { checkBoxId: 25, text: "Game Prize Figure" },
        ]
    },
];

interface Filter {
    categoryId: number,
    checkedIds: number[]
}

export function SearchFiltersContainer() {

    const [filterState, setFilterState] = useState<Filter[]>([]);

    // map dữ liệu cho phần SearchListSelected
    const selectionMap = useMemo(() => {
        const map = new Map<number, string>();

        filtersMock.forEach((cat) => {
            cat.selections.forEach((item) => {
                map.set(item.checkBoxId, item.text);
            });
        });

        return map;
    }, [filtersMock]);

    const listSelected = useMemo(() => {
        return filterState.map((filter) => {

            const checkedItems = filter.checkedIds.flatMap((id) => {
                const text = selectionMap.get(id);
                return text ? [{ checkBoxId: id, text }] : [];
            });

            return {
                categoryIndex: filter.categoryId,
                checkedItems: checkedItems,
            };
        })
    }, [filterState, selectionMap, filtersMock]);


    const handleChangeFilter = (categoryId: number, checkboxId: number) => {
        const includeCheckedCheckbox = filterState.find(filter => filter.checkedIds.some(id => id === checkboxId));
        // case checkbox đã được check trước đó
        if (includeCheckedCheckbox) {
            const newCheckedIds = includeCheckedCheckbox.checkedIds.filter(item => item !== checkboxId)
            const newFilter = {
                ...includeCheckedCheckbox,
                checkedIds: newCheckedIds
            }
            const newFilterState = filterState.map(filter => filter.categoryId === categoryId ? newFilter : filter);
            console.log(newFilterState)

            setFilterState(newFilterState);
        }
        // case checkbox chưa được check trước đó
        else {
            const filter = filterState.find(filter => filter.categoryId === categoryId);
            // case đã có mảng trạng thái của filter với id categoryId
            if (filter) {
                const newFilter = {
                    ...filter,
                    checkedIds: [checkboxId, ...filter.checkedIds],
                }
                const newFilterState = filterState.map(filter => filter.categoryId === categoryId ? newFilter : filter);
                console.log(newFilterState)
                setFilterState(newFilterState);
            }
            // case chưa có mảng trạng thái của filter với id categoryId
            else {
                const newFilter = {
                    categoryId: categoryId,
                    checkedIds: [checkboxId]
                }
                const newFilterState = [...filterState, newFilter]
                console.log(newFilterState)
                setFilterState(newFilterState);
            }
        }
    }

    const handleChangeListSelected = (categoryId: number, checkBoxId: number) => {
        const filterHasCheckBox = filterState.find(filter => filter.categoryId === categoryId);
        if (!filterHasCheckBox) return;

        const newFilterCheckedId = filterHasCheckBox?.checkedIds.filter(id => id !== checkBoxId);
        if (!newFilterCheckedId) return;

        const newFilter = { ...filterHasCheckBox, checkedIds: newFilterCheckedId };

        const newFilterState = filterState.map(filter => filter.categoryId === categoryId ? newFilter : filter);

        setFilterState(newFilterState);
    }

    const enableListSelected = listSelected.length !== 0
        && listSelected.some(filter => filter.checkedItems.length !== 0)

    return (
        <div className="flex flex-col gap-4 bg-white">
            <div className="text-lg font-semibold">
                BỘ LỌC SẢN PHẨM
            </div>
            <div className="px-1 font-light">
                Giúp lọc nhanh sản phẩm bạn tìm kiếm
            </div>
            {
                enableListSelected && (
                    <SearchListSelected
                        items={listSelected}
                        onChange={handleChangeListSelected}
                    />
                )
            }
            <div className="flex flex-col gap-3">
                {
                    filtersMock.map((filter, index) => {
                        const listSelected = filterState.find(item => item.categoryId === filter.categoryId)
                        return (
                            <SearchFilter
                                key={index}
                                listSelected={listSelected ? listSelected.checkedIds : []}
                                onChange={(categoryId, checkboxId) => handleChangeFilter(categoryId, checkboxId)}
                                {...filter}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
