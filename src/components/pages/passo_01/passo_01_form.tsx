"use client"

import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import Link from 'next/link'


const formSchema = z.object({
    name: z.string().min(2, 'Campo com no minimo 2 caracteres.'),
    tipo: z.string({
        required_error: "Por favor selecione um dos campos.",
    }),
    leito: z.string().min(2, 'Campo com no minimo 2 caracteres.')
})

export const Passo01Form = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            tipo: '',
            leito: ''
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
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
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full items-center gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Informe seu Nome</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoFocus
                                            placeholder="Digite seu nome completo"
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
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecione o tipo de usuário" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="paciente">Paciente</SelectItem>
                                            <SelectItem value="acompanhante">Acompanhante</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="leito"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Informe seu Leito</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoFocus
                                            placeholder="Digite seu leito completo"
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
