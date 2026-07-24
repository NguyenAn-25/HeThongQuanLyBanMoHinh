import React from 'react';
import { CheckBox } from '../../atoms';

// T: kiểu dữ liệu chung của mỗi dòng (Row Data)
export interface Column<T> {
    header: string;
    accessorKey?: keyof T; // tham chiếu để lấy tên thuộc tính của cột (dùng khi hiển thị data thô, không có hàm render)
    render?: (item: T) => React.ReactNode; // có thể không truyền nếu muốn hiển thị data thô
    className?: string;
}

export interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    keyExtractor: (item: T) => string | number; // hỗ trợ thẻ cha cài đặt key cho từng dòng trong table
    emptyMessage?: string;
    isSelectable?: boolean; // Hiển thị checkbox
    className?: string
}

export function Table<T>({
    columns,
    data,
    keyExtractor,
    emptyMessage = 'Không có dữ liệu',
    isSelectable = false,
    className,
}: TableProps<T>) {
    return (
        <table className={`w-full ${className}`}>
            {/* Header */}
            <thead className="bg-card-bg border-b border-border-main">
                <tr>
                    {
                        isSelectable && (
                            <th className="p-4 w-12 text-center">
                                <CheckBox checkBoxId={0} />
                            </th>
                        )
                    }

                    {columns.map((col, idx) => (
                        <th
                            key={idx}
                            className={`p-4 ${col.className}`}
                        >
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>

            {/* Body */}
            <tbody className="bg-white">
                {data.length > 0 ? (
                    data.map((item) => (
                        <tr
                            key={keyExtractor(item)}
                        >
                            {isSelectable && (
                                <td className="p-4 w-12 text-center">
                                    <CheckBox checkBoxId={0} />
                                </td>
                            )}
                            {columns.map((col, colIndex) => {
                                // Lấy giá trị thô từ data nếu có accessorKey
                                const rawValue = col.accessorKey ? item[col.accessorKey] : undefined;

                                return (
                                    <td
                                        key={colIndex}
                                        className={`p-4 ${col.className || ''}`}
                                    >
                                        {/* Nếu có hàm render custom thì dùng, ngược lại hiển thị giá trị thô */}
                                        {col.render
                                            ? col.render(item)
                                            : (
                                                <div className='text-center'>
                                                    {(rawValue as React.ReactNode) ?? '—'}
                                                </div>
                                            )
                                        }
                                    </td>
                                );
                            })}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan={columns.length}
                            className="p-4 text-center"
                        >
                            {emptyMessage}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}