"use client"

import { Theme } from "@/components/Theme/page"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const Passo_03 = () => {
	{/* obs: voamos utilizar o zoid e React Hook form, para guardar os dados digitados,
neste momento vou fazer somente a parte "visual" do sistema e posteriormente colocar as validações e o 
compartilhamento dos dados com o banco - não utilizar o FormContext*/}
	return (
		<Theme>
			<Card >
				<CardHeader>
					<CardTitle>Passo 03</CardTitle>
					<CardDescription>Nos conte um pouco mais sobre você?</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Seu Nome</Label>
								<Input
									type="text"
									autoFocus
									id="name"
									placeholder="Digite seu nome completo" />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline"><Link href="/passo_02">Voltar</Link></Button>
					<Button><Link href="/passo_03">Próximo</Link></Button>
				</CardFooter>
			</Card>
		</Theme>
	)
}

export default Passo_03