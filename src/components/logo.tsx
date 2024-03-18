import Image from "next/image"

export const Logo = () => {
    return (
        <div className=" text-xl">
            <Image
                src='/images/logo_MDV-novo_bann.png'
                width={170}
                height={100}
                alt='Maternidade Darcy Vargas'
            />
        </div>
    )
}