import { Button } from "../../atoms";

interface PaginationBarProps {
    currentPage?: number
    totalPage: number
    onClickNumber: (index: number) => void
    onClickMoveButton: (type: 'previous' | 'next') => void
}
// số nút hiện thị mỗi bên (trái phải)
const displayRange = 2

export function PaginationBar({
    currentPage = 1,
    totalPage,
    onClickNumber,
    onClickMoveButton
}: PaginationBarProps) {
    const firstNumber = 1
    const lastNumber = totalPage
    const overFlowLeft = currentPage - firstNumber - 1 > (displayRange)
    const overFlowRight = totalPage - currentPage - 1 > (displayRange)
    const minIndex = overFlowLeft ? (currentPage - displayRange) : firstNumber
    const maxIndex = overFlowRight ? (currentPage + displayRange) : lastNumber
    const middleRange = maxIndex - minIndex + 1
    console.log(currentPage)

    return (
        <div className="flex">
            <Button
                text=""
                iconName="Previous"
                iconSize="2xs"
                className={`bg-white border border-border-main px-3 font-light text-primary hover:text-white hover:bg-primary hover:border-primary`}
                onClick = {() => onClickMoveButton('previous')}
            />
            {overFlowLeft &&
                <div className="flex">
                    <Button className={`border border-border-main py-1 px-3 font-light text-primary hover:text-white hover:bg-primary hover:border-primary`}
                        text={firstNumber.toString()}
                        onClick={() => onClickNumber(firstNumber)}
                    />
                    <Button className="bg-white border border-border-main py-1 px-3 font-light text-primary hover:text-white hover:bg-primary hover:border-primary"
                        text={"..."}
                    />
                </div>
            }
            {
                Array.from({ length: middleRange }, (_, i) => i + minIndex).map((item) => (
                    <Button className={`border py-1 px-3 font-light hover:text-white hover:bg-primary hover:border-primary ${currentPage === item ? 'bg-primary border-primary text-white' : 'bg-white text-primary border-border-main'}`}
                        text={item.toString()}
                        onClick={() => onClickNumber(item)}
                    />
                ))
            }
            {overFlowRight &&
                <div className="flex">
                    <Button className="bg-white border border-border-main py-1 px-3 font-light text-primary hover:text-white hover:bg-primary hover:border-primary"
                        text={"..."}
                    />
                    <Button className="bg-white border border-border-main py-1 px-3 font-light text-primary hover:text-white hover:bg-primary hover:border-primary"
                        text={lastNumber.toString()}
                        onClick={() => onClickNumber(lastNumber)}
                    />
                </div>
            }
            <Button
                text=""
                iconName="Next"
                iconSize="2xs"
                className="bg-white border border-border-main px-3 font-light text-primary hover:text-white hover:bg-primary hover:border-primary"
                onClick={() => onClickMoveButton('next')}
            />
        </div>
    )
}