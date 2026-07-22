import { cva, type VariantProps } from "class-variance-authority";

import { TextBox, Icon } from "@/components/atomic/atoms";
import { cn } from "@/utils/cn"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const searchBarVariants = cva(
    "flex w-full focus-within:border-primary bg-card-bg rounded px-2 items-center",
    {
        variants: {
            variant: {
                normal: "border-2 border-border-main",
                borderless: ""
            }
        },
        defaultVariants: {
            variant: "normal"
        }
    }
);

interface SearchBarProps extends VariantProps<typeof searchBarVariants> {
    placeholder?: string,
    className?: string
}

export function SearchBar({
    variant,
    placeholder,
    className
}: SearchBarProps) {
    const navigate = useNavigate();

    const [keyWord, setKeyWord] = useState('');

    const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (keyWord.trim()) {
            navigate(`/search?query=${encodeURIComponent(keyWord.trim())}`);
        }
    };

    return (
        <form onSubmit={e => handleSearch(e)} className={cn(searchBarVariants({ variant }), className)}>
            <TextBox
                placeholder={placeholder}
                variant={"borderless"}
                value={keyWord}
                onChange={e => setKeyWord(e.target.value)}
                type="search"
            />
            <div className="size-10 cursor-pointer">
                <Icon
                    name="Search"
                />
            </div>
        </form>
    )
}