import svgs from "@/assets/svg"
import type { SVGComponent } from "@/assets/svg/index";

interface IconProps {
    name: string,
    className?: string
}

export const Icon = (
    {
        name,
        className = ''
    }: IconProps
) => {
    const SvgComponent: SVGComponent = svgs[name];
    console.log(svgs)
    return (
        <div className={`w-full h-full ${className}`}>
            {SvgComponent && <SvgComponent/>}
        </div>
    );
}