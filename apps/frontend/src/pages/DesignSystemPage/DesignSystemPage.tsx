import { Image, Icon, Button, TextBox, ScrollButton, Tag, DiscountTag, CheckBox, ItemTag, RadioBox, Combobox } from '@/components/atomic/atoms';
import { ButtonTextList, SearchBar, ProductCard, CategoryGroup, VideoCard, Breadcrumb, ProductImage, ProductDetailSetImages, ProductDetailCategory, CategorySelector, Counter, CommitmentBox, SupportBox, ProductDetailPriceCard, SortingBar, Table, CategorySelections, SearchComboboxBar, ProcessNode } from '@/components/atomic/molecules'
import { Header } from '@/components/atomic/organisms'
import { CategoriesCard } from '@/components/atomic/organisms/CategoriesCard/CategoriesCard';
import { ProductDetailInfoCard } from '@/components/atomic/organisms/ProductDetailInfoCard/ProductDetailInfoCard';
import { SearchFiltersContainer } from '../../components/atomic/organisms/SearchFiltersContainer/SearchFiltersContainer';
import { buttonSelections, productId, price, salePrice, categoryGroupIds, productId2, productDetails, productDetailCategory, JsonText, mockTableProducts, columns, variantSelections, mockCombobox } from './MockData';
import { useBreadcrumbStore } from '@/stores/breadcrum.store';
import { useEffect } from 'react';

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
    const { setBreadscrumbItems } = useBreadcrumbStore()
    useEffect(() => {
        setBreadscrumbItems([{ label: "Sản phẩm" }]);
    }, [setBreadscrumbItems]);
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
                    <ComponentBox title="Combobox">
                        <div className='w-full'>
                            <SearchComboboxBar />
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
                    <ComponentBox title="Table">
                        <div className='w-full'>
                            <Table
                                data={mockTableProducts}
                                columns={columns}
                                keyExtractor={(item) => item.id}
                                isSelectable={true}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="CategorySelections">
                        <div>
                            <CategorySelections
                                sets={variantSelections}
                            />
                        </div>
                    </ComponentBox>
                    <ComponentBox title="ProcessNode">
                        <div className='w-full'>
                            <ProcessNode
                                name="Invoice"
                                text="Thử"
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