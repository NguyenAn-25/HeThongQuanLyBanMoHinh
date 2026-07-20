import { JsonContentRenderer, type JsonContentRendererProps } from "../../atoms"

interface ProductDetailInfoCard extends JsonContentRendererProps{}

export function ProductDetailInfoCard({...props}: ProductDetailInfoCard) {
    return (
        <div className='w-full flex flex-col gap-2 bg-card-bg rounded-lg p-4'>
            <div
                className="text-lg font-semibold"
            >THÔNG TIN SẢN PHẨM</div>
            <div className="border border-border-main"/>
            <div>
                <JsonContentRenderer
                    {...props}
                />
            </div>
        </div>
    )
}