interface ProductDetailCategoryProps {
    status: string,
    brand: string,
    type: string
}

export function ProductDetailCategory({
    status,
    brand,
    type
}: ProductDetailCategoryProps) {
    return (
        <div className="w-full flex flex-col text-lg font-light">
            <div className="flex gap-2">
                <div>
                    Tình trạng: <span className="text-secondary ml-1">{status}</span>
                </div>
                <div>|</div>
                <div>
                    Thương hiệu: <span className="text-secondary ml-1">{brand}</span>
                </div>
            </div>
            <div>
                <div>
                    Loại: <span className="text-secondary ml-1">{type}</span>
                </div>
            </div>
        </div>
    )
}