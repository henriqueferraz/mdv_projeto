"use client"

import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const formSchema = z.object({
    A_15: z.enum(["otimo", "bom", "regular", "ruim"], {
        required_error: "Selecione 1 tipo.",
    }),
})

export const Passo07Form = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "Valores enviados:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
        console.log(data)
    }
    return (
        <Card >
            <CardHeader>
                <CardTitle>Avaliação Geral</CardTitle>
                <CardDescription>Indique na escala abaixo sua satisfação, de modo geral, com os atendimentos e serviços prestados:</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col w-full'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" w-3/4 space-y-6">
                        <FormField
                            control={form.control}
                            name="A_15"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="muito satisfeito" />
                                                </FormControl>
                                                <FormLabel className="text-4xl">
                                                    😀 Muito Satisfeito
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="satisfeito" />
                                                </FormControl>
                                                <FormLabel className="text-4xl">
                                                    🙂 Satisfeito
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="pouco satisfeito" />
                                                </FormControl>
                                                <FormLabel className="text-4xl">
                                                    😐 Pouco Satisfeito
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="insatisfeito" />
                                                </FormControl>
                                                <FormLabel className="text-4xl">
                                                    ☹️ Insatisfeito
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Separator />
                        <Button type="submit"><Link href="/passo_08">Finalizar</Link></Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
