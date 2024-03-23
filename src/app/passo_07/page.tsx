import { Passo07Form } from "@/components/pages/passo_07/passo_07_form"
import { Theme } from "@/components/Theme/page"


const Passo_07 = () => {
	{/* obs: voamos utilizar o zoid e React Hook form, para guardar os dados digitados,
neste momento vou fazer somente a parte "visual" do sistema e posteriormente colocar as validações e o 
compartilhamento dos dados com o banco - não utilizar o FormContext*/}
	return (
		<Theme>
			<Passo07Form />
		</Theme>
	)
}

export default Passo_07