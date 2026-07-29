import { ProcessNode } from "../../molecules";
import type { ProcessNodeId, ProcessNodeProp, StatusNode } from "../../molecules/ProcessNode/ProcessNode";
import { Button } from '../../atoms/Button/Button';
import { useNavigate } from "react-router-dom";

// order instock thanh toán COD
const statusInstockCOD: ProcessNodeProp[] = [
    {
        id: "Ordered",
        name: "Invoice",
        text: "Đơn Hàng Đã Đặt",
        isStartNode: true,
    },
    {
        id: "Commited",
        name: "Pakage",
        text: "Đã Xác Nhận"
    },
    {
        id: "Delivering",
        name: "Truck",
        text: "Đang Giao"
    },
    {
        id: "Success",
        name: "Success",
        text: "Hoàn Thành",
        isEndNode: true
    }
]

// order instock thanh toán chuyển khoản
const statusInstockTransfer: ProcessNodeProp[] = [
    {
        id: "Ordered",
        name: "Invoice",
        text: "Đơn Hàng Đã Đặt",
        isStartNode: true,
    },
    {
        id: "Paid",
        name: "Cash",
        text: "Đơn Hàng Đã Thanh Toán"
    },
    {
        id: "Commited",
        name: "Pakage",
        text: "Đã Xác Nhận"
    },
    {
        id: "Delivering",
        name: "Truck",
        text: "Đang Giao"
    },
    {
        id: "Success",
        name: "Success",
        text: "Hoàn Thành",
        isEndNode: true
    }
]
// order pre-order trước khi chọn phương thức thanh toán tiếp theo
const statusPreOrder: ProcessNodeProp[] = [
    {
        id: "Ordered",
        name: "Invoice",
        text: "Đơn Hàng Đã Đặt",
        isStartNode: true,
    },
    {
        id: "DepositPaid",
        name: "Cash",
        text: "Đơn Hàng Đã Thanh Toán Đặt Cọc",
        preOrderStatus: 'pre'
    },
    {
        id: "WaitingStock",
        name: "WaitingStock",
        text: "Chờ Hàng Về"
    },
    {
        id: "PendingPayment",
        name: "Cash",
        text: "Chờ Thanh Toán Lần Cuối",
        isEndNode: true
    }
]

// order pre-order thanh toán chuyển khoản đặt cọc, thanh toán chuyển khoản phần còn lại
const statusPreOrderTransfer: ProcessNodeProp[] = [
    {
        id: "Ordered",
        name: "Invoice",
        text: "Đơn Hàng Đã Đặt",
        isStartNode: true,
    },
    {
        id: "DepositPaid",
        name: "Cash",
        text: "Đơn Hàng Đã Thanh Toán Đặt Cọc",
        preOrderStatus: 'pre'
    },
    {
        id: "WaitingStock",
        name: "WaitingStock",
        text: "Chờ Hàng Về"
    },
    {
        id: "PendingPayment",
        name: "Cash",
        text: "Chờ Thanh Toán Lần Cuối"
    },
    {
        id: "FullPaid",
        name: "Cash",
        text: "Đã Thanh Toán",
        preOrderStatus: 'full'
    },
    {
        id: "Delivering",
        name: "Truck",
        text: "Đang Giao"
    },
    {
        id: "Success",
        name: "Success",
        text: "Hoàn Thành",
        isEndNode: true
    }
]


// order pre-order thanh toán chuyển khoản đặt cọc, thanh toán COD phần còn lại
const statusPreOrderCOD: ProcessNodeProp[] = [
    {
        id: "Ordered",
        name: "Invoice",
        text: "Đơn Hàng Đã Đặt",
        isStartNode: true,
    },
    {
        id: "DepositPaid",
        name: "Cash",
        text: "Đơn Hàng Đã Thanh Toán Đặt Cọc",
        preOrderStatus: 'pre'
    },
    {
        id: "WaitingStock",
        name: "WaitingStock",
        text: "Chờ Hàng Về"
    },
    {
        id: "PendingPayment",
        name: "Cash",
        text: "Chờ Thanh Toán Lần Cuối"
    },
    {
        id: "Delivering",
        name: "Truck",
        text: "Đang Giao"
    },
    {
        id: "Success",
        name: "Success",
        text: "Hoàn Thành",
        isEndNode: true
    }
]

// order pre-order thanh toán chuyển khoản thanh toán toàn bộ
const statusPreOrderFullPrice: ProcessNodeProp[] = [
    {
        id: "Ordered",
        name: "Invoice",
        text: "Đơn Hàng Đã Đặt",
        isStartNode: true,
    },
    {
        id: "Cash",
        name: "Cash",
        text: "Đơn Hàng Đã Thanh Toán Toàn Bộ",
        preOrderStatus: "full"
    },
    {
        id: "WaitingStock",
        name: "WaitingStock",
        text: "Chờ Hàng Về"
    },
    {
        id: "Delivering",
        name: "Truck",
        text: "Đang Giao"
    },
    {
        id: "Success",
        name: "Success",
        text: "Hoàn Thành",
        isEndNode: true
    }
]

const statusListVariants = {
    InStockCOD: statusInstockCOD,
    InStockTransfer: statusInstockTransfer,
    PreOrder: statusPreOrder,
    PreOrderCOD: statusPreOrderCOD,
    PreOrderTransfer: statusPreOrderTransfer,
    PreOrderFullPrice: statusPreOrderFullPrice,
}

interface ProcessOrderDetailBarProps {
    orderType: keyof typeof statusListVariants
    ativatedNodeId: ProcessNodeId,
    className?: string
}

export function ProcessOrderDetailBar({
    orderType,
    ativatedNodeId,
    className
}: ProcessOrderDetailBarProps) {
    const listNode = statusListVariants[orderType];
    //phục vụ cho hàm map các node phía sau bị enable
    let defaultNodeStatus: StatusNode = "enable";

    const navigate = useNavigate();

    const handleClickButtonBack = () => {
        navigate(-1)
    }

    return (
        <div className={`flex flex-col bg-card-bg p-4 gap-4 rounded-lg ${className}`}>
            <div className="flex justify-between pb-4 border-b-2 border-border-main">
                <Button
                    iconName="ArrowHeadLeft"
                    text="TRỞ LẠI"
                    className="text-gray-hard hover:text-primary"
                    onClick={() => handleClickButtonBack()}
                />
                <div className='text-lg font-medium text-primary'>
                    ĐÃ GIAO
                </div>
            </div>
            <div className={`flex`}>
                {
                    listNode.map((node) => {
                        if (node.id === ativatedNodeId) {
                            defaultNodeStatus = "disable"
                            node = { ...node, status: "active" }
                        } else {
                            node = { ...node, status: defaultNodeStatus }
                        }
                        return (
                            <ProcessNode
                                {...node}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}