"use client"
import { number, z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

const formSchema = z.object({
    id_passo: z.number(),
    name: z.string().min(2, 'Campo com no minimo 2 caracteres'),
    tipo: z.string(),
    leito: z.string().min(2, 'Campo com no minimo 2 caracteres')
})

export const Passo01Form = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id_passo: 1,
            name: '',
            tipo: '',
            leito: ''
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <Card >
            <CardHeader>
                <CardTitle>Usuário</CardTitle>
                <CardDescription>Nos conte um pouco mais sobre você?</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Seu Nome</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Digite seu nome completo"
                                            autoFocus
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tipo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Você é:" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="Paciente">Paciente</SelectItem>
                                                <SelectItem value="Acompanhante">Acompanhante</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="leito"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Digite Seu leito</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Digite seu nome completo"
                                            autoFocus
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit"><Link href="/passo_02">Próximo</Link></Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}