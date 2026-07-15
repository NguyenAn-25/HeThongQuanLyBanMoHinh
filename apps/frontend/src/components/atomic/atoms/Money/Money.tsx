import { MoneyFormatter } from '@/utils/formatter';

const MoneyTypeVariants = {
    normal: "",
    discount: "line-through"
}

interface MoneyProps {
    price: number | string;
    type?: keyof typeof MoneyTypeVariants;
    className?: string;
}

export function Money({
    price,
    type='normal',
    className
}: MoneyProps) {
    return (
        <div className={`inline-flex items-center ${MoneyTypeVariants[type]} ${className}`}>
            {MoneyFormatter({price})}
            <div className="ml-0.5 underline text-[0.8em]">
                đ
            </div>
        </div>
    );
};