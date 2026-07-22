interface OverlayProps {
    className? : string
}

export function Overlay({className}: OverlayProps){
    return <div className={`fixed inset-0 bg-black/50 ${className}`}>

    </div>
}