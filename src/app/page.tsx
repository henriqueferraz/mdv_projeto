import { Header } from "@/components/header";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
	return (
		<div className="w-full max-w-4xl mx-auto">
			<Header />
			{/* DIV Global */}
			<div className="my-20 flex justify-center items-center">
				{/* Card da Pesquisa de Satisfação - Inicio */}
				<Card className="w-[350px]">
					<CardHeader>
						<CardTitle>Pesquisa de satisfação</CardTitle>
						<CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Etiam sed lorem ac mi facilisis accumsan vel non mi. Cras pretium efficitur justo quis tincidunt.
						</CardDescription>
					</CardHeader>
					<CardContent>
						{/* Alert Dialog - Inicio */}
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button variant="default">Vamos Começar?</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Lei Geral de Proteção aos Dados Pessoais:</AlertDialogTitle>
									<AlertDialogDescription className=" text-justify">
										Em conformidade com a lei LGPD 13.709/2019, não utilizamos os dados solicitados, para ceder ou vender
										informações de contatos de pacientes, bem como de seus acompanhantes, ou de qualquer outra pessoa que
										utilize dos nossos serviços, para divulgação de produtos e/ou serviços por telemarketing ou outros meios
										utilizado para menssagens.<br />
										Os dados solicitados são extremamente para fins de controladoria dos serviços prestados e monitoramento da
										gestão e qualidade de nossos serviços. Solicitamos a manifestação livre, explícita e inequivoca do titular
										concordando com o tratamento de seus dados pessoais para essa finalidade específica.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel className=" bg-red-600">Não Concordo</AlertDialogCancel>
									<AlertDialogAction className=" bg-green-600">Concordo</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
						{/* Alert Dialog - Final */}
					</CardContent>
				</Card>
				{/* Card da Pesquisa de Satisfação - Fnal */}
			</div>
		</div>
	)
}
export default Page;