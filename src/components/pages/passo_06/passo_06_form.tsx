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
    A_13: z.enum(["otimo", "bom", "regular", "ruim"], {
        required_error: "Selecione 1 tipo.",
    }),
    A_14: z.enum(["otimo", "bom", "regular", "ruim"], {
        required_error: "Selecione 1 tipo.",
    }),
})

export const Passo06Form = () => {
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
                <CardTitle>Serviços prestados - Alimentação</CardTitle>
                <CardDescription>Durante sua estada na MDV, como você avaliaria os Serviços Prestados da Alimentação? </CardDescription>
            </CardHeader>
            <CardContent className='table w-full'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" w-3/4 space-y-6">
                        <FormField
                            control={form.control}
                            name="A_13"
                            render={({ field }) => (
                                <FormItem className="flex justify-between space-y-3">
                                    <FormLabel>Horários:</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className=" inline-flex"
                                        >
                                            <FormItem className="flex justify-between pl-3 space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="otimo" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Ótimo
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="bom" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Bom
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="regular" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Regular</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="ruim" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Ruim</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Separator />
                        <FormField
                            control={form.control}
                            name="A_14"
                            render={({ field }) => (
                                <FormItem className="flex justify-between space-y-3">
                                    <FormLabel>Aspecto geral dos alimentos/refeições:</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className=" inline-flex"
                                        >
                                            <FormItem className="flex items-center pl-3 space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="otimo" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Ótimo
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="bom" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Bom
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="regular" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Regular</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="ruim" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Ruim</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Separator />
                        <Button type="submit"><Link href="/passo_07">Próximo</Link></Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
