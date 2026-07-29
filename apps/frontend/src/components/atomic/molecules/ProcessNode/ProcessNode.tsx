import { Icon } from '../../atoms/Icon/Icon';

type ProcessNodeName = "Invoice" | "Cash" | "WaitingStock" | "Truck" | "Pakage" | "Success";
export type StatusNode = "disable" | "enable" | "active"

export type ProcessNodeId =
    | 'Ordered'
    | 'Cash'
    | 'Commited'
    | 'Paid'
    | 'DepositPaid'
    | 'FullPaid'
    | 'PendingPayment'
    | 'Delivering'
    | 'Success'
    | 'WaitingStock';

export interface ProcessNodeProp {
    id: ProcessNodeId,
    name: ProcessNodeName,
    text: string,
    isStartNode?: boolean,
    isEndNode?: boolean,
    status?: StatusNode,
    preOrderStatus?: "pre" | "full"
}

export function ProcessNode({
    name,
    text,
    isStartNode = false,
    isEndNode = false,
    status = "disable",
    preOrderStatus
}: ProcessNodeProp) {
    return (
        <div className='w-full flex flex-col items-center gap-4'>
            <div className='w-full flex items-center'>
                <div className={`w-full h-0 border-2 ${status === "disable" ? "border-gray-light" : "border-secondary"} ${isStartNode && "border-transparent"}`}></div>
                <div className={`relative shrink-0 w-16 aspect-square rounded-full border-4 flex items-center justify-center ${status === "disable" ? "border-gray-light" : "border-secondary text-secondary"} ${status === "active" ? "bg-secondary text-white" : "bg-card-bg text-gray-light"}`} >
                    <div className='shrink-0 w-8 aspect-square '>
                        <Icon
                            name={name}
                        />
                    </div>
                    {
                        preOrderStatus &&
                        <div className={`absolute left-2/3 top-2/3 bg-card-bg rounded-full border px-1 z-100 text-xs ${status === "active" && 'border-secondary text-secondary'}`}>
                            {preOrderStatus}
                        </div>
                    }
                </div>
                <div className={`w-full h-0 border-2 ${status === "enable" ? "border-secondary" : "border-gray-light"} ${isEndNode && "border-transparent"}`}></div>
            </div>
            <div className='font-medium text-center'>
                {text}
            </div>
        </div>
    )
}