'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { registerUser } from '@/app/actions';
import { Button } from '@/shared/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormInput } from '../../../form';
import { formRegisterSchema, TFormRegisterValues } from './schemas';

interface Props {
  onClose?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.error('Регистрация успешна 📝. Подтвердите свою почту', {
        icon: '✅',
      });

      onClose?.();
    } catch (error) {
      console.error(error);
      return toast.error('Неверный E-Mail или пароль', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form className='flex flex-col gap-5' onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput name='email' label='E-Mail' required />
        <FormInput name='fullName' label='Полное имя' required />
        <FormInput name='password' label='Пароль' type='password' required />
        <FormInput name='confirmPassword' label='Подтвердите пароль' type='password' required />

        <Button loading={form.formState.isSubmitting} className='h-12 text-base' type='submit'>
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
};
