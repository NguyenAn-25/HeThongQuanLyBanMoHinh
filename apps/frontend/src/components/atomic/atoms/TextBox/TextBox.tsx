import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"

const textBoxVariants = cva(
    "px-2 py-1 rounded focus:outline-none focus:border-primary w-full bg-card-bg",
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

interface TextBoxProps extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textBoxVariants> {
    type?: 'text' | 'password' | 'email',
    placeholder?: string
}

export function TextBox({
    variant,
    className,
    type = 'text',
    placeholder = 'Nhập vào giá trị',
    ...props
}: TextBoxProps) {
    return <input
        type={type}
        placeholder={placeholder}
        className={cn(textBoxVariants({ variant }), className)}
        {...props}
    >

    </input>
}