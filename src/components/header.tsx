import { Logo } from "@/components/logo"

export const Header = () => {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <Logo />
            </div>
            <div className="flex items-center gap-3 lg:text-5xl font-bold italic">
                Pesquisa de Satisfação
            </div>
        </header>
    )
}