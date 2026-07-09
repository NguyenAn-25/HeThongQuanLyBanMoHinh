import { Image, Icon, Button, type ButtonIconProps } from '@/components/atomic/atoms';
import { ButtonTextList, type ButtonSelectionL1 } from '@/components/atomic/molecules'
import React from 'react';


function ComponentBox({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="p-6 bg-white rounded-lg border border-border-main">
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
    const buttonIconProps: ButtonIconProps = {
        iconName: 'DropDown',
        iconPosition: 'right',
    }

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
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-5xl mx-auto space-y-8">
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
                                buttonIconProps={buttonIconProps}
                            />
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Button Text List">
                        <div>
                            <ButtonTextList
                                text='Mô hình'
                                selections={buttonSelections}
                            />
                        </div>
                    </ComponentBox>
                </div>

                {/* MOLECULES */}
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-text-main border-b pb-1">2. Molecules</h2>

                    <ComponentBox title="Chưa có component">
                        <div></div>
                    </ComponentBox>
                </div>

                {/* ORGANISMS */}
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-text-main border-b pb-1">3. Organisms</h2>

                    <ComponentBox title="Chưa có component">
                        <div></div>
                    </ComponentBox>
                </div>

            </div>
        </div>
    );
}