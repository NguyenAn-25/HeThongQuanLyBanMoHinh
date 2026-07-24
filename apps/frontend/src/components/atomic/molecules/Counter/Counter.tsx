import { useState } from "react";
import { Button, TextBox } from "../../atoms";

interface CounterProps {
    defaultQuantity?: number
}

export function Counter({
    defaultQuantity = 1
}: CounterProps) {
    const [value, setValue] = useState<number | "">(defaultQuantity);

    const handleInputChange = (value: string) => {
        const valueAsString = value;
        setValue(valueAsString === "" ? "" : Number(valueAsString));
    };

    const handleButtonClick = (action: "increase" | "decrease") => {
        const change = action === "increase" ? 1 : -1
        const numberValue = value === "" ? 0 : value
        setValue(numberValue + change)
    }

    return (
        <div className="flex gap-2 items-center">
            <Button
                text=""
                iconName="Minus"
                onClick={() => handleButtonClick("decrease")}
                className="border border-border-main rounded-lg p-2 bg-card-bg hover:border-primary text-primary"
            />
            <div className="w-14">
                <TextBox
                    variant="normal"
                    type="number"
                    placeholder=""
                    className="rounded-lg p-2 text-sm"
                    value={value}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            </div>
            <Button
                text=""
                iconName="Plus"
                onClick={() => handleButtonClick("increase")}
                className="border border-border-main rounded-lg  p-2 bg-card-bg hover:border-primary text-primary"
            />
        </div>
    )
}