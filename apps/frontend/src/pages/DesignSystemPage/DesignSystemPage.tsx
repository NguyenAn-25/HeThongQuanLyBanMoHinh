import { Image, Icon, Button, TextBox, ScrollButton, Tag, DiscountTag, JsonContentRenderer, type RichTextJSON, CheckBox, ItemTag, RadioBox } from '@/components/atomic/atoms';
import { ButtonTextList, type ButtonSelectionL1, SearchBar, ProductCard, CategoryGroup, VideoCard, Breadcrumb, ProductImage, ProductDetailSetImages, ProductDetailCategory, CategorySelector, Counter, CommitmentBox, SupportBox, ProductDetailPriceCard, SearchListSelected, SortingBar, PaginationBar } from '@/components/atomic/molecules'
import { Header } from '@/components/atomic/organisms'
import { CategoriesCard } from '@/components/atomic/organisms/CategoriesCard/CategoriesCard';
import { ProductDetailInfoCard } from '@/components/atomic/organisms/ProductDetailInfoCard/ProductDetailInfoCard';
import { useBreadcrumbStore } from '@/stores/breadcrum.store';
import React, { useEffect } from 'react';
import { SearchFiltersContainer } from '../../components/atomic/organisms/SearchFiltersContainer/SearchFiltersContainer';

function ComponentBox({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="p-6 bg-app-bg rounded-lg border border-black">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                {title}
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
                {children}
            </div>
        </div>
    );
}

