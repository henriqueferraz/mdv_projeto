import { Theme } from "@/components/Theme/page"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


const Passo_08 = () => {
	{/* obs: voamos utilizar o zoid e React Hook form, para guardar os dados digitados,
neste momento vou fazer somente a parte "visual" do sistema e posteriormente colocar as validações e o 
compartilhamento dos dados com o banco - não utilizar o FormContext*/}
	return (
		<Theme>
			<div className="w-full max-w-4xl mx-auto">
				{/* DIV Global */}
				<div className="my-20 flex justify-center items-center">
					{/* Card da Pesquisa de Satisfação - Inicio */}
					<Card className="w-[350px]">
						<CardHeader>
							<CardTitle>Pesquisa de satisfação</CardTitle>
							<CardDescription className=" text-justify"><strong>Muito obrigado pela sua participação</strong>, saiba que essas informações ajudaram muito a melhorar nossos serviços. 🥰
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</div>
		</Theme>
	)
}

export default Passo_08