import { SearchBar } from '../SearchBar/SearchBar';
import { Combobox, type ComboboxItem } from '../../atoms/Combobox/Combobox';
import { useState } from 'react';

const mockCombobox = [
    {
        id: 1,
        text: "Tất cả"
    },
    {
        id: 2,
        text: "Đã duyệt"
    },
    {
        id: 3,
        text: "Chờ giao hàng"
    },
]

export function SearchComboboxBar() {
    const [selectedItem, setSelectedItem] = useState<ComboboxItem>(mockCombobox[0]);
    const handleSelect = (item: ComboboxItem) => {
        setSelectedItem(item);
    }

    return (
        <div className="flex gap-2">
            <SearchBar 
                placeholder='Tìm kiếm tên sản phẩm'
            />
            <div className='w-48'>
                <Combobox
                    items={mockCombobox}
                    selectedItem={selectedItem}
                    onSelect={(item) => handleSelect(item)}
                />
            </div>
        </div>
    )
}