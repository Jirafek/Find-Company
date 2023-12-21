"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm, SubmitHandler} from 'react-hook-form';

type FormData = {
    name: string;
}

export default function Home() {
    const {handleSubmit, register, formState: {errors}, reset} = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);

        reset();
    }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-xl">Поиск и проверка контрагентов</h1>
            <p className="text-sm opacity-70">Для более быстрого и точного отображения информации об организации,
                предпочтительнее
                осуществлять поиск
                организации по УНП</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input {...register('name', {
                    required: 'Обязательное поле',
                })} placeholder="Название организации или УНП"/>

                <Button type={"submit"}>
                    Поиск
                </Button>
            </form>
        </div>
    )
}
