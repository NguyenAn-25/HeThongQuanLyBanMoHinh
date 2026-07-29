import { CustomerOrdersItem, type CustomerOrdersItemProps } from "../CustomerOrdersItem/CustomerOrdersItem"

interface CustomerOrdersContainerProps {
    items: CustomerOrdersItemProps[]
}

export function CustomerOrdersContainer({
    items
}: CustomerOrdersContainerProps) {
    return (
        <div className="flex flex-col gap-4">
            {items.map((item) => (
                <CustomerOrdersItem
                    {...item}
                />
            ))
            }
        </div>
    )
}