import { BusinessCard, FooterItem, InfoCard, NetworkCard } from '@/components/atomic/molecules';

const footerItems = [
    {
        title: "Giới thiệu về Na Figure",
        links: ["Giới thiệu", "Liên hệ hợp tác", "Tin tức", "Tin tuyển dụng"]
    },
    {
        title: "Hỗ trợ khách hàng",
        links: ["Tra cứu đơn hàng", "Hướng dẫn mua hàng trực tuyến", "Hướng dẫn thanh toán", "Bảng tính giá Order"]
    },
    {
        title: "Chính sách",
        links: ["Quy định chung", "Phân định trách nhiệm", "Chính sách vận chuyển", "Chính sách bảo mật", "Chính sách kiểm hàng", "Chính sách đổi trả", "Chính sách thanh toán"]
    },
    {
        title: "Thông tin khuyến mãi",
        links: ["Thông tin khuyến mại", "Sản phẩm khuyến mại", "Sản phẩm mới"]
    },
]

export function Footer() {
    return (
        <div className="w-full flex flex-col bg-card-bg border-t-4 border-primary">
            <div className='w-full sm:w-130 md:w-176 lg:w-240 xl:w-280 2xl:w-336 mx-auto px-2'>
                <div className='w-full grid grid-cols-12 gap-8 items-left py-12'>
                    {footerItems.map((item, index) => (
                        <FooterItem
                            title={item.title}
                            links={item.links}
                            className='col-span-12 md:col-span-6 lg:col-span-3'
                        />
                    ))}
                    <InfoCard className='col-span-12 md:col-span-6 lg:col-span-3' />
                    <NetworkCard className='col-span-12 md:col-span-6 lg:col-span-3' />
                    <BusinessCard className='col-span-12 lg:col-span-6' />
                </div>
            </div>
            <div className='border-t border-border-main'>
                <div className='w-full sm:w-130 md:w-176 lg:w-240 xl:w-280 2xl:w-336 mx-auto px-2 py-2 text-text-muted'>
                    Bản quyền thuộc về Na Figure
                </div>
            </div>
        </div>
    )
}