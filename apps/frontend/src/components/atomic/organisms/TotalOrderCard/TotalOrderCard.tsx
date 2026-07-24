import { useState } from "react";
import { Button, SelectionButton } from "../../atoms";
import { Money } from '../../atoms/Money/Money';

const mockPaymentMethods = [
    {
        id: 1,
        name: "Thanh toán khi nhận hàng (COD)"
    },
    {
        id: 2,
        name: "VNPAY"
    },
    {
        id: 3,
        name: "MOMO"
    }
]

export function TotalOrderCard() {
    const [openPaymentMethod, setOpenPaymentMethod] = useState<boolean>(false);
    const [selectedMethodId, setSelectedMethodId] = useState<number>(1);

    const handleClickChangeButton = () => {
        setOpenPaymentMethod(true)
    }

    const handleSelectMethod = (idMethod: number) => {
        setSelectedMethodId(idMethod)
    }

    return (
        <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-b border-border-main pb-2">
                <div className="font-semibold">
                    Phương thức thanh toán:
                </div>
                <div className="flex flex-1 px-2 gap-2 overflow-auto">
                    {openPaymentMethod &&
                        mockPaymentMethods.map((method) => {
                            const isSelect = selectedMethodId === method.id
                            return (
                                <SelectionButton
                                    key={method.id}
                                    text={method.name}
                                    isActive={isSelect}
                                    className="shrink-0"
                                    onClick={() => {handleSelectMethod(method.id)}}
                                />
                            )
                        })
                    }
                </div>
                {!openPaymentMethod &&
                    <div className="flex items-center gap-8 justify-between lg:justify-start">
                        <div>
                            Thanh toán khi nhận hàng
                        </div>
                        <Button
                            text="THAY ĐỔI"
                            className='p-2 bg-white rounded-sm text-primary text-nowrap font-semibold hover:bg-white-hover'
                            onClick={() => handleClickChangeButton()}
                        />
                    </div>
                }
            </div>
            <div className="flex justify-end px-2">
                <table className="shrink-0 w-max">
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">Tổng tiền hàng</td>
                            <td className="text-right">
                                <Money
                                    price={1000000}
                                />
                            </td>

                        </tr>
                        <tr>
                            <td className="px-4 py-2">Tổng tiền phí vận chuyển</td>
                            <td className="text-right">
                                <Money
                                    price={1000000}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Tổng thanh toán</td>
                            <td className="text-right">
                                <Money
                                    price={1000000}
                                    className="text-xl font-bold text-primary"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">
                <Button
                    text="ĐẶT HÀNG"
                    className="rounded-lg bg-primary text-white hover:bg-primary-hover py-2 px-3 text-sm lg:py-3 lg:px-16 font-semibold lg:text-base"
                />
            </div>
        </div>
    )
}