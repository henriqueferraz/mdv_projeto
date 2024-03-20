import { FormProvider } from "@/contexts/FormContext";
import { ReactNode } from "react";
import { Header } from "@/components/header";

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    return (
        <FormProvider>
            {/* DIV Container */}
            <div className="min-h-screen">
                {/* DIV Area - Area geral */}
                <div className="flex flex-col m-auto max-w-5xl min-h-screen">
                    <Header />
                    {/* DIV Steps - Passos */}
                    <div className="flex flex-1">
                        {/* DIV Sidebar - Sidebar */}
                        <div className="w-64 border-solid border-r">
                            ...
                            <h1>oi</h1>
                        </div>
                        {/* DIV PAges - Páginas */}
                        <div className="flex-1 pl-10 pt-10">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}