export function DesignSystemPage() {
    const buttonSelections: ButtonSelectionL1[] = [
        {
            text: "Mô hình PVC",
            childrens: [
                { text: "Mô hình nổi bật" },
                { text: "Mô hình có sẵn" },
                { text: "Mô hình pre-order" },
            ]
        },
        {
            text: "Mô hình Resin",
            childrens: [
                { text: "Mô hình nổi bật" },
                { text: "Mô hình có sẵn" },
                { text: "Mô hình pre-order" },
            ]
        },
        { text: "Sản phẩm nổi bật" }
    ]

    const productId2 = "product_mihari_mfodt5";
    const productId = "product_hatsune_miku_phong_cach_duong_pho_eatwzu";
    const price = 3000000;
    const salePrice = 2000000;

    const categoryGroupIds = ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"];

    const { setBreadscrumbItems } = useBreadcrumbStore()
    useEffect(() => {
        setBreadscrumbItems([{ label: "Sản phẩm" }]);
    }, [setBreadscrumbItems]);
    const productDetails = [
        { productId: '1', publicId: "product_mihari_mfodt5" },
        { productId: '2', publicId: "product_mihari_detail1_u5xf8i" },
        { productId: '3', publicId: "product_mihari_detail2_taidol" },
        { productId: '4', publicId: "product_mihari_detail1_u5xf8i" },
        { productId: '5', publicId: "product_mihari_detail2_taidol" },
    ]

    const productDetailCategory = {
        status: "In Stock",
        brand: "BANDAI",
        type: "Scale Figure"
    }

    const JsonText: RichTextJSON = {
        "type": "doc",
        "content": [
            {
                "type": "paragraph",
                "content": [
                    {
                        "type": "text",
                        "text": `🔥 LƯU Ý : Sản phẩm này cần INBOX SHOP ĐỂ ĐƯỢC TƯ VẤN  trước khi QUYẾT ĐỊNH đặt hàng !!!
🔥 Xin vui lòng liên hệ shop nếu có bất kì câu hỏi nào!!!
    ------

🍒 Tên Sản Phẩm: Onii - chan wa Oshimai! - Oyama Mihari - 1 / 6 - Heisei Gyaru Ver. (Phat Company)
🍒 Hãng:Phat Company
🍒 Chất Liệu: PVC, ABS
🍒 Kích Thước: 250mm
🍒 Ngày Phát Hành: T7 / 2027

------

NA FIGURE - MÔ HÌNH ANIME CHÍNH HÃNG NHẬT BẢN
#figure #mo_hinh #mo_hinh_nhan_vat #mo_hinh_anime #anime_figure #figure #mo_hinh_chinh_hang #mo_hinh_figure #figure_chinh_hang #mo_hinh_tinh #nendoroid #gameprize #scalefigure

--- `
                    }
                ]
            },
            {
                "type": "image",
                "attrs": {
                    "src": "https://res.cloudinary.com/saxphmdc/image/upload/v1784396052/product_mihari_detail2_taidol.webp",
                }
            },
            {
                "type": "image",
                "attrs": {
                    "src": "https://res.cloudinary.com/saxphmdc/image/upload/v1784396052/product_mihari_detail1_u5xf8i.webp",
                }
            },
            {
                "type": "image",
                "attrs": {
                    "src": "https://res.cloudinary.com/saxphmdc/image/upload/v1784329584/product_mihari_mfodt5.png",
                }
            }
        ]
    }

    const SearchFilterProps = {
        title: "THƯƠNG HIỆU",
        selections: [
            "konami arcade games",
            "BANDAI",
            "Good Smile",
            "TAITO",
            "Fukuya",
            "Furyu",
            "SEGA"
        ]
    }

    const SearchListSelectedProps = [
        {
            categoryIndex: 1,
            text: "Bandai"
        },
        {
            categoryIndex: 2,
            text: "6000000"
        },
        {
            categoryIndex: 2,
            text: "6000000"
        },
        {
            categoryIndex: 2,
            text: "6000000"
        },
    ]

    return (
        <div className="min-h-screen p-8">
            <div className="w-full sm:w-130 md:w-176 lg:w-240 xl:w-280 2xl:w-336 mx-auto space-y-8">
                <div>
                    <h1 className="text-2xl font-bold text-text-main">Design System Sandbox</h1>
                    <p className="text-sm text-text-muted">Khu vực kiểm thử giao diện các component</p>
                </div>

                {/* ATOMS */}
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-text-main border-b pb-1">1. Atoms</h2>
                    <ComponentBox title="Icon Component">
                        <div className='w-20 h-20'>
                            <Icon name="MainLogo" />
                        </div>
                        <div className='w-20 h-20'>
                            <Icon name="MainLogo" />
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Image Component">
                        <div className='w-40 h-40'>
                            <Image src='/img/Default.png' />
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Button Component">
                        <div>
                            <Button
                                text="button"
                                className='px-2 font-medium hover:text-secondary'
                                iconName='DropDown'
                                iconPosition={'right'}
                            />
                        </div>
                    </ComponentBox>

                    <ComponentBox title="TextBox Component">
                        <div>
                            <TextBox
                                variant={'normal'}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="ScrollButton Component">
                        <div className='w-20'>
                            <ScrollButton />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="Tag Component">
                        <div>
                            <Tag
                                text='IN STOCK'
                            />
                        </div>
                        <div>
                            <Tag
                                text='IN STOCK'
                                color={'secondary'}
                                size={'medium'}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="Discount Tag Component">
                        <div>
                            <DiscountTag
                                percent={20}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="CheckBox">
                        <div>
                            <CheckBox
                                shape='circle'
                                text="abc"
                                className='hover:text-primary'
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="ItemTag">
                        <div>
                            <ItemTag
                                text="BANDAI"
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="RadioBox">
                        <div>
                            <RadioBox
                                text="radio"
                                radioId={1}
                            />
                        </div>
                        <div>
                            <RadioBox
                                text="radio"
                                radioId={1}
                                checked={true}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="SortingBar">
                        <div className='w-full'>
                            <SortingBar />
                        </div>
                    </ComponentBox>
                </div>

                {/* MOLECULES */}
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-text-main border-b pb-1">2. Molecules</h2>
                    <ComponentBox title="Button Text List">
                        <div>
                            <ButtonTextList
                                text='Mô hình'
                                selections={buttonSelections}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="Search Bar">
                        <div>
                            <SearchBar
                                variant={'borderless'}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="ProductCard">
                        <div className='w-60'>
                            <ProductCard
                                productId={"1"}
                                publicId={productId}
                                text='Hatsune Miku Phong Cách Đường Phố'
                                price={price}
                                productType='instock'
                            />
                        </div>
                        <div className='w-60'>
                            <ProductCard
                                productId={"1"}
                                publicId={productId}
                                text='Hatsune Miku Phong Cách Đường Phố'
                                price={price}
                                salePrice={salePrice}
                                productType='preorder'
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="Category Group Container">
                        <div className='w-64'>
                            <CategoryGroup
                                imgIds={categoryGroupIds}
                                quantity={200}
                                title='Game Prize Figure'
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="Category Group Container">
                        <div className='w-64'>
                            <VideoCard
                                publicId='video_jujutsu_by13m7'
                                text='MÔ HÌNH GOJO X SUKUNA LUMINASTA (SEGA) - NA FIGURE'
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="BreadCrumb">
                        <div className="w-full">
                            <Breadcrumb />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="ProductImage">
                        <div className="w-xl">
                            <ProductImage
                                productId={"1"}
                                publicId={productId2}
                                productType='instock'
                                frameSize='large'
                                aspect='square'
                                objectFit='contain'
                            />
                        </div>
                        <div className="w-32">
                            <ProductImage
                                productId={"1"}
                                publicId={productId}
                                productType='instock'
                                frameSize='small'
                                objectFit='fill'
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="ProductDetailSetImages">
                        <div className='w-120'>
                            <ProductDetailSetImages
                                productImages={productDetails}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="ProductDetailCategory">
                        <div>
                            <ProductDetailCategory
                                {...productDetailCategory}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="ProductDetailPriceCard">
                        <div>
                            <ProductDetailPriceCard
                                price={2000000}
                            />
                        </div>
                        <div>
                            <ProductDetailPriceCard
                                price={2000000}
                                discountPrice={1500000}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="CategorySelector">
                        <div className='w-full p-4 bg-white'>
                            <CategorySelector
                                text="Nguồn"
                                selections={["Trung", "Nhật"]}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="Counter">
                        <div>
                            <Counter />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="CommitmentBox">
                        <div>
                            <CommitmentBox />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="SupportBox">
                        <div>
                            <SupportBox />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="PaginationBar">
                        <div>
                            <PaginationBar 
                                totalPage={10}
                                currentPage={5}
                            />
                        </div>
                    </ComponentBox>
                </div>

                {/* ORGANISMS */}
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-text-main border-b pb-1">3. Organisms</h2>

                    <ComponentBox title="Header">
                        <div className='w-full'>
                            <Header></Header>
                        </div>
                    </ComponentBox>
                    <ComponentBox title="CategoryCard">
                        <div className='w-full'>
                            <CategoriesCard />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="ProductDetailInfoCard">
                        <div className='w-full'>
                            <ProductDetailInfoCard
                                jsonData={JsonText}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="FiltersContainer">
                        <div className='w-full'>
                            <SearchFiltersContainer />
                        </div>
                    </ComponentBox>
                </div>

            </div>
        </div>
    );
}