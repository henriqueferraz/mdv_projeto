import { Passo06Form } from "@/components/pages/passo_06/passo_06_form"
import { Theme } from "@/components/Theme/page"


const Passo_06 = () => {
	{/* obs: voamos utilizar o zoid e React Hook form, para guardar os dados digitados,
neste momento vou fazer somente a parte "visual" do sistema e posteriormente colocar as validações e o 
compartilhamento dos dados com o banco - não utilizar o FormContext*/}
	return (
		<Theme>
			<Passo06Form />
		</Theme>
	)
}

export default Passo_06