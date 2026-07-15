import { Image, Icon, Button, TextBox, ScrollButton, Tag, DiscountTag } from '@/components/atomic/atoms';
import { ButtonTextList, type ButtonSelectionL1, SearchBar, ProductCard, CategoryGroup, VideoCard } from '@/components/atomic/molecules'
import { Header } from '@/components/atomic/organisms'
import { CategoriesCard } from '@/components/atomic/organisms/CategoriesCard/CategoriesCard';
import React from 'react';


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

    const productId = "product_hatsune_miku_phong_cach_duong_pho_eatwzu";
    const price = 3000000;
    const salePrice = 2000000;

    const categoryGroupIds = ["game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy", "game_prize_figure_1_dadrzy"];

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
                                publicId={productId}
                                text='Hatsune Miku Phong Cách Đường Phố'
                                price={price}
                                productType='instock'
                            />
                        </div>
                        <div className='w-60'>
                            <ProductCard
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
                                text='MÔ HÌNH GOJO X SUKUNA LUMINASTA (SEGA) - M FIGURE'
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
                </div>

            </div>
        </div>
    );
}