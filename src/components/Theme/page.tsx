
import { ReactNode } from "react";
import { Header } from "@/components/header";


type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    return (
        <div className="min-h-screen">{/* DIV Container */}
            {/* DIV Area - Area geral */}
            <div className="flex flex-col m-auto max-w-5xl min-h-screen">
                <Header />
                {/* DIV PAges - Páginas */}
                <div className="flex-1 pl-10 pt-10">
                    {children}
                </div>
            </div>
        </div>
    )
}