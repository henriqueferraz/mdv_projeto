import { Passo01Form } from "@/components/pages/passo_01/passo_01_form"
import { Theme } from "@/components/Theme/page"


const Passo_01 = () => {
	{/* obs: voamos utilizar o zoid e React Hook form, para guardar os dados digitados,
neste momento vou fazer somente a parte "visual" do sistema e posteriormente colocar as validações e o 
compartilhamento dos dados com o banco - não utilizar o FormContext*/}
	return (
		<Theme>
			<Passo01Form />
		</Theme>
	)
}

export default Passo_01