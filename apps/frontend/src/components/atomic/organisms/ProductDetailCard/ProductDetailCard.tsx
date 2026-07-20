import { CommitmentBox, ProductDetailSetImages, type ProductImageProps } from "../../molecules"
import { ProductDetailCategory } from '../../molecules/ProductDetailCategory/ProductDetailCategory';
import { ProductDetailPriceCard } from '../../molecules/ProductDetailPriceCard/ProductDetailPriceCard';
import { CategorySelector } from '../../molecules/CategorySelector/CategorySelector';
import { Counter } from '../../molecules/Counter/Counter';
import { Button } from '../../atoms/Button/Button';
import { SupportBox } from '../../molecules/SupportBox/SupportBox';

const products: ProductImageProps[] = [
    { productId: '1', publicId: "product_mihari_mfodt5" },
    { productId: '2', publicId: "product_mihari_detail1_u5xf8i" },
    { productId: '3', publicId: "product_mihari_detail2_taidol" },
    { productId: '4', publicId: "product_mihari_detail1_u5xf8i" },
    { productId: '5', publicId: "product_mihari_detail2_taidol" },
]

const productDetailCategory = {
    status: "In Stock",
    brand: "BANDAI",
    type: "Sacle figure"
}

const productDetailPriceCard = {
    price: 6000000,
    discountPrice: 4000000
}

const categorySelector = {
    text: "Nguồn",
    selections: ["Trung", "Nhật"]
}

interface ProductDetailCardProps {
    text: string
}
export function ProductDetailCard({ text }: ProductDetailCardProps) {
    return (
        <div className='w-full grid grid-cols-12 bg-card-bg p-4 gap-4 rounded-lg'>
            <div className="w-full flex flex-col col-span-9 gap-4">
                <div className="text-2xl font-semibold">
                    {text}
                </div>
                <div className="w-full grid grid-cols-9 gap-4">
                    <div className="col-span-5">
                        <ProductDetailSetImages
                            productImages={products}
                        />
                    </div>
                    <div className="col-span-4 flex flex-col gap-4">
                        <ProductDetailCategory
                            {...productDetailCategory}
                        />
                        <div className="w-full border border-border-main" />
                        <ProductDetailPriceCard
                            {...productDetailPriceCard}
                        />
                        <CategorySelector
                            {...categorySelector}
                        />
                        <div className="flex items-center">
                            <div className="w-32 font-medium">Số lượng</div>
                            <Counter />
                        </div>
                        <div className="flex w-full gap-4">
                            <Button
                                text="MUA NGAY"
                                className="w-full bg-primary text-lg font-semibold text-white justify-center py-4 rounded-lg"
                            />
                            <Button
                                iconPosition={"top"}
                                iconName="Cart"
                                iconSize="xs"
                                text="Thêm vào giỏ"
                                className="border border-primary rounded-lg text-primary text-nowrap font-light p-2"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-span-3">
                <div className="flex flex-col gap-4">
                    <CommitmentBox />
                    <SupportBox />
                </div>
            </div>
        </div>
    )
}